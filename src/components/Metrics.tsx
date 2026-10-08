import React from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Cpu,
  Clock,
  Sparkles,
  Server
} from 'lucide-react';

export const Metrics: React.FC = () => {
  const stats = [
    {
      metric: '10M+',
      label: 'Tasks Executed Autonomously',
      detail: 'Across production monorepos and enterprise services',
      icon: Cpu,
    },
    {
      metric: '99.4%',
      label: 'CI First-Pass Success Rate',
      detail: 'Zero hallucinations caught in production pipelines',
      icon: ShieldCheck,
    },
    {
      metric: '12x',
      label: 'Faster Cycle from Spec to PR',
      detail: 'From Jira user story to reviewed pull request',
      icon: TrendingUp,
    },
    {
      metric: '< 45ms',
      label: 'Orchestrator Latency Overhead',
      detail: 'Subagent A2A message routing & synchronization',
      icon: Clock,
    },
  ];

  return (
    <section id="metrics" className="py-24 border-b border-neutral-900 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Impact & Benchmarks
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Built for mission-critical reliability.
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Real enterprise numbers from organizations running ViezAI autonomous agent fleets at scale.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-neutral-800 bg-neutral-950/80 p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-white font-mono">
                    {stat.metric}
                  </div>
                  <h3 className="text-sm font-medium text-neutral-200 mt-2">
                    {stat.label}
                  </h3>
                </div>
                <p className="mt-4 pt-3 border-t border-neutral-900 text-xs text-neutral-500 font-mono">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Enterprise Compliance Callout */}
        <div className="mt-12 rounded-xl border border-neutral-800 bg-[#090909] p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                Enterprise Assurance
              </span>
            </div>
            <h4 className="text-lg font-semibold text-white">
              Self-Hostable on Private Cloud & Air-Gapped Environments
            </h4>
            <p className="text-sm text-neutral-400 max-w-2xl">
              Supports Anthropic Claude, OpenAI, and self-hosted open-weights models (Llama 3, DeepSeek, Qwen)
              running on private vLLM clusters with strict data boundary control.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3 py-1.5 rounded-md border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-300">
              HIPAA Compliant
            </span>
            <span className="px-3 py-1.5 rounded-md border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-300">
              SOC 2 Type II
            </span>
            <span className="px-3 py-1.5 rounded-md border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-300">
              GDPR Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
