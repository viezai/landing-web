import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Play,
  RotateCcw,
  Copy,
  Check,
  CheckCircle2,
  Cpu,
  Shield,
  GitCommit,
  Layers
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
  const [activeTab, setActiveTab] = useState<string>('coder');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [visibleLogsCount, setVisibleLogsCount] = useState<number>(6);
  const [copied, setCopied] = useState<boolean>(false);

  const tabs: TerminalTab[] = [
    {
      id: 'planner',
      agent: '@planner (Shikamaru)',
      role: 'Architecture & Spec Decomposition',
      icon: Layers,
      command: 'viezai plan --epic "EP-402: OAuth2 PKCE Migration" --format dag',
      logs: [
        { time: '14:21:01.012', level: 'info', message: 'Analyzing repository topology across 18 microservices...' },
        { time: '14:21:01.240', level: 'agent', message: '[planner] Found circular dependency between @auth/core and @gateway/proxy' },
        { time: '14:21:01.482', level: 'info', message: 'Generating directed acyclic graph (DAG) with 4 isolated milestones' },
        { time: '14:21:01.710', level: 'agent', message: '[planner] Enqueuing task t_402a -> @coder with strict 30k token ceiling' },
        { time: '14:21:01.890', level: 'success', message: 'Dependency resolution completed in 878ms. Ready for fan-out.' },
      ],
    },
    {
      id: 'coder',
      agent: '@coder (Kakashi)',
      role: 'Autonomous Software Engineering',
      icon: GitCommit,
      command: 'viezai code --task "t_402a" --worktree isolated --verify test',
      logs: [
        { time: '14:21:02.100', level: 'info', message: 'Checking out isolated worktree at .claude/worktrees/feat-pkce-402' },
        { time: '14:21:02.320', level: 'agent', message: '[coder] Reading src/auth/verifier.ts and test/pkce.test.ts' },
        { time: '14:21:02.650', level: 'agent', message: '[coder] Applying minimal surgical fix: SHA-256 code_challenge verification' },
        { time: '14:21:02.940', level: 'info', message: 'Running test suite: npm run test:unit' },
        { time: '14:21:03.410', level: 'success', message: 'PASS: 42/42 tests passing. Coverage: 98.7% (+2.4%)' },
        { time: '14:21:03.620', level: 'success', message: 'Created signed commit 8f9b2c1. Handing over to @reviewer.' },
      ],
    },
    {
      id: 'reviewer',
      agent: '@reviewer (Neji)',
      role: 'Security Audit & Guardrails',
      icon: Shield,
      command: 'viezai review --commit 8f9b2c1 --strict-dlp --check-cve',
      logs: [
        { time: '14:21:03.800', level: 'info', message: 'Initiating adversarial review pass with dual skeptic agents...' },
        { time: '14:21:04.110', level: 'agent', message: '[reviewer] Scanning diff for secret leaks, PII exposures & token sinks' },
        { time: '14:21:04.380', level: 'agent', message: '[reviewer] Verifying timing-attack resilience in crypto.timingSafeEqual()' },
        { time: '14:21:04.620', level: 'success', message: '0 high/critical CVEs. Zero data leakage detected.' },
        { time: '14:21:04.810', level: 'success', message: 'Verdict: APPROVED. Guardrails signed off.' },
      ],
    },
    {
      id: 'executor',
      agent: '@executor (Minato)',
      role: 'Canary Deployment & Telemetry',
      icon: Cpu,
      command: 'viezai ship --pr --target main --canary 5% --observe telemetry',
      logs: [
        { time: '14:21:05.020', level: 'info', message: 'Creating GitHub Pull Request #128: "feat(auth): PKCE challenge verification"' },
        { time: '14:21:05.340', level: 'agent', message: '[executor] Attaching test reports, flame graphs & audit attestation' },
        { time: '14:21:05.690', level: 'info', message: 'Triggering preview environment deployment: viezai-pr-128.internal.net' },
        { time: '14:21:06.120', level: 'success', message: 'Canary healthy: p99 latency = 18ms, error rate = 0.00%' },
        { time: '14:21:06.310', level: 'success', message: 'Ready for merge. Task t_402 marked as DONE.' },
      ],
    },
  ];

  const currentTabData = tabs.find((t) => t.id === activeTab) || tabs[1];

  const handleSimulate = () => {
    setIsRunning(true);
    setVisibleLogsCount(1);
  };

  const handleReset = () => {
    setIsRunning(false);
    setVisibleLogsCount(currentTabData.logs.length);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTabData.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (!isRunning) return;
    if (visibleLogsCount < currentTabData.logs.length) {
      const timer = setTimeout(() => {
        setVisibleLogsCount((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, visibleLogsCount, currentTabData.logs.length]);

  useEffect(() => {
    setVisibleLogsCount(currentTabData.logs.length);
    setIsRunning(false);
  }, [activeTab]);

  return (
    <section id="capabilities" className="py-24 border-b border-neutral-900 bg-[#040404]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Interactive Agent Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Observe multi-agent teamwork
            <br />
            <span className="text-neutral-500">down to the millisecond.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Click across specialized agents to inspect how each role executes, communicates over A2A protocol,
            and validates output before passing control forward.
          </p>
        </div>

        {/* Tab Buttons Bar */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all border ${
                  isActive
                    ? 'bg-neutral-900 text-white border-neutral-700 shadow-md ring-1 ring-neutral-700'
                    : 'bg-black text-neutral-400 border-neutral-850 hover:border-neutral-750 hover:text-neutral-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-neutral-500'}`} />
                <span className="font-medium">{tab.agent}</span>
              </button>
            );
          })}
        </div>

        {/* Terminal Container */}
        <div className="rounded-xl border border-neutral-800 bg-[#080808] overflow-hidden shadow-2xl">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-b border-neutral-855">
            <div className="flex items-center gap-2">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-neutral-800 border border-neutral-700" />
                <span className="w-3 h-3 rounded-full bg-neutral-800 border border-neutral-700" />
                <span className="w-3 h-3 rounded-full bg-neutral-800 border border-neutral-700" />
              </div>
              <span className="text-xs font-mono text-neutral-400 ml-2 hidden sm:inline-flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                viezai-agent-sandbox :: <span className="text-white">{currentTabData.role}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 hover:bg-neutral-800 text-[11px] font-mono text-neutral-300 border border-neutral-800 transition-colors"
                title="Copy CLI command"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={isRunning ? handleReset : handleSimulate}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-[11px] font-mono text-white transition-all shadow-sm"
              >
                {isRunning ? (
                  <>
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-white" />
                    <span>Replay Stream</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Terminal Command Line */}
          <div className="px-5 py-3 bg-black/60 border-b border-neutral-900 flex items-center gap-3 font-mono text-xs">
            <span className="text-emerald-400 font-semibold">$</span>
            <span className="text-neutral-200 select-all">{currentTabData.command}</span>
          </div>

          {/* Terminal Logs Stream */}
          <div className="p-5 font-mono text-xs space-y-2 min-h-[220px] max-h-[340px] overflow-y-auto">
            {currentTabData.logs.slice(0, visibleLogsCount).map((log, index) => (
              <div key={index} className="flex items-start gap-3 transition-opacity duration-200">
                <span className="text-neutral-600 select-none text-[11px] pt-0.5">{log.time}</span>
                <span
                  className={`text-[10px] font-medium uppercase px-1.5 py-0.2 rounded border ${
                    log.level === 'success'
                      ? 'bg-emerald-950/60 text-emerald-400 border-emerald-900/50'
                      : log.level === 'agent'
                      ? 'bg-cyan-950/60 text-cyan-400 border-cyan-900/50'
                      : log.level === 'warn'
                      ? 'bg-amber-950/60 text-amber-400 border-amber-900/50'
                      : 'bg-neutral-900 text-neutral-400 border-neutral-800'
                  }`}
                >
                  {log.level}
                </span>
                <span
                  className={`flex-1 leading-relaxed ${
                    log.level === 'success'
                      ? 'text-emerald-300 font-medium'
                      : log.level === 'agent'
                      ? 'text-cyan-200'
                      : 'text-neutral-300'
                  }`}
                >
                  {log.message}
                </span>
              </div>
            ))}

            {isRunning && (
              <div className="flex items-center gap-2 text-emerald-400 text-xs pt-1">
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-neutral-500 font-mono">Agent streaming output...</span>
              </div>
            )}
          </div>

          {/* Terminal Footer Status */}
          <div className="px-5 py-2.5 bg-neutral-950 border-t border-neutral-850 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Runtime Sandbox: gVisor Isolated Container</span>
            </div>
            <div>
              <span>Latency: 42ms | Memory: 128MB / 512MB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
