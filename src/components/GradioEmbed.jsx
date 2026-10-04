import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { FiArrowUpRight, FiMessageCircle, FiSend } from "react-icons/fi";

const suggestions = ["What are your skills?", "Tell me about your projects", "How can we work together?"];

export default function GradioEmbed({ src }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const client = useRef(null);
  const busy = useRef(false);
  const conversation = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const panel = conversation.current;
    if (panel) panel.scrollTop = panel.scrollHeight;
  }, [messages, pending, error]);

  async function send(text) {
    const message = text.trim();
    if (!message || busy.current) return;
    busy.current = true;
    setPending(true);
    setError("");
    setInput("");
    setMessages((previous) => [...previous, { role: "user", content: message }]);
    try {
      if (!client.current) {
        const { Client } = await import("@gradio/client");
        client.current = await Client.connect(new URL(src).origin);
      }
      const result = await client.current.predict("/chat", { message });
      const reply = result.data?.[0];
      if (typeof reply !== "string" || !reply.trim()) throw new Error("Empty response");
      setMessages((previous) => [...previous, { role: "assistant", content: reply }]);
    } catch {
      setMessages((previous) => previous.slice(0, -1));
      setInput(message);
      setError("The chat couldn’t connect. Please try sending your message again.");
    } finally {
      busy.current = false;
      setPending(false);
      inputRef.current?.focus();
    }
  }

  return (
    <section aria-labelledby="fei-chat-title" className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5">
      <header className="flex items-start gap-4 border-b border-emerald-100 bg-emerald-50/70 px-6 py-7 sm:px-8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700" aria-hidden="true"><FiMessageCircle size={24} /></span>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">A little more about me</p>
          <h2 id="fei-chat-title" className="text-2xl font-medium tracking-wide text-slate-900 sm:text-3xl">Chat with Fei</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">Explore my background, projects, and ideas. Ask away.</p>
        </div>
      </header>

      <div ref={conversation} role="log" aria-label="Conversation with Fei’s AI assistant" aria-live="polite" aria-relevant="additions text" className="h-[340px] space-y-6 overflow-y-auto overscroll-contain px-5 py-7 sm:h-[380px] sm:px-8">
        <div className="max-w-xl">
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-700">FEI’S AI ASSISTANT</p>
          <div className="rounded-2xl rounded-tl-sm bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">Hi, I’m Fei’s AI assistant. Get to know my work, the tools I use, or how we could build something together.</div>
        </div>
        {messages.length === 0 && <div className="flex flex-wrap gap-2">{suggestions.map((question) => <button key={question} type="button" onClick={() => send(question)} className="flex items-center gap-2 rounded-full border border-emerald-100 px-4 py-2.5 text-left text-sm text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">{question}<FiArrowUpRight className="shrink-0" aria-hidden="true" /></button>)}</div>}
        {messages.map((message, index) => <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}><div className={`max-w-[90%] whitespace-pre-wrap break-words rounded-2xl px-5 py-3 text-sm leading-7 sm:max-w-[80%] ${message.role === "user" ? "rounded-tr-sm bg-emerald-700 text-white" : "rounded-tl-sm bg-slate-50 text-slate-700"}`}><span className="sr-only">{message.role === "user" ? "You: " : "Fei’s assistant: "}</span>{message.role === "assistant" ? <div className="chat-reply"><Markdown>{message.content}</Markdown></div> : message.content}</div></div>)}
        {pending && <p role="status" className="text-sm text-emerald-700">Thinking…</p>}
        {error && <p role="alert" className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-800">{error}</p>}
      </div>

      <form onSubmit={(event) => { event.preventDefault(); send(input); }} className="border-t border-slate-100 p-4 sm:px-8 sm:py-5">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 pl-4 transition focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100">
          <label htmlFor="fei-chat-message" className="sr-only">Your message</label>
          <input ref={inputRef} id="fei-chat-message" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about my work…" autoComplete="off" maxLength={4000} className="min-w-0 flex-1 bg-transparent py-2 text-base text-slate-800 outline-none placeholder:text-slate-400" />
          <button type="submit" disabled={pending || !input.trim()} aria-label="Send message" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"><FiSend size={18} aria-hidden="true" /></button>
        </div>
      </form>
    </section>
  );
}
