'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, ChevronRight } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
}

export const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to the ZS-Tech-Agency Client Portal [Version 1.0.4]' },
    { type: 'output', content: '(c) 2024 ZS Tech. All rights reserved.' },
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
        { type: 'output', content: '  - status: Check active project status' },
        { type: 'output', content: '  - services: List our technology offerings' },
        { type: 'output', content: '  - contact: Get lead engineer contact details' },
        { type: 'output', content: '  - clear: Clear the terminal screen' },
        { type: 'output', content: '  - whoami: Display session information' },
      ]);
    },
    status: () => {
      setLines(prev => [...prev,
        { type: 'output', content: 'Scanning active repository...' },
        { type: 'success', content: 'DONE: "Enterprise Dashboard" - 85% complete' },
        { type: 'success', content: 'DONE: "AI Voice Agent" - 100% (Production)' },
        { type: 'output', content: 'Pending: 2 architectural reviews.' },
      ]);
    },
    services: () => {
      setLines(prev => [...prev,
        { type: 'output', content: 'Fetching service matrix...' },
        { type: 'output', content: '1. AI Automation & Agents' },
        { type: 'output', content: '2. Full-Stack Web Development' },
        { type: 'output', content: '3. Cross-Channel Commerce' },
        { type: 'output', content: '4. SEO / AEO Engines' },
      ]);
    },
    whoami: () => {
      setLines(prev => [...prev,
        { type: 'output', content: 'User: guest_developer_42' },
        { type: 'output', content: 'Access level: Read-Only' },
        { type: 'output', content: 'Location: unknown (proxied)' },
      ]);
    },
    contact: () => {
      setLines(prev => [...prev,
        { type: 'output', content: 'Lead: ZS' },
        { type: 'output', content: 'Email: hello@zs-tech.agency' },
        { type: 'output', content: 'Link: https://zs-tech.agency/contact' },
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
      setLines(prev => [...prev, { type: 'error', content: `Command not found: ${cmd}` }]);
    }

    setInputValue('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-border bg-black/90 shadow-2xl font-mono text-sm">
      {/* Title Bar */}
      <div className="bg-[#1a1b26] px-4 py-2 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-primary" />
          <span className="text-gray-400 text-xs">client-portal — bash — 80x24</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={scrollRef}
        className="h-80 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
      >
        {lines.map((line, i) => (
          <div key={i} className={`mb-1 ${
            line.type === 'error' ? 'text-red-400' :
            line.type === 'success' ? 'text-green-400' :
            line.type === 'input' ? 'text-primary' : 'text-gray-300'
          }`}>
            {line.type === 'input' && <span className="text-primary mr-2">➜</span>}
            {line.content}
          </div>
        ))}

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="text-primary mr-2">➜</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-primary focus:ring-0 p-0"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};
