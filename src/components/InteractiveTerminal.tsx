import React, { useState } from 'react';
import {
  Copy,
  Check,
  Cpu,
  Boxes,
  Layers,
  Workflow
} from 'lucide-react';

interface TerminalTab {
  id: string;
  agent: string;
  role: string;
  icon: typeof Cpu;
  command: string;
  logs: {
    time: string;
    level: 'info' | 'warn' | 'success' | 'agent';
    message: string;
  }[];
}

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('harness');
  const [copied, setCopied] = useState<boolean>(false);

  const tabs: TerminalTab[] = [
    {
      id: 'harness',
      agent: 'Harness Adapter',
      role: 'Runtime Host (claude_runtime)',
      icon: Boxes,
      command: 'curl -X POST http://harness-adapter:4349/v1/turn/execute -d @turn.json',
      logs: [
        { time: '15:04:12.102', level: 'info', message: '[harness] Initializing isolated session for agent="lead-coder"' },
        { time: '15:04:12.330', level: 'agent', message: '[claude_runtime] Resuming execution transcript session-8921.turn-3' },
        { time: '15:04:12.510', level: 'info', message: '[harness] Mounting ephemeral worktree at /tmp/workspaces/session-8921' },
        { time: '15:04:12.780', level: 'agent', message: '[claude_runtime] Enforcing in-process MCP allowlist: ["github", "vitest"]' },
        { time: '15:04:13.200', level: 'success', message: '[harness] Turn completed in 1,098ms. SSE frame delivered cleanly.' },
      ],
    },
    {
      id: 'facade',
      agent: 'OpenAI Facade',
      role: 'viezagent Hub (/v1/chat/completions)',
      icon: Layers,
      command: 'curl https://platform.viezai.com/v1/chat/completions -H "Authorization: Bearer vz_live_..."',
      logs: [
        { time: '15:04:10.012', level: 'info', message: 'Incoming request to /v1/chat/completions from consumer app "SpyX"' },
        { time: '15:04:10.089', level: 'agent', message: 'Resolved model="lead-architect" -> pinned system prompt + rules v2.4' },
        { time: '15:04:10.150', level: 'info', message: 'Attached dynamic user MCP servers: ["spyx-crm"] (0 keys stored on disk)' },
        { time: '15:04:10.320', level: 'agent', message: 'Routing turn to designated runtime container: claude_runtime:4349' },
        { time: '15:04:10.890', level: 'success', message: '200 OK: Streamed standard OpenAI chunk format to consumer client' },
      ],
    },
    {
      id: 'kanban',
      agent: 'Kanban A2A Bus',
      role: 'viezagent-kanban (JSON-RPC)',
      icon: Workflow,
      command: 'viezagent-kanban dispatch --card "CRD-102" --target "@coder"',
      logs: [
        { time: '15:04:14.020', level: 'info', message: 'JSON-RPC dispatch: method="kanban.card.assign_and_spawn_worktree"' },
        { time: '15:04:14.210', level: 'agent', message: 'Card CRD-102 moved: Backlog -> In Progress (.worktrees/a2a-dispatch)' },
        { time: '15:04:14.450', level: 'agent', message: '@coder acknowledged card. Notifying group roleplay thread via ACP' },
        { time: '15:04:15.110', level: 'success', message: 'Card lifecycle synchronized across web dashboard and CLI in 210ms' },
      ],
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(currentTab.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="capabilities" className="py-24 border-b border-neutral-900 bg-[#030303]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            Developer Observability
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Transparent Protocol Execution.
            <br />
            <span className="text-neutral-500">Inspect every wire format and runtime turn.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Zero black boxes. Inspect how requests travel from the OpenAI-wire facade through 
            the Harness protocol to isolated execution sandboxes.
          </p>
        </div>

        {/* Terminal Window Frame */}
        <div className="rounded-2xl border border-neutral-800 bg-black shadow-2xl overflow-hidden font-mono">
          {/* Top Bar with Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-850 bg-neutral-950 px-4 py-3 gap-3">
            {/* Window Controls & Tabs */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
              </div>

              <div className="flex items-center gap-1 overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 text-xs rounded transition-all ${
                        activeTab === tab.id
                          ? 'bg-neutral-850 text-white border border-neutral-700'
                          : 'text-neutral-500 hover:text-neutral-300'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.agent}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Copy Command */}
            <button
              onClick={handleCopyCommand}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors self-end sm:self-auto"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy wire command</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Command Line */}
          <div className="px-5 py-3.5 bg-neutral-950/70 border-b border-neutral-900 text-xs flex items-center gap-2 overflow-x-auto">
            <span className="text-emerald-400">$</span>
            <span className="text-neutral-200">{currentTab.command}</span>
          </div>

          {/* Logs Output */}
          <div className="p-5 space-y-2 text-xs min-h-[220px]">
            {currentTab.logs.map((log, idx) => {
              const levelColor =
                log.level === 'agent'
                  ? 'text-purple-400'
                  : log.level === 'success'
                  ? 'text-emerald-400'
                  : log.level === 'warn'
                  ? 'text-amber-400'
                  : 'text-neutral-500';

              return (
                <div key={idx} className="flex items-start gap-3 leading-relaxed">
                  <span className="text-neutral-600 shrink-0 text-[11px]">{log.time}</span>
                  <span className={`shrink-0 uppercase text-[10px] px-1 rounded bg-neutral-900 border border-neutral-850 ${levelColor}`}>
                    {log.level}
                  </span>
                  <span className="text-neutral-300">{log.message}</span>
                </div>
              );
            })}
            <div className="flex items-center gap-2 text-neutral-500 pt-2">
              <span className="w-2 h-3.5 bg-emerald-400 inline-block animate-pulse" />
              <span className="text-[11px]">Stream active (SSE turn-v2)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
