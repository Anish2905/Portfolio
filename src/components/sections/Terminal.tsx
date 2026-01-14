"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { TERMINAL_COMMANDS, SITE_CONFIG } from "@/lib/constants";

interface HistoryItem {
    command: string;
    output: string;
}

export default function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<HistoryItem[]>([
        { command: "", output: '  Welcome! Type "help" to see available commands.\n' },
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
        const trimmed = cmd.trim().toLowerCase();
        if (!trimmed) return;

        setCmdHistory((h) => [...h, trimmed]);
        setHistoryIdx(-1);

        if (trimmed === "clear") {
            setHistory([]);
            return;
        }

        // eslint-disable-next-line security/detect-object-injection
        const output = TERMINAL_COMMANDS[trimmed] || `  command not found: ${trimmed}\n`;
        setHistory((h) => [...h, { command: cmd, output }]);
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
        <section id="contact" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="section-label">Contact</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Let&apos;s connect
                    </h2>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm max-w-md">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities.
                    </p>
                </motion.div>

                {/* Terminal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="terminal"
                >
                    <div className="terminal-header">
                        <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                        <span className="terminal-dot" style={{ background: "#febc2e" }} />
                        <span className="terminal-dot" style={{ background: "#28c840" }} />
                        <span className="ml-4 text-xs text-[hsl(var(--muted-foreground))]">guest@anish ~ zsh</span>
                    </div>
                    <div
                        ref={bodyRef}
                        onClick={() => inputRef.current?.focus()}
                        className="terminal-body cursor-text"
                    >
                        {history.map((item, i) => (
                            <div key={i}>
                                {item.command && (
                                    <div className="flex gap-2 items-center">
                                        <span className="terminal-prompt">❯</span>
                                        <span>{item.command}</span>
                                    </div>
                                )}
                                <pre className="terminal-output">{item.output}</pre>
                            </div>
                        ))}
                        <div className="flex gap-2 items-center">
                            <span className="terminal-prompt">❯</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="terminal-input"
                                autoComplete="off"
                                spellCheck={false}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Quick Contact Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-8"
                >
                    <a href={`mailto:${SITE_CONFIG.email}`} className="btn-primary">
                        Send me an email
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
