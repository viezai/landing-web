import React from 'react';
import {
  Link2,
  Workflow,
  Cpu,
  ShieldCheck
} from 'lucide-react';

export const Architecture: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consumer Facade & BYO-MCP Ingestion',
      subtitle: 'OpenAI-Compatible Wire Facade',
      description:
        'Consumer applications (SpyX, OMS, custom services) send requests to `POST /v1/chat/completions` with `model: "<agent-key>"`. Per-call user MCP servers and tokens are attached dynamically without persisting credentials.',
      icon: Link2,
      details: ['Zero Provider Keys in Consumer Apps', 'Dynamic Per-Call MCP Injection', 'OpenAI SDK Native Compatibility'],
    },
    {
      step: '02',
      title: 'A2A Protocol & Task Graph Generation',
      subtitle: 'Deterministic Multi-Agent Coordination',
      description:
        'The Master Agent (Gaia) or designated lead orchestrator evaluates requirements, constructs a directed acyclic graph (DAG), and coordinates peer agents over the formal Agent-to-Agent (A2A) JSON-RPC bus.',
      icon: Workflow,
      details: ['Agent-to-Agent (A2A) JSON-RPC Bus', 'Kanban Board Sync via ACP Protocol', 'Deterministic Token Ceilings & Deadlock Prevention'],
    },
    {
      step: '03',
      title: 'Harness Runtime Container Execution',
      subtitle: 'Ephemeral Git Worktree Sandboxes',
      description:
        'Execution delegates to the designated Harness adapter (Claude Code, OpenAI Codex, DeepSeek, Antigravity, or Pi). Tasks run in isolated ephemeral git worktrees with strict tool allowlists.',
      icon: Cpu,
      details: ['Dedicated Harness Adapter Containers', 'Ephemeral Git Worktree Sandboxing', 'Transparent Protocol Gateway Translators'],
    },
    {
      step: '04',
      title: 'Adversarial Verification & Attestation',
      subtitle: 'Zero-Regression Gate & Observability',
      description:
        'Before any code or deliverable is accepted, skeptical reviewer agents perform automated static analysis, regression test suites, and PII/secret scrubbing. Results stream over SSE framing.',
      icon: ShieldCheck,
      details: ['Automated Unit & Regression Gates', 'Zero-Secret Leakage Redaction', 'Full Turn Observability & Audit Transcripts'],
    },
  ];

  return (
    <section id="architecture" className="py-24 border-b border-neutral-900 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            Pipeline Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            How ViezAI Executes.
            <br />
            <span className="text-neutral-500">From consumer API call to verified deliverable.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            A production-proven 4-stage pipeline that eliminates prompt drift, prevents host repo mutation, 
            and ensures enterprise determinism across every agent turn.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="rounded-2xl border border-neutral-800 bg-[#070707] p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                      STAGE {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-emerald-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-mono text-neutral-500 mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 space-y-2">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
