import React, { useState } from 'react';
import { ArrowRight, Sparkles, Terminal, Shield, Cpu, Mail, Copy, Check, Boxes, Workflow } from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
  onScrollToTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal, onScrollToTerminal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('support@viezai.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-neutral-900 bg-black">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-gradient-to-b from-neutral-800/30 via-emerald-950/20 to-transparent blur-3xl opacity-60"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Stealth Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/90 px-3.5 py-1 text-xs text-neutral-300 backdrop-blur transition-all hover:border-neutral-700 hover:bg-neutral-900 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="font-mono text-neutral-200">Stealth Systems Collective</span>
          <span className="text-neutral-600">/</span>
          <span className="text-emerald-400 font-mono">viezagent Core Release</span>
          <Sparkles className="h-3 w-3 text-emerald-400 ml-0.5" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-5xl mx-auto leading-[1.08]">
          One Agent Platform.
          <br />
          <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Driven by Harness Runtimes.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto font-normal leading-relaxed">
          The next leap in AI agent engineering: <strong className="text-neutral-200 font-medium">decoupling cognition from execution</strong>. 
          Consumer apps connect with 1 base URL and 1 API key, while swappable Harness runtimes 
          execute code inside isolated sandboxes across Claude Code, OpenAI Codex, DeepSeek, and Google Antigravity.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-neutral-200 active:scale-[0.98] shadow-sm"
          >
            <span>Request Architecture Access</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href="#harness"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-700 hover:bg-neutral-900 hover:text-white active:scale-[0.98]"
          >
            <Boxes className="h-4 w-4 text-emerald-400" />
            <span>How Harness Changes Everything</span>
          </a>

          <button
            onClick={onScrollToTerminal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-neutral-850 bg-neutral-950/60 px-5 py-3 text-sm font-medium text-neutral-400 transition-all hover:border-neutral-700 hover:text-neutral-200"
          >
            <Terminal className="h-4 w-4 text-neutral-400" />
            <span>Inspect Wire Protocols</span>
          </button>
        </div>

        {/* Direct Contact Banner (Stealth contact) */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-neutral-500">
          <span>Direct engineering contact:</span>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white bg-neutral-900/90 border border-neutral-800 px-2.5 py-1 rounded transition-colors group cursor-pointer"
          >
            <Mail className="w-3 h-3 text-emerald-400" />
            <span className="font-semibold text-emerald-300">support@viezai.com</span>
            {copied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3 text-neutral-500 group-hover:text-neutral-300" />
            )}
          </button>
          <span className="text-neutral-600 hidden md:inline">|</span>
          <span className="text-neutral-500 hidden md:inline">Private VPC & On-Prem Runtimes Available</span>
        </div>

        {/* Key Platform Pillars */}
        <div className="mt-14 pt-8 border-t border-neutral-900/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-5xl mx-auto">
          <div className="p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-900">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>Harness Runtimes</span>
            </div>
            <p className="text-xs text-neutral-400">Swappable Claude, Codex, DeepSeek, Antigravity, & Pi adapters in isolated containers.</p>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-900">
            <div className="flex items-center gap-2 text-neutral-200 text-xs font-mono mb-1">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>OpenAI Facade</span>
            </div>
            <p className="text-xs text-neutral-400">`POST /v1/chat/completions` where model names the agent key. 100% SDK compatible.</p>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-900">
            <div className="flex items-center gap-2 text-neutral-200 text-xs font-mono mb-1">
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              <span>Bring-Your-Own MCP</span>
            </div>
            <p className="text-xs text-neutral-400">Per-call user credentials with zero platform persistence. Zero secret leakage.</p>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-900">
            <div className="flex items-center gap-2 text-neutral-200 text-xs font-mono mb-1">
              <Workflow className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kanban & A2A</span>
            </div>
            <p className="text-xs text-neutral-400">Roleplay agent team coordination, interactive workboards, and ACP protocol.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
