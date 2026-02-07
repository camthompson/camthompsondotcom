"use client";

import { useEffect, useState } from "react";

const commands = [
  "nvim .",
  "git rebase main",
  "npx vite build",
  "npx vitest",
  "kubectl get deploy -A",
  "terraform apply",
  "gh pr review",
  "psql",
  "git init frontend-monorepo",
].sort(() => Math.random() - 0.5) as string[]; // Shuffle commands randomly

function Prompt() {
  return (
    <>
      <span className="text-gengar-gray">[</span>
      <span className="text-bulbasaur-teal">~</span>
      <span className="text-gengar-gray">]</span> <span className="text-gengar-peach">»</span>{" "}
    </>
  );
}

function TypingPrompt() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting">("typing");

  useEffect(() => {
    const cmd = commands[cmdIndex];

    if (phase === "typing") {
      if (charIndex < cmd.length) {
        const timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase("deleting"), 2000);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === "deleting") {
      if (charIndex > 0) {
        const timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
        return () => clearTimeout(timeout);
      } else {
        setPhase("typing");
        setCmdIndex((i) => (i + 1) % commands.length);
      }
    }
  }, [phase, charIndex, cmdIndex]);

  const text = commands[cmdIndex].slice(0, charIndex);

  return (
    <div className="terminal-line">
      <Prompt />
      <span className="text-gengar-bright">{text}</span>
      <span className="cursor" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <main className="terminal w-full max-w-2xl overflow-hidden rounded-lg">
        {/* Title bar */}
        <div className="terminal-titlebar flex items-center gap-2 bg-gengar-mid/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Terminal body */}
        <div className="bg-gengar-body/80 px-5 py-5 text-sm leading-relaxed sm:px-6 sm:text-base sm:leading-loose">
          {/* Line 1: whoami */}
          <div className="terminal-line">
            <Prompt />
            <span className="text-gengar-bright">whoami</span>
          </div>
          <div className="terminal-line">🪵 🐂 ❤️‍🔥 🐇 🐉 🐢 🦐 🍑 🐕 ⚽ 🚴 🏃 🏋️ 🎮</div>

          {/* Blank line */}
          <div className="terminal-line">&nbsp;</div>

          {/* Line 2: curl > /dev/null */}
          <div className="terminal-line">
            <Prompt />
            <span className="text-gengar-bright">curl</span>{" "}
            <a
              href="https://github.com/camthompson"
              className="text-bulbasaur-green underline decoration-bulbasaur-green/40 underline-offset-2 transition-colors hover:text-bulbasaur-green-hover hover:decoration-bulbasaur-green-hover/60"
            >
              https://github.com/camthompson
            </a>{" "}
            <span className="text-gengar-light">{">"}</span>{" "}
            <span className="text-gengar-lavender">/dev/null</span>
          </div>

          {/* Blank line */}
          <div className="terminal-line">&nbsp;</div>

          {/* Typing prompt */}
          <TypingPrompt />
        </div>
      </main>
    </div>
  );
}
