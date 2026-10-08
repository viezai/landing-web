import React from 'react';
import {
  Network,
  ShieldAlert,
  Puzzle,
  LineChart,
  CheckCircle,
  ExternalLink,
  Lock,
  GitPullRequest,
  Workflow
} from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section id="solutions" className="py-24 border-b border-neutral-900 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Engineered for enterprise scale.
            <br />
            <span className="text-neutral-500">Autonomous without unpredictability.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            ViezAI bridges deep reasoning LLMs with deterministic software execution, providing
            your engineering organization with self-sufficient, audited agent fleets.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Autonomous Multi-Agent Systems (Wide 2-col) */}
          <div className="md:col-span-2 rounded-2xl border border-neutral-800 bg-[#090909] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <Network className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-800">
                  A2A Protocol Core
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Autonomous Multi-Agent Swarms
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                Decompose complex enterprise epics into coordinated subtasks. Subagents operate in parallel
                with isolated worktrees, resolving dependencies through our formal Agent-to-Agent (A2A) protocol.
              </p>

              {/* Code snippet / Architectural graphic */}
              <div className="mt-6 rounded-lg bg-black/90 border border-neutral-800/90 p-4 font-mono text-xs text-neutral-300">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-900 text-[11px] text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5 text-emerald-400" />
                    swarm.orchestrator.dag
                  </span>
                  <span className="text-emerald-400">Status: 100% Deterministic</span>
                </div>
                <div className="space-y-1 text-neutral-400">
                  <p><span className="text-purple-400">const</span> swarm = <span className="text-blue-400">new</span> <span className="text-yellow-300">AgentSwarm</span>({'{'} isolation: <span className="text-emerald-300">'worktree'</span>, memory: <span className="text-emerald-300">'sqlite-persistent'</span> {'}'});</p>
                  <p><span className="text-purple-400">await</span> swarm.<span className="text-blue-400">fanOut</span>([<span className="text-neutral-200">planner</span>, <span className="text-neutral-200">coder</span>, <span className="text-neutral-200">reviewer</span>, <span className="text-neutral-200">deployer</span>]);</p>
                  <p className="text-neutral-600">// Strict verification gate: 0 tests skipped, 0 uncaught regressions</p>
                  <p><span className="text-purple-400">return</span> swarm.<span className="text-blue-400">synthesizeWithGuardrails</span>();</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900/80 flex flex-wrap gap-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1 text-neutral-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Subagent Fan-out
              </span>
              <span className="flex items-center gap-1 text-neutral-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Ephemeral Git Worktrees
              </span>
              <span className="flex items-center gap-1 text-neutral-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Self-Healing Retries
              </span>
            </div>
          </div>

          {/* Card 2: Security & Private Deployment */}
          <div className="rounded-2xl border border-neutral-800 bg-[#090909] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <ShieldAlert className="w-5 h-5 text-emerald-400" />
                </div>
                <Lock className="w-4 h-4 text-neutral-500" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">
                Private LLM & VPC Isolation
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Deploy inside your AWS, GCP, Azure, or on-premises Kubernetes. Absolute zero data retention in transit,
                automated DLP scanning, and air-gapped container execution.
              </p>
            </div>

            <div className="mt-6 space-y-2.5 pt-4 border-t border-neutral-900 text-xs">
              <div className="flex items-center justify-between text-neutral-400 p-2 rounded bg-neutral-950 border border-neutral-900">
                <span>VPC Tunneling</span>
                <span className="text-emerald-400 font-mono">Encrypted mTLS</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 p-2 rounded bg-neutral-950 border border-neutral-900">
                <span>PII Redaction</span>
                <span className="text-emerald-400 font-mono">100% In-flight</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 p-2 rounded bg-neutral-950 border border-neutral-900">
                <span>Compliance</span>
                <span className="text-neutral-200 font-mono">SOC2 / ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Card 3: Enterprise Integration Engine */}
          <div className="rounded-2xl border border-neutral-800 bg-[#090909] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <Puzzle className="w-5 h-5 text-emerald-400" />
                </div>
                <GitPullRequest className="w-4 h-4 text-neutral-500" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">
                Enterprise Integration Engine
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Plugs natively into your existing toolchain without altering developer habits:
                GitHub, GitLab, Jira, Linear, Slack, PostgreSQL, Snowflake, and Datadog.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900">
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                <div className="p-2 rounded bg-neutral-950 border border-neutral-900 text-neutral-300">GitHub PRs</div>
                <div className="p-2 rounded bg-neutral-950 border border-neutral-900 text-neutral-300">Jira Sync</div>
                <div className="p-2 rounded bg-neutral-950 border border-neutral-900 text-neutral-300">Slack Bot</div>
                <div className="p-2 rounded bg-neutral-950 border border-neutral-900 text-neutral-300">Postgres</div>
                <div className="p-2 rounded bg-neutral-950 border border-neutral-900 text-neutral-300">Snowflake</div>
                <div className="p-2 rounded bg-neutral-950 border border-neutral-900 text-neutral-300">REST APIs</div>
              </div>
            </div>
          </div>

          {/* Card 4: Observability & Evaluation Loop (Wide 2-col) */}
          <div className="md:col-span-2 rounded-2xl border border-neutral-800 bg-[#090909] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <LineChart className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono text-neutral-500">Live Tracing & Metrics</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Real-Time Observability & Continuous Evaluation
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                Inspect every reasoning step, token expenditure, and tool invocation in real-time.
                Automated regression eval suites test agent performance before production rollout.
              </p>

              {/* Metric bar preview */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-900">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">Reasoning Depth</span>
                  <p className="text-lg font-mono font-semibold text-white mt-0.5">14 Steps</p>
                </div>
                <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-900">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">Token Allocation</span>
                  <p className="text-lg font-mono font-semibold text-emerald-400 mt-0.5">-38% Saved</p>
                </div>
                <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-900">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">Accuracy Benchmark</span>
                  <p className="text-lg font-mono font-semibold text-white mt-0.5">99.82%</p>
                </div>
                <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-900">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">Mean Time to PR</span>
                  <p className="text-lg font-mono font-semibold text-white mt-0.5">2.4 mins</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono">OpenTelemetry & Datadog Native Export</span>
              <span className="flex items-center gap-1 text-neutral-300 group-hover:text-white transition-colors cursor-pointer">
                View telemetry spec <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
