import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('support@viezai.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-neutral-900 bg-black text-neutral-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand info & Stealth Team Statement */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <div className="w-2.5 h-2.5 border-2 border-white rotate-45 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-emerald-400 rounded-full" />
                </div>
              </div>
              <span className="text-base font-semibold text-white tracking-tight">
                Viez<span className="text-neutral-400 font-normal">AI</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 ml-2">
                  Stealth Systems
                </span>
              </span>
            </div>
            <p className="text-neutral-500 max-w-sm leading-relaxed mb-4">
              Enterprise AI Agent Platform powered by the Harness Architecture. Decoupling cognition from
              execution across swappable runtimes, collaborative Kanban boards, and zero-leakage MCP tools.
            </p>

            {/* Direct Email Badge */}
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300 hover:border-neutral-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">support@viezai.com</span>
                {copied ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-neutral-500" />
                )}
              </button>
            </div>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-neutral-950 border border-neutral-850 text-[11px] font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
              <span>Harness Runtimes: 6 Online (99.99%)</span>
            </div>
          </div>

          {/* Harness Architecture */}
          <div>
            <h4 className="font-semibold text-white mb-3 font-mono text-xs uppercase tracking-wider">
              Harness Core
            </h4>
            <ul className="space-y-2">
              <li><a href="#harness" className="hover:text-white transition-colors">Claude Code Runtime</a></li>
              <li><a href="#harness" className="hover:text-white transition-colors">OpenAI Codex Engine</a></li>
              <li><a href="#harness" className="hover:text-white transition-colors">DeepSeek Harness</a></li>
              <li><a href="#harness" className="hover:text-white transition-colors">Google Antigravity</a></li>
              <li><a href="#harness" className="hover:text-white transition-colors">Pi Lightweight RPC</a></li>
            </ul>
          </div>

          {/* Product Suite */}
          <div>
            <h4 className="font-semibold text-white mb-3 font-mono text-xs uppercase tracking-wider">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              <li><a href="#ecosystem" className="hover:text-white transition-colors">viezagent Platform Hub</a></li>
              <li><a href="#kanban" className="hover:text-white transition-colors">viezagent-kanban Workspace</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Gaia Master Agent</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">A2A Protocol & ACP</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Bring-Your-Own MCP</a></li>
            </ul>
          </div>

          {/* Direct Contact & Protocols */}
          <div>
            <h4 className="font-semibold text-white mb-3 font-mono text-xs uppercase tracking-wider">
              Contact & Inquiries
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@viezai.com" className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono">
                  support@viezai.com
                </a>
              </li>
              <li><a href="#contact" className="hover:text-white transition-colors">Architecture Consultation</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Private VPC Inquiries</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Enterprise NDA</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <div>
            © 2026 ViezAI Systems Collective. Operating in Stealth.
          </div>
          <div className="flex items-center gap-4">
            <span>Direct channel: <a href="mailto:support@viezai.com" className="text-neutral-400 hover:text-white">support@viezai.com</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
