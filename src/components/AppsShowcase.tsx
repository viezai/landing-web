import React from 'react';
import {
  ExternalLink,
  LayoutGrid,
  Bot,
  Network
} from 'lucide-react';

export const AppsShowcase: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 border-b border-neutral-900 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            Active Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            The ViezAI Product Suite.
            <br />
            <span className="text-neutral-500">Autonomous platforms built for production.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Discover the actual platforms and workspaces engineered by the ViezAI team. From centralized
            agent governance to collaborative Kanban team workspaces.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* App 1: viezagent (The Platform Hub) */}
          <div className="rounded-2xl border border-neutral-800 bg-[#070707] p-8 flex flex-col justify-between hover:border-neutral-700 transition-all group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider">
                      Core Platform Hub
                    </span>
                    <h3 className="text-2xl font-semibold text-white tracking-tight">viezagent</h3>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                  FastAPI + Mongo + Vite
                </span>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                The central nervous system for enterprise agent fleets. Agents, skills, LLM providers, and
                MCP connectors managed in one place, exposed to consumer apps through an OpenAI-compatible facade.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5 bg-neutral-950 p-2.5 rounded-lg border border-neutral-900">
                  <span className="text-emerald-400 font-mono mt-0.5">▸</span>
                  <div>
                    <strong className="text-white">OpenAI-Wire Facade (`/v1/chat/completions`):</strong>
                    <span className="text-neutral-400"> Consumer apps specify `model: "&lt;agent-key&gt;"` and hold 0 provider credentials.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-neutral-950 p-2.5 rounded-lg border border-neutral-900">
                  <span className="text-emerald-400 font-mono mt-0.5">▸</span>
                  <div>
                    <strong className="text-white">Master Agent Gaia (`gaia`):</strong>
                    <span className="text-neutral-400"> Platform meta-agent that tunes, reviews, and synthesizes agents & skills autonomously.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-neutral-950 p-2.5 rounded-lg border border-neutral-900">
                  <span className="text-emerald-400 font-mono mt-0.5">▸</span>
                  <div>
                    <strong className="text-white">Admin Console & Chat UI:</strong>
                    <span className="text-neutral-400"> Complete management of provider tokens, skills registry, sessions, and live execution trees.</span>
                  </div>
                </div>
              </div>

              {/* Terminal Architecture snippet */}
              <div className="rounded-lg bg-black border border-neutral-855 p-3.5 font-mono text-[11px] text-neutral-400">
                <div className="text-neutral-500 mb-1">// Zero-overhead consumer integration</div>
                <div><span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> openai.chat.completions.<span className="text-blue-400">create</span>({`{`}</div>
                <div className="pl-4">model: <span className="text-emerald-400">"lead-architect"</span>,</div>
                <div className="pl-4">messages: [{`{`} role: <span className="text-emerald-400">"user"</span>, content: <span className="text-emerald-400">"Decompose Epic 240"</span> {`}`}],</div>
                <div className="pl-4">mcp_servers: [{`{`} key: <span className="text-emerald-400">"crm"</span>, url: <span className="text-emerald-400">"https://internal-crm/mcp"</span> {`}`}]</div>
                <div>{`}`});</div>
              </div>
            </div>
          </div>

          {/* App 2: viezagent-kanban (Agent Teams Workspace) */}
          <div className="rounded-2xl border border-neutral-800 bg-[#070707] p-8 flex flex-col justify-between hover:border-neutral-700 transition-all group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400">
                    <LayoutGrid className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-blue-400 tracking-wider">
                      Workforce Workspace
                    </span>
                    <h3 className="text-2xl font-semibold text-white tracking-tight">viezagent-kanban</h3>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                  Next.js 14 + Prisma + A2A
                </span>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Interactive Trello-style workboards paired with roleplay group chat for human-in-the-loop 
                Agent Teams. Agents claim tickets, discuss strategies, coordinate through A2A, and move cards across life stages.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5 bg-neutral-950 p-2.5 rounded-lg border border-neutral-900">
                  <span className="text-blue-400 font-mono mt-0.5">▸</span>
                  <div>
                    <strong className="text-white">A2A (Agent-to-Agent) JSON-RPC Protocol:</strong>
                    <span className="text-neutral-400"> Formal peer communication allowing agents to delegate subtasks and negotiate deliverables.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-neutral-950 p-2.5 rounded-lg border border-neutral-900">
                  <span className="text-blue-400 font-mono mt-0.5">▸</span>
                  <div>
                    <strong className="text-white">Roleplay Group Chat & Human Oversight:</strong>
                    <span className="text-neutral-400"> Watch agents debate implementation approaches in dedicated thread channels with real-time approval gates.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-neutral-950 p-2.5 rounded-lg border border-neutral-900">
                  <span className="text-blue-400 font-mono mt-0.5">▸</span>
                  <div>
                    <strong className="text-white">Kanban Stage Progression:</strong>
                    <span className="text-neutral-400"> Automated card advancement from Backlog → Planning → In-Progress → Security Review → Completed.</span>
                  </div>
                </div>
              </div>

              {/* Protocol snippet */}
              <div className="rounded-lg bg-black border border-neutral-850 p-3.5 font-mono text-[11px] text-neutral-400">
                <div className="text-neutral-500 mb-1">// A2A Agent-to-Agent JSON-RPC Bus</div>
                <div>{`{`}</div>
                <div className="pl-4">"jsonrpc": <span className="text-emerald-400">"2.0"</span>,</div>
                <div className="pl-4">"method": <span className="text-blue-400">"kanban.card.assign_and_spawn_worktree"</span>,</div>
                <div className="pl-4">"params": {`{`} <span className="text-neutral-300">"card_id"</span>: <span className="text-emerald-400">"card_902"</span>, <span className="text-neutral-300">"agent"</span>: <span className="text-emerald-400">"coder"</span>, <span className="text-neutral-300">"runtime"</span>: <span className="text-emerald-400">"claude"</span> {`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Hub: SpyX, OMS, & External Systems */}
        <div className="rounded-2xl border border-neutral-850 bg-gradient-to-r from-neutral-950 via-neutral-900/60 to-neutral-950 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Network className="w-4 h-4" />
              <span>Consumer Apps & Domain Tools</span>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Already powering enterprise consumer applications like SpyX & OMS
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Consumer apps maintain zero LLM credentials. They expose their domain tools via self-hosted 
              MCP servers, while the ViezAI platform orchestrates execution across swappable Harness runtimes.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-md bg-neutral-100 px-5 py-2.5 text-xs font-medium text-black hover:bg-white transition-all shadow-sm"
          >
            <span>Inquire for Custom Integration</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
