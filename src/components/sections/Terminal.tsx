"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { TERMINAL_COMMANDS } from "@/lib/constants";

interface HistoryItem {
  command: string;
  output: string;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { command: "", output: '  Welcome! Type "help" to list all available commands.\n' },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    setCmdHistory((h) => [...h, trimmed]);
    setHistoryIdx(-1);

    if (lower === "clear") {
      setHistory([]);
      return;
    }

    // eslint-disable-next-line security/detect-object-injection
    const output = TERMINAL_COMMANDS[lower] || `  command not found: ${trimmed}. Type "help" for a list of valid commands.\n`;
    setHistory((h) => [...h, { command: trimmed, output }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIdx < cmdHistory.length - 1) {
        const newIdx = historyIdx + 1;
        setHistoryIdx(newIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - newIdx]);
      } else {
        setHistoryIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label">Console</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-heading text-foreground">
            Interactive Terminal
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-md">
            Query my credentials, skills, work experience, and stack inside a custom sandboxed zsh shell.
          </p>
        </motion.div>

        {/* Terminal Shell Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="terminal border border-border shadow-md bg-card"
        >
          {/* macOS window top bar */}
          <div className="terminal-header flex items-center justify-between">
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <span className="text-xs font-mono font-medium text-muted-foreground/70 select-none">
              anish@fullstack ~ zsh
            </span>
            <div className="w-14" /> {/* spacer to balance lights */}
          </div>

          {/* Interactive Shell Body */}
          <div
            ref={bodyRef}
            onClick={() => inputRef.current?.focus()}
            className="terminal-body cursor-text max-h-[350px] min-h-[300px] overflow-y-auto bg-card text-foreground"
          >
            {history.map((item, i) => (
              <div key={i} className="mb-2">
                {item.command && (
                  <div className="flex gap-2 items-center mb-1">
                    <span className="terminal-prompt select-none">❯</span>
                    <span className="font-semibold text-foreground">{item.command}</span>
                  </div>
                )}
                <pre className="terminal-output text-muted-foreground font-mono">{item.output}</pre>
              </div>
            ))}
            
            {/* Input Line */}
            <div className="flex gap-2 items-center mt-2">
              <span className="terminal-prompt select-none">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input text-foreground font-mono"
                autoComplete="off"
                spellCheck={false}
                placeholder="type 'help' to start..."
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
