import React, { useState, useEffect } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  LayoutGrid,
  MessageSquare
} from 'lucide-react';

interface KanbanCard {
  id: string;
  title: string;
  epic: string;
  agent: string;
  runtime: string;
  column: 'backlog' | 'progress' | 'review' | 'done';
  tokens: string;
  worktree: string;
}

interface ChatMessage {
  id: string;
  time: string;
  agent: string;
  role: string;
  runtimeBadge: string;
  message: string;
  status: 'planning' | 'running' | 'success' | 'verified';
}

export const AgentSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState<'a2a' | 'runtime_swap' | 'security'>('a2a');

  const scenarios = {
    a2a: {
      name: 'A2A Task Delegation & Worktree Isolation',
      desc: 'Gaia orchestrates a full-stack refactor across @planner, @coder, and @reviewer via A2A JSON-RPC.',
    },
    runtime_swap: {
      name: 'Live Harness Runtime Hot-Swap',
      desc: 'Seamlessly migrating a running session from DeepSeek (dsh) to Claude Code (claude_runtime) mid-flight.',
    },
    security: {
      name: 'Bring-Your-Own MCP Zero-Leakage Gate',
      desc: 'Consumer app provides ephemeral user tokens; harness executes turn without persistent credential storage.',
    },
  };

  const cards: KanbanCard[] = [
    {
      id: 'CRD-101',
      title: 'Decompose Monorepo AST & Map Dependencies',
      epic: 'ViezAgent Core',
      agent: '@gaia (Master Agent)',
      runtime: 'agentscope',
      column: 'done',
      tokens: '4,200 tk',
      worktree: '.worktrees/spec-map',
    },
    {
      id: 'CRD-102',
      title: 'A2A JSON-RPC Protocol Dispatch Handler',
      epic: 'Kanban Backend',
      agent: '@coder (Lead Engineer)',
      runtime: 'claude_runtime',
      column: 'progress',
      tokens: '18,500 tk',
      worktree: '.worktrees/a2a-dispatch',
    },
    {
      id: 'CRD-103',
      title: 'Surgical Codex Diff Patching & Unit Tests',
      epic: 'Harness Adapter',
      agent: '@patcher (Codex Runner)',
      runtime: 'codex_runtime',
      column: 'review',
      tokens: '12,400 tk',
      worktree: '.worktrees/patch-eval',
    },
    {
      id: 'CRD-104',
      title: 'Ephemeral User MCP Tool Verification Gate',
      epic: 'Security Gate',
      agent: '@skeptic (Verifier)',
      runtime: 'antigravity_runtime',
      column: 'backlog',
      tokens: '8,900 tk',
      worktree: '.worktrees/sec-gate',
    },
  ];

  const chatLogs: ChatMessage[] = [
    {
      id: '1',
      time: '14:32:01',
      agent: '@gaia',
      role: 'Master Agent',
      runtimeBadge: 'Platform Core',
      message: 'Received new epic from consumer app SpyX. Decomposed into 4 isolated worktrees via A2A protocol.',
      status: 'planning',
    },
    {
      id: '2',
      time: '14:32:03',
      agent: '@coder',
      role: 'Engineering Lead',
      runtimeBadge: 'claude_runtime (Port 4349)',
      message: 'Mounted ephemeral git worktree at .worktrees/a2a-dispatch. Running AST validation and applying patch.',
      status: 'running',
    },
    {
      id: '3',
      time: '14:32:05',
      agent: '@patcher',
      role: 'Codex Engine',
      runtimeBadge: 'codex_runtime (Port 4350)',
      message: 'Generated unified diff via Responses API. All 42 vitest assertions passed. Zero side-effects.',
      status: 'success',
    },
    {
      id: '4',
      time: '14:32:07',
      agent: '@skeptic',
      role: 'Security Gatekeeper',
      runtimeBadge: 'antigravity_runtime (Port 4354)',
      message: 'Static analysis clean: 0 secret leaks, 0 unpinned dependencies. Ready for merge into main branch.',
      status: 'verified',
    },
  ];

  // Simulation execution loop
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isRunning) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= 3) {
            setIsRunning(false);
            return 3;
          }
          return prev + 1;
        });
      }, 1800);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartSimulation = () => {
    setActiveStep(0);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setActiveStep(0);
  };

  return (
    <section id="kanban" className="py-24 border-b border-neutral-900 bg-[#020202]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            Live Preview: viezagent-kanban
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Agent Teams in Action.
            <br />
            <span className="text-neutral-500">Kanban coordination meets A2A roleplay.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Experience how autonomous agents organize work on the ViezAI Kanban board. 
            Tasks are dispatched via A2A JSON-RPC, worked on in sandboxed git worktrees, and reviewed in real-time.
          </p>
        </div>

        {/* Simulation Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 gap-4">
          {/* Scenario Selector */}
          <div className="flex flex-wrap gap-2">
            {(Object.keys(scenarios) as (keyof typeof scenarios)[]).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedScenario(key);
                  handleReset();
                }}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                  selectedScenario === key
                    ? 'bg-neutral-200 text-black font-medium'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-850'
                }`}
              >
                {scenarios[key].name}
              </button>
            ))}
          </div>

          {/* Action triggers */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleStartSimulation}
              disabled={isRunning}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-emerald-400 active:scale-[0.98] disabled:opacity-50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              {isRunning ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Executing Swarm Turn...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Live A2A Simulation</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center p-2 rounded-md border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              title="Reset Simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Kanban Board Interface */}
        <div className="rounded-2xl border border-neutral-800 bg-[#070707] p-4 sm:p-6 mb-8 overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-850 text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-300">
              <LayoutGrid className="w-4 h-4 text-blue-400" />
              <span className="font-semibold text-white">Board: viezagent-kanban / core-sprint-14</span>
              <span className="text-neutral-600 hidden md:inline">|</span>
              <span className="text-emerald-400 hidden md:inline">A2A Broker: ONLINE</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Harness Adapter Sync: OK</span>
            </div>
          </div>

          {/* 4 Kanban Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Column 1: Backlog */}
            <div className="rounded-xl bg-black/60 border border-neutral-850/80 p-3.5 flex flex-col min-h-[260px]">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 pb-2 border-b border-neutral-900">
                <span className="font-semibold text-neutral-300">01. Backlog</span>
                <span className="bg-neutral-900 px-1.5 py-0.5 rounded text-[10px]">1</span>
              </div>
              <div className="space-y-2.5">
                {cards
                  .filter((c) => c.column === 'backlog')
                  .map((card) => (
                    <div
                      key={card.id}
                      className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs hover:border-neutral-700 transition-all"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 mb-1.5">
                        <span className="text-emerald-400">{card.id}</span>
                        <span>{card.tokens}</span>
                      </div>
                      <h4 className="text-neutral-200 font-medium mb-2 leading-snug">{card.title}</h4>
                      <div className="flex items-center justify-between text-[10px] font-mono pt-1.5 border-t border-neutral-850 text-neutral-400">
                        <span>{card.agent}</span>
                        <span className="text-purple-400">{card.runtime}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Column 2: In Progress (Worktree Sandboxes) */}
            <div className="rounded-xl bg-black/60 border border-neutral-850/80 p-3.5 flex flex-col min-h-[260px]">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 pb-2 border-b border-neutral-900">
                <span className="font-semibold text-blue-400">02. In Worktree</span>
                <span className="bg-blue-950/60 text-blue-400 px-1.5 py-0.5 rounded text-[10px] border border-blue-900/40">1 ACTIVE</span>
              </div>
              <div className="space-y-2.5">
                {cards
                  .filter((c) => c.column === 'progress')
                  .map((card) => (
                    <div
                      key={card.id}
                      className="p-3 rounded-lg bg-blue-950/20 border border-blue-900/50 text-xs shadow-[0_0_12px_rgba(59,130,246,0.08)]"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-blue-300 mb-1.5">
                        <span className="font-semibold">{card.id}</span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Streaming
                        </span>
                      </div>
                      <h4 className="text-white font-medium mb-2 leading-snug">{card.title}</h4>
                      <div className="bg-black/80 p-1.5 rounded font-mono text-[10px] text-neutral-400 mb-2">
                        Worktree: <span className="text-emerald-300">{card.worktree}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono pt-1.5 border-t border-blue-900/40 text-neutral-300">
                        <span>{card.agent}</span>
                        <span className="text-blue-400 font-semibold">{card.runtime}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Column 3: Review & Security Gate */}
            <div className="rounded-xl bg-black/60 border border-neutral-850/80 p-3.5 flex flex-col min-h-[260px]">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 pb-2 border-b border-neutral-900">
                <span className="font-semibold text-purple-400">03. Review & Gate</span>
                <span className="bg-neutral-900 px-1.5 py-0.5 rounded text-[10px]">1</span>
              </div>
              <div className="space-y-2.5">
                {cards
                  .filter((c) => c.column === 'review')
                  .map((card) => (
                    <div
                      key={card.id}
                      className="p-3 rounded-lg bg-neutral-900/80 border border-purple-900/40 text-xs hover:border-purple-700/60 transition-all"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-purple-300 mb-1.5">
                        <span>{card.id}</span>
                        <span>{card.tokens}</span>
                      </div>
                      <h4 className="text-neutral-200 font-medium mb-2 leading-snug">{card.title}</h4>
                      <div className="flex items-center justify-between text-[10px] font-mono pt-1.5 border-t border-neutral-850 text-neutral-400">
                        <span>{card.agent}</span>
                        <span className="text-purple-400">{card.runtime}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Column 4: Done / Synthesized */}
            <div className="rounded-xl bg-black/60 border border-neutral-850/80 p-3.5 flex flex-col min-h-[260px]">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 pb-2 border-b border-neutral-900">
                <span className="font-semibold text-emerald-400">04. Done / PR</span>
                <span className="bg-emerald-950/60 text-emerald-400 px-1.5 py-0.5 rounded text-[10px] border border-emerald-900/40">PASSED</span>
              </div>
              <div className="space-y-2.5">
                {cards
                  .filter((c) => c.column === 'done')
                  .map((card) => (
                    <div
                      key={card.id}
                      className="p-3 rounded-lg bg-emerald-950/10 border border-emerald-900/40 text-xs"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 mb-1.5">
                        <span>{card.id}</span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          Merged
                        </span>
                      </div>
                      <h4 className="text-neutral-300 font-medium mb-2 leading-snug">{card.title}</h4>
                      <div className="flex items-center justify-between text-[10px] font-mono pt-1.5 border-t border-emerald-900/30 text-neutral-400">
                        <span>{card.agent}</span>
                        <span className="text-emerald-400">{card.runtime}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live A2A Roleplay Group Chat & Event Stream */}
        <div className="rounded-2xl border border-neutral-800 bg-[#080808] p-4 sm:p-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-850">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-white">Live Roleplay Group Thread (A2A Protocol Stream)</span>
            </div>
            <span className="text-[11px] font-mono text-neutral-500">
              Human-in-the-Loop Supervision: Enabled
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {chatLogs.slice(0, Math.max(2, activeStep + 1)).map((log) => (
              <div
                key={log.id}
                className="p-3 rounded-lg bg-black border border-neutral-850 flex flex-col md:flex-row md:items-center justify-between gap-2"
              >
                <div className="flex items-start md:items-center gap-3">
                  <span className="text-neutral-500 text-[11px] shrink-0">{log.time}</span>
                  <span className="text-emerald-400 font-semibold shrink-0">{log.agent}</span>
                  <span className="text-neutral-400 text-xs leading-relaxed">{log.message}</span>
                </div>
                <div className="shrink-0 flex items-center gap-2 self-end md:self-auto">
                  <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300">
                    {log.runtimeBadge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
