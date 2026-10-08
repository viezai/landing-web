import React from 'react';
import {
  Link2,
  Workflow,
  Cpu,
  ShieldCheck,
  CheckCircle,
  FileCode2,
  Terminal,
  Activity
} from 'lucide-react';

export const Architecture: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Integrate & Context Ingestion',
      subtitle: 'Knowledge Graph & AST Mapping',
      description:
        'ViezAI ingests your entire repository context, dependency tree, issue tracker, and internal API specs. Semantic retrieval with hybrid lexical-vector indexing grounds every prompt in truth.',
      icon: Link2,
      details: ['AST & Call-Graph Construction', 'Vector & Sparse Keyword Indexing', 'Continuous Branch Synchronization'],
    },
    {
      step: '02',
      title: 'Decompose & Plan DAG',
      subtitle: 'Deterministic Multi-Agent Blueprint',
      description:
        'The Lead Orchestrator breaks down business requirements into a Directed Acyclic Graph (DAG) of parallel subtasks. Strict token ceilings and time-to-deliver targets are established upfront.',
      icon: Workflow,
      details: ['Parallel Task Graph Generation', 'Automated Token Budget Bounds', 'Dependency Deadlock Prevention'],
    },
    {
      step: '03',
      title: 'Execute in Sandboxes',
      subtitle: 'Isolated Git Worktrees',
      description:
        'Specialized subagents (Coder, Tester, Migrator) execute tasks inside isolated ephemeral git worktrees. Changes are made surgically without side-effects on peer agents or host infrastructure.',
      icon: Cpu,
      details: ['gVisor Sandbox Isolation', 'Ephemeral Git Worktrees', 'Real-Time A2A Messaging Bus'],
    },
    {
      step: '04',
      title: 'Guardrails & Telemetry',
      subtitle: 'Zero-Regression Verification Gate',
      description:
        'Before any pull request is opened, dual skeptic agents perform adversarial validation: security scanning, static code analysis, unit test runs, and regression attestation.',
      icon: ShieldCheck,
      details: ['Adversarial Verification Panel', 'Automated PII & Secret Redaction', 'Full OpenTelemetry Traceability'],
    },
  ];

  return (
    <section id="architecture" className="py-24 border-b border-neutral-900 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            System Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            How ViezAI works.
            <br />
            <span className="text-neutral-500">From prompt to verified production PR.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            A battle-tested 4-stage pipeline that guarantees enterprise stability, repeatability, and security.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-xl border border-neutral-800 bg-[#080808] p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group"
              >
                <div>
                  {/* Step badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                      STEP {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:border-emerald-500/50 transition-colors">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/90 mt-1 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Sub-capabilities */}
                <div className="mt-6 pt-4 border-t border-neutral-900 space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Connecting subtle line on desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-neutral-800 z-10" />
                )}
              </div>
            );
          })}
        </div>

        {/* Architectural Pillars Summary */}
        <div className="mt-12 rounded-xl border border-neutral-800/80 bg-neutral-950/70 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-400">
              <FileCode2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Full AST Awareness</h4>
              <p className="text-xs text-neutral-400">Agents parse code syntax trees, avoiding superficial regex edits.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-cyan-400">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Strict Sandbox Isolation</h4>
              <p className="text-xs text-neutral-400">Containerized gVisor execution limits system-level blast radius.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-violet-400">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Continuous Self-Correction</h4>
              <p className="text-xs text-neutral-400">Auto-inspects compiler errors and unit failures up to 3 bounded rounds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
