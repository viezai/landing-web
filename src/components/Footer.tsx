import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 bg-black text-neutral-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <div className="w-2.5 h-2.5 border-2 border-white rotate-45 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-emerald-400 rounded-full" />
                </div>
              </div>
              <span className="text-base font-semibold text-white tracking-tight">
                Viez<span className="text-neutral-400 font-normal">AI</span>
              </span>
            </div>
            <p className="text-neutral-500 max-w-sm leading-relaxed mb-4">
              Enterprise AI Agents Orchestration Platform. Coordinating fleets of autonomous agents
              with mathematical precision, sandbox isolation, and continuous observability.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-neutral-950 border border-neutral-850 text-[11px] font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-medium text-white mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-white transition-colors">Swarm Orchestrator</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">A2A Protocol</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Worktree Isolation</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Continuous Evaluation</a></li>
              <li><a href="#metrics" className="hover:text-white transition-colors">Enterprise Telemetry</a></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-medium text-white mb-3">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-white transition-colors">Autonomous Coding</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Security & DLP Gate</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Air-Gapped Private VPC</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Monorepo Refactoring</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Custom Agent Teams</a></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="font-medium text-white mb-3">Resources & Legal</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/viezai" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture Whitepaper</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Security Disclosure</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-600 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} ViezAI, Inc. (viezai.com). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>SOC2 Type II Certified</span>
            <span>ISO/IEC 27001</span>
            <span>HIPAA Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
