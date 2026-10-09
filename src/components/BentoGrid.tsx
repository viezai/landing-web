import React from 'react';
import {
  CheckCircle,
  Cpu,
  Bot,
  Lock,
  Server,
  Boxes
} from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 border-b border-neutral-900 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Engineered for enterprise scale.
            <br />
            <span className="text-neutral-500">Autonomous without unpredictability.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            ViezAI bridges cutting-edge reasoning models with deterministic software execution sandboxes,
            providing your organization with audited, swappable agent capabilities.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Multi-Runtime Harness Adapters (Wide 2-col) */}
          <div className="md:col-span-2 rounded-2xl border border-neutral-800 bg-[#080808] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-900/40">
                  Swappable Execution
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Multi-Runtime Harness Adapters
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                Execute code using the best engine for the task. Hot-swap between Claude Code (Agent SDK),
                OpenAI Codex (Responses API), DeepSeek Harness, Google Antigravity, and lightweight Pi
                without updating client-side integration.
              </p>

              {/* Architecture Spec Graphic */}
              <div className="mt-6 rounded-lg bg-black/90 border border-neutral-850 p-4 font-mono text-xs text-neutral-300">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-900 text-[11px] text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <Boxes className="w-3.5 h-3.5 text-emerald-400" />
                    harness.runtime.matrix
                  </span>
                  <span className="text-emerald-400">Status: 6 Active Engines</span>
                </div>
                <div className="space-y-1.5 text-neutral-400">
                  <p><span className="text-purple-400">const</span> runner = <span className="text-blue-400">selectRuntime</span>({`{`} engine: <span className="text-emerald-300">'claude_runtime'</span> | <span className="text-emerald-300">'codex_runtime'</span> | <span className="text-emerald-300">'dsh_runtime'</span> {`}`});</p>
                  <p><span className="text-purple-400">await</span> runner.<span className="text-blue-400">executeInIsolatedWorktree</span>({`{`} ephemeral: <span className="text-amber-400">true</span>, allowlist: agent.mcpTools {`}`});</p>
                  <p className="text-neutral-600">// Standardized SSE streaming framing across all providers</p>
                  <p><span className="text-purple-400">return</span> runner.<span className="text-blue-400">resumeTranscript</span>();</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                Zero Host Repository Mutation
              </span>
              <span className="font-mono text-neutral-500">packages/harness-protocol</span>
            </div>
          </div>

          {/* Card 2: Master Agent Gaia (1-col) */}
          <div className="rounded-2xl border border-neutral-800 bg-[#080808] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-400">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-900/40">
                  Meta-Agent
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">
                Gaia Master Orchestrator
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                The platform's built-in master agent. Gaia autonomously designs, evaluates, tests, and tunes
                fleet agents and reusable skills using platform meta-tools.
              </p>

              <div className="mt-5 p-3 rounded-lg bg-black border border-neutral-850 font-mono text-[11px] space-y-1.5 text-neutral-400">
                <div className="text-purple-300 font-semibold">// Platform Master Agent</div>
                <div>@gaia.tuneSkills(agent_id)</div>
                <div>@gaia.evaluatePromptDrift()</div>
                <div>@gaia.provisionWorktrees()</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-850 text-xs text-neutral-400 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
              <span>Self-governing agent evolution</span>
            </div>
          </div>

          {/* Card 3: Bring-Your-Own MCP Security (1-col) */}
          <div className="rounded-2xl border border-neutral-800 bg-[#080808] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400">
                  <Lock className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/40">
                  Zero-Leakage
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">
                Bring-Your-Own MCP Tools
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Hand agents user MCP servers and ephemeral auth tokens dynamically per request.
                Validated in-process, used for the turn, and never persisted to database or logs.
              </p>

              <div className="mt-5 space-y-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Enforced tool allowlists per turn</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Zero user credentials stored in platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>SSO OAuth proxy for BSE authentication</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-850 text-xs text-neutral-400 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
              <span>Enterprise SOC2 & ISO compliant</span>
            </div>
          </div>

          {/* Card 4: One-Command Cluster Connect (Wide 2-col) */}
          <div className="md:col-span-2 rounded-2xl border border-neutral-800 bg-[#080808] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
                  <Server className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-900/40">
                  Distributed Mesh
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                One-Command Node Connect Script
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                Attach any machine, on-premises GPU server, or cloud VM to your cluster in seconds.
                The install script bootstraps the runtime adapter and registers with the platform API automatically.
              </p>

              <div className="mt-6 p-4 rounded-lg bg-black border border-neutral-850 font-mono text-xs">
                <div className="flex items-center justify-between text-neutral-500 mb-2">
                  <span>// Run on any remote execution host</span>
                  <span className="text-emerald-400">Instant registration</span>
                </div>
                <div className="text-emerald-300 bg-neutral-950 p-2.5 rounded border border-neutral-900 overflow-x-auto select-all">
                  curl -fsSL https://platform.viezai.com/api/v1/install/connect-runtime.sh | bash
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                No git checkout or local repo cloning required
              </span>
              <span className="font-mono text-neutral-500">scripts/connect-runtime.sh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
