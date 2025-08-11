import { useEffect, useRef } from "react";

const GRADIO_SCRIPT_SRC =
  "https://gradio.s3-us-west-2.amazonaws.com/5.34.2/gradio.js";

export default function GradioEmbed({ src, minHeight = 720 }) {
  // In SSR environments, render nothing on the server
  if (typeof window === "undefined") return null;

  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    // Load the script only once
    const existing = document.querySelector(
      `script[src="${GRADIO_SCRIPT_SRC}"]`
    );
    if (existing) return;

    const s = document.createElement("script");
    s.type = "module";
    s.src = GRADIO_SCRIPT_SRC;
    s.async = true;
    s.crossOrigin = "anonymous";
    document.head.appendChild(s);
  }, []);

  return (
    <div className="w-full">
      {/* Custom element provided by Gradio */}
      <gradio-app
        src={src}
        style={{
          display: "block",
          width: "100%",
          minHeight:
            typeof minHeight === "number" ? `${minHeight}px` : minHeight,
        }}
      />
    </div>
  );
}
