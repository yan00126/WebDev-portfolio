// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chat from "../src/components/Chat.jsx";

const reply = (text) => ({ ok: true, json: async () => ({ reply: text }) });
const failure = (status, error) => ({ ok: false, status, json: async () => ({ error }) });

let fetchMock;
beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

const sentBody = (n = 0) => JSON.parse(fetchMock.mock.calls[n][1].body);

describe("Chat", () => {
  it("shows the greeting and three suggested questions", () => {
    render(<Chat />);
    expect(screen.getByText(/Hi, I’m Fei’s AI assistant/)).toBeTruthy();
    expect(screen.getByRole("button", { name: /What are your skills/ })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Tell me about your projects/ })).toBeTruthy();
    expect(screen.getByRole("button", { name: /How can we work together/ })).toBeTruthy();
  });

  it("sends a suggestion to /api/chat and renders the Markdown reply", async () => {
    fetchMock.mockResolvedValue(reply("**Next.js** and TypeScript"));
    render(<Chat />);
    await userEvent.click(screen.getByRole("button", { name: /What are your skills/ }));
    await screen.findByText("Next.js");
    expect(fetchMock.mock.calls[0][0]).toBe("/api/chat");
    expect(fetchMock.mock.calls[0][1].method).toBe("POST");
    expect(sentBody()).toEqual({ message: "What are your skills?", history: [] });
    expect(document.querySelector(".chat-reply strong")?.textContent).toBe("Next.js");
  });

  it("sends earlier turns as history on a follow-up", async () => {
    fetchMock.mockResolvedValueOnce(reply("First answer")).mockResolvedValueOnce(reply("Second answer"));
    render(<Chat />);
    const box = screen.getByLabelText("Your message");
    await userEvent.type(box, "First question{enter}");
    await screen.findByText("First answer");
    await userEvent.type(box, "Follow up{enter}");
    await screen.findByText("Second answer");
    expect(sentBody(1).history).toEqual([
      { role: "user", content: "First question" },
      { role: "assistant", content: "First answer" },
    ]);
  });

  it("shows the server's message on a rate limit, removes the failed bubble and keeps the text", async () => {
    fetchMock.mockResolvedValue(failure(429, "You're sending questions too quickly. Please wait a minute and try again."));
    render(<Chat />);
    const box = screen.getByLabelText("Your message");
    await userEvent.type(box, "Hello there{enter}");
    expect((await screen.findByRole("alert")).textContent).toMatch(/too quickly/);
    expect(screen.queryByText("Hello there")).toBeNull();
    expect(box.value).toBe("Hello there");
  });

  it("shows a generic error when the network fails", async () => {
    fetchMock.mockRejectedValue(new TypeError("Failed to fetch"));
    render(<Chat />);
    await userEvent.type(screen.getByLabelText("Your message"), "Hello{enter}");
    expect((await screen.findByRole("alert")).textContent).toMatch(/couldn’t connect/);
  });

  it("treats an empty reply as an error", async () => {
    fetchMock.mockResolvedValue(reply("   "));
    render(<Chat />);
    await userEvent.type(screen.getByLabelText("Your message"), "Hello{enter}");
    await screen.findByRole("alert");
  });

  it("ignores blank input and double submits while a reply is pending", async () => {
    let resolve;
    fetchMock.mockReturnValue(new Promise((r) => (resolve = r)));
    render(<Chat />);
    const box = screen.getByLabelText("Your message");
    await userEvent.type(box, "   {enter}");
    expect(fetchMock).not.toHaveBeenCalled();
    await userEvent.type(box, "One{enter}");
    await userEvent.type(box, "Two{enter}");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    resolve(reply("Done"));
    await waitFor(() => expect(screen.getByText("Done")).toBeTruthy());
  });
});
