import React, { useState, useEffect } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  Cpu,
  GitBranch,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  Database
} from 'lucide-react';

interface AgentNode {
  id: string;
  role: string;
  name: string;
  task: string;
  duration: string;
  status: 'idle' | 'running' | 'completed';
  icon: typeof Cpu;
  color: string;
}

export const AgentSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [activeTaskKey, setActiveTaskKey] = useState<'refactor' | 'security' | 'migration'>('refactor');

  const taskPresets = {
    refactor: {
      title: 'Monorepo Migration & Zero-Downtime Cache Refactor',
      scope: '32 files across @core, @api, and @web services',
      budget: '45,000 tokens',
    },
    security: {
      title: 'Automated PII Leak Audit & Cryptographic Rotation',
      scope: 'PostgreSQL schema + JWT authentication middleware',
      budget: '32,000 tokens',
    },
    migration: {
      title: 'Full-Stack A2A Protocol Implementation (v2.4 Spec)',
      scope: 'Autonomous subagent message broker & SQLite backend',
      budget: '60,000 tokens',
    },
  };

  const agents: AgentNode[] = [
    {
      id: 'planner',
      role: 'Lead Architect',
      name: '@planner (Shikamaru)',
      task: 'Parse technical specs, decompose AST dependencies & generate deterministic DAG',
      duration: '420ms',
      status: currentStep > 0 ? (currentStep === 1 ? 'running' : 'completed') : 'idle',
      icon: Layers,
      color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    },
    {
      id: 'coder',
      role: 'Staff Engineer',
      name: '@coder (Kakashi)',
      task: 'Generate minimal changes, implement TDD suites, isolate changes in git worktree',
      duration: '890ms',
      status: currentStep > 1 ? (currentStep === 2 ? 'running' : 'completed') : 'idle',
      icon: GitBranch,
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    },
    {
      id: 'reviewer',
      role: 'Security Gate',
      name: '@reviewer (Neji)',
      task: 'Run static CVE audit, verify memory bounds & assert zero data leakage guardrails',
      duration: '310ms',
      status: currentStep > 2 ? (currentStep === 3 ? 'running' : 'completed') : 'idle',
      icon: ShieldCheck,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    },
    {
      id: 'executor',
      role: 'Deploy Orchestrator',
      name: '@executor (Minato)',
      task: 'Pass canary health metrics, telemetry flush & automated pull request submission',
      duration: '180ms',
      status: currentStep > 3 ? 'completed' : (currentStep === 3 ? 'running' : 'idle'),
      icon: Zap,
      color: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
    },
  ];

  const handleStart = () => {
    setIsRunning(true);
    setCurrentStep(1);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    if (currentStep >= 1 && currentStep < 4) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (currentStep === 4) {
      setIsRunning(false);
    }
  }, [isRunning, currentStep]);

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 mb-16">
      <div className="rounded-xl border border-neutral-800 bg-[#090909] p-4 sm:p-6 shadow-2xl relative overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="flex h-3 w-3 space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
            </div>
            <span className="text-xs font-mono text-neutral-400">
              Orchestrator Simulation Canvas :: <span className="text-white font-medium">Multi-Agent Swarm</span>
            </span>
          </div>

          {/* Preset Selector */}
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-lg bg-neutral-950 p-1 border border-neutral-800 text-xs">
              {(['refactor', 'security', 'migration'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTaskKey(key);
                    handleReset();
                  }}
                  className={`px-2.5 py-1 rounded capitalize transition-all ${
                    activeTaskKey === key
                      ? 'bg-neutral-800 text-white font-medium shadow'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            {/* Run / Reset Trigger */}
            {currentStep === 4 ? (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-white font-mono transition-colors"
              >
                <RotateCcw className="w-3 h-3 text-neutral-300" />
                Reset
              </button>
            ) : (
              <button
                onClick={handleStart}
                disabled={isRunning}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono text-white transition-all ${
                  isRunning
                    ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-500 shadow-sm shadow-emerald-950'
                }`}
              >
                <Play className="w-3 h-3 fill-white" />
                {isRunning ? 'Orchestrating...' : 'Run Swarm'}
              </button>
            )}
          </div>
        </div>

        {/* Task Objective Banner */}
        <div className="my-4 p-3 rounded-lg bg-neutral-950/80 border border-neutral-850 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono text-[11px]">
              Active Spec
            </span>
            <span className="text-white font-medium">{taskPresets[activeTaskKey].title}</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400 font-mono text-[11px]">
            <span>Scope: <span className="text-neutral-300">{taskPresets[activeTaskKey].scope}</span></span>
            <span>Target Budget: <span className="text-emerald-400">{taskPresets[activeTaskKey].budget}</span></span>
          </div>
        </div>

        {/* Multi-Agent Orchestration Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-4">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.id}
                className={`relative rounded-lg p-4 border transition-all duration-300 ${
                  agent.status === 'running'
                    ? 'border-emerald-500/60 bg-neutral-900/90 shadow-lg shadow-emerald-950/20 ring-1 ring-emerald-500/30'
                    : agent.status === 'completed'
                    ? 'border-neutral-800 bg-neutral-950/90 text-neutral-300'
                    : 'border-neutral-850 bg-neutral-950/40 opacity-70'
                }`}
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                    Phase 0{index + 1}
                  </span>
                  {agent.status === 'completed' && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      Passed
                    </span>
                  )}
                  {agent.status === 'running' && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 animate-pulse">
                      <Clock className="w-3 h-3" />
                      Working...
                    </span>
                  )}
                  {agent.status === 'idle' && (
                    <span className="text-[11px] font-mono text-neutral-600">Pending</span>
                  )}
                </div>

                {/* Agent Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded border ${agent.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white tracking-tight">{agent.name}</h3>
                    <p className="text-[10px] text-neutral-400">{agent.role}</p>
                  </div>
                </div>

                {/* Agent Task Description */}
                <p className="text-[11px] text-neutral-300 leading-snug min-h-[36px]">
                  {agent.task}
                </p>

                {/* Footer Metrics */}
                <div className="mt-3 pt-2.5 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>Execution: {agent.duration}</span>
                  <span className="text-neutral-400">Isolation: Worktree</span>
                </div>

                {/* Animated Arrow Connector (Desktop) */}
                {index < 3 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 items-center justify-center text-neutral-500">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Real-time Status Telemetry Bar */}
        <div className="rounded-lg bg-neutral-950 p-3 border border-neutral-850 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                currentStep === 4 ? 'bg-emerald-400' : isRunning ? 'bg-amber-400' : 'bg-neutral-600'
              }`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                currentStep === 4 ? 'bg-emerald-500' : isRunning ? 'bg-amber-500' : 'bg-neutral-600'
              }`} />
            </span>
            <span className="text-neutral-400">
              State: {' '}
              <span className="text-white font-medium">
                {currentStep === 0 && 'Ready to Orchestrate'}
                {currentStep === 1 && 'Decomposing Task Graph via @planner'}
                {currentStep === 2 && 'Executing Diff & Writing Tests via @coder'}
                {currentStep === 3 && 'Verifying Strict Guardrails via @reviewer'}
                {currentStep === 4 && 'Execution Succeeded (All Checkpoints Verified)'}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-500">
            <div className="flex items-center gap-1">
              <Database className="w-3 h-3 text-neutral-400" />
              <span>A2A Sync: Active</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Guardrails: 100% Enforced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
