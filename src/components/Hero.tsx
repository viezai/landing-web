import React from 'react';
import { ArrowRight, Sparkles, Terminal, CheckCircle2, Shield, Lock } from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
  onScrollToTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal, onScrollToTerminal }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-neutral-900 bg-black">
      {/* Subtle background glow effect (OpenAI style) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-neutral-800/20 via-emerald-950/10 to-transparent blur-3xl opacity-70"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/80 px-3.5 py-1 text-xs text-neutral-300 backdrop-blur transition-all hover:border-neutral-700 hover:bg-neutral-900 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-white">ViezAI Swarm v2.4</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400">Deterministic Multi-Agent Runtime</span>
          <Sparkles className="h-3 w-3 text-emerald-400 ml-0.5" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-5xl mx-auto leading-[1.08]">
          Enterprise AI Agents
          <br />
          <span className="bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            Orchestration Platform
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto font-normal leading-relaxed">
          Deploy, coordinate, and supervise fleets of autonomous AI agents across your codebases,
          databases, and mission-critical workflows. Governed by deterministic pipelines and zero-leakage security sandboxes.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-neutral-200 active:scale-[0.98] shadow-sm hover:shadow-neutral-800"
          >
            <span>Start Deploying Agents</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={onScrollToTerminal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-700 hover:bg-neutral-900 hover:text-white active:scale-[0.98]"
          >
            <Terminal className="h-4 w-4 text-emerald-400" />
            <span>Simulate Swarm Execution</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>99.4% CI First-Pass Rate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            <span>SOC2 Type II & HIPAA Ready</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-emerald-400" />
            <span>Zero Data Retention in Transit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Self-Hosted & VPC Native</span>
          </div>
        </div>
      </div>
    </section>
  );
};
