'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
}

export const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to the ADAPTA-LABS Ops Portal [Version 2.4.0]' },
    { type: 'output', content: '(c) 2024 Adapta Labs. All rights reserved.' },
    { type: 'output', content: '' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const commands: Record<string, () => void> = {
    help: () => {
      setLines(prev => [...prev, { type: 'output', content: 'Available commands:' },
        { type: 'output', content: '  - status: Check active fulfillment status' },
        { type: 'output', content: '  - registry: List core capability nodes' },
        { type: 'output', content: '  - portal: Get initialization details' },
        { type: 'output', content: '  - clear: Reset terminal buffer' },
        { type: 'output', content: '  - telemetry: Display session metadata' },
      ]);
    },
    status: () => {
      setLines(prev => [...prev,
        { type: 'output', content: 'Scanning active infrastructure...' },
        { type: 'success', content: 'READY: "Shopify Sync Engine" - 100% (Deployed)' },
        { type: 'success', content: 'READY: "n8n Automation Loop" - 100% (Active)' },
        { type: 'output', content: 'Pending: 1 security audit.' },
      ]);
    },
    registry: () => {
      setLines(prev => [...prev,
        { type: 'output', content: 'Capability Matrix:' },
        { type: 'output', content: '1. AI Agents (Voice/Text)' },
        { type: 'output', content: '2. Vision AI (YOLOv8)' },
        { type: 'output', content: '3. Full-Stack Systems' },
        { type: 'output', content: '4. Enterprise SEO/AEO' },
      ]);
    },
    telemetry: () => {
      setLines(prev => [...prev,
        { type: 'output', content: 'User: guest_architect_808' },
        { type: 'output', content: 'Access level: Restricted-View' },
        { type: 'output', content: 'Protocol: Secure HTTPS' },
      ]);
    },
    portal: () => {
      setLines(prev => [...prev,
        { type: 'output', content: 'Lead: Adapta Architects' },
        { type: 'output', content: 'Email: hello@adapta-agency.com' },
        { type: 'output', content: 'Link: https://adapta-agency.com/initialize' },
      ]);
    },
    clear: () => {
      setLines([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.trim().toLowerCase();

    if (!cmd) return;

    setLines(prev => [...prev, { type: 'input', content: cmd }]);

    if (commands[cmd]) {
      commands[cmd]();
    } else {
      setLines(prev => [...prev, { type: 'error', content: `Syntax Error: Unknown command "${cmd}"` }]);
    }

    setInputValue('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border-2 border-slate-100 bg-white shadow-2xl font-mono text-sm relative z-10">
      {/* Title Bar */}
      <div className="bg-slate-900 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-cyan-400" />
          <span className="text-slate-400 text-[10px] font-tech uppercase tracking-widest">ops-portal — bash</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={scrollRef}
        className="h-80 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent bg-slate-50/30"
      >
        {lines.map((line, i) => (
          <div key={i} className={`mb-1.5 ${
            line.type === 'error' ? 'text-rose-600' :
            line.type === 'success' ? 'text-emerald-600' :
            line.type === 'input' ? 'text-indigo-600' : 'text-slate-600'
          }`}>
            {line.type === 'input' && <span className="text-indigo-600 font-bold mr-2">➜</span>}
            <span className={line.type === 'input' ? 'font-bold' : ''}>{line.content}</span>
          </div>
        ))}

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="text-indigo-600 font-bold mr-2">➜</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-indigo-600 focus:ring-0 p-0 font-bold"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};
