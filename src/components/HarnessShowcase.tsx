import React, { useState } from 'react';
import {
  Cpu,
  CheckCircle2,
  Terminal,
  Server
} from 'lucide-react';

interface RuntimeInfo {
  id: string;
  name: string;
  harnessType: string;
  badge: string;
  containerPort: string;
  providerCompatibility: string;
  engineMechanism: string;
  features: string[];
  protocolPayload: string;
}

export const HarnessShowcase: React.FC = () => {
  const [activeRuntime, setActiveRuntime] = useState<string>('claude');

  const runtimes: Record<string, RuntimeInfo> = {
    claude: {
      id: 'claude',
      name: 'Claude Code Runtime',
      harnessType: 'claude_runtime',
      badge: 'Anthropic Agent SDK',
      containerPort: 'Port 4349',
      providerCompatibility: 'Claude subscription, Anthropic keys, or via /gateway/anthropic translator',
      engineMechanism: 'Claude Code via Agent SDK with agent MCP connectors and resume transcripts',
      features: [
        'Resumes its own execution transcripts across turns',
        'Strict MCP tool allowlist enforcement in-process',
        'Automatic image attachment ingestion',
        'Ephemeral git worktree isolation per task session',
      ],
      protocolPayload: `{
  "agent": "security-auditor",
  "runtime": "claude",
  "harness_adapter": "http://harness-adapter:4349",
  "mcp_servers": [
    { "key": "github", "url": "https://api.github.com/mcp", "tools": ["diff", "pr_create"] }
  ],
  "workspace": "/tmp/viezai-workspaces/session-8921/repo",
  "stream_protocol": "SSE/turn-v2"
}`,
    },
    codex: {
      id: 'codex',
      name: 'OpenAI Codex Runtime',
      harnessType: 'codex_runtime',
      badge: 'Codex App-Server (Responses API)',
      containerPort: 'Port 4350',
      providerCompatibility: 'OpenAI Responses API, Alibaba Model Studio, or via /gateway/responses translator',
      engineMechanism: 'codex app-server with shell, surgical patches, repo skills, and tool allowlists',
      features: [
        'Native Responses API wire format with thread resumption',
        'Surgical diff patching without full-file overwrites',
        'Sandboxed shell execution with timeout & memory guardrails',
        'Transparent Anthropic-wire gateway translation',
      ],
      protocolPayload: `{
  "agent": "lead-refactorer",
  "runtime": "codex",
  "harness_adapter": "http://harness-adapter:4350",
  "responses_endpoint": "/gateway/responses",
  "capabilities": ["shell", "apply_patch", "skills", "mcp_allowlist"],
  "isolation_mode": "ephemeral_worktree"
}`,
    },
    dsh: {
      id: 'dsh',
      name: 'DeepSeek Harness',
      harnessType: 'dsh_runtime',
      badge: 'DSH Container Core',
      containerPort: 'Port 4348',
      providerCompatibility: 'OpenAI-wire providers, Claude/Codex subscriptions, pi-ai fallback',
      engineMechanism: 'Own shell, files, repo skills, subagent fan-out; one workspace per session',
      features: [
        'Dedicated shell and filesystem workspace per session',
        'Subagent delegation and autonomous task decomposition',
        'Image attachments via read_image with pi-ai route',
        'High throughput token economy for massive codebases',
      ],
      protocolPayload: `{
  "agent": "monorepo-architect",
  "runtime": "dsh",
  "harness_adapter": "http://harness-adapter:4348",
  "subagent_allowed": true,
  "max_turn_budget": 60000,
  "workspace_layout": "dsh-session-v2"
}`,
    },
    antigravity: {
      id: 'antigravity',
      name: 'Google Antigravity Runtime',
      harnessType: 'antigravity_runtime',
      badge: 'Google Antigravity SDK',
      containerPort: 'Port 4354',
      providerCompatibility: 'Gemini Developer API, Vertex AI natively, or any OpenAI-compatible provider',
      engineMechanism: 'localharness binary with autonomous agentic loop and project skills',
      features: [
        'Built-in tools: shell, files, web search, subagents',
        'Multi-agent loops with isolated workspaces',
        'Native support for multimodal reasoning and long-context ASTs',
        'MCP connector integration with zero state leakage',
      ],
      protocolPayload: `{
  "agent": "context-specialist",
  "runtime": "antigravity",
  "harness_adapter": "http://harness-adapter:4354",
  "multimodal": true,
  "context_window": "1M+",
  "tools": ["localharness", "web_search", "mcp"]
}`,
    },
    pi: {
      id: 'pi',
      name: 'Pi Lightweight Runtime',
      harnessType: 'pi_runtime',
      badge: 'Sub-1k Token Micro-Harness',
      containerPort: 'Port 4353',
      providerCompatibility: 'Any provider via /gateway/responses translator',
      engineMechanism: 'pi --mode rpc (Node CLI): read, bash, edit, write with sub-1k token system prompt',
      features: [
        'Ultra-light footprint: fastest boot time (<80ms)',
        'Minimalist system prompt (<1,000 tokens overhead)',
        'Reopens its own local session state file seamlessly',
        'Zero permission bloat: raw deterministic execution',
      ],
      protocolPayload: `{
  "agent": "quick-tester",
  "runtime": "pi",
  "harness_adapter": "http://harness-adapter:4353",
  "mode": "rpc",
  "system_prompt_tokens": 820,
  "boot_latency_ms": 78
}`,
    },
  };

  const current = runtimes[activeRuntime];

  return (
    <section id="harness" className="py-24 border-b border-neutral-900 bg-[#040404]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            Core Innovation: Harness Agent Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            How Harness Changes Everything.
            <br />
            <span className="text-neutral-500">Decoupling cognition from execution.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Traditional AI agents embed fragile execution loops into application code. ViezAI inverts this:
            your apps talk to a single OpenAI-compatible API, while execution is delegated to dedicated,
            sandboxed <strong className="text-neutral-200">Harness Runtimes</strong>.
          </p>
        </div>

        {/* Comparison: Legacy vs ViezAI Harness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Legacy Paradigm */}
          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-neutral-500 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-400/80" />
              Legacy Agent Implementations
            </div>
            <h3 className="text-xl font-semibold text-neutral-300 mb-3">Tightly Coupled & Fragile</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <span className="text-red-400/80 font-mono mt-0.5">✕</span>
                <span><strong className="text-neutral-300">Hardcoded Prompt Stringing:</strong> System prompts and skills buried in individual backend repositories.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400/80 font-mono mt-0.5">✕</span>
                <span><strong className="text-neutral-300">Model Vendor Lock-in:</strong> Switching between Claude Code, Codex, or DeepSeek requires rewriting tool drivers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400/80 font-mono mt-0.5">✕</span>
                <span><strong className="text-neutral-300">Shared Host Mutation:</strong> Agents execute on the host machine without isolated git worktrees, risking destructive file collisions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400/80 font-mono mt-0.5">✕</span>
                <span><strong className="text-neutral-300">Credential Leakage:</strong> LLM API keys and domain credentials distributed across every consumer microservice.</span>
              </li>
            </ul>
          </div>

          {/* ViezAI Harness Paradigm */}
          <div className="p-6 sm:p-8 rounded-2xl border border-emerald-900/50 bg-gradient-to-b from-neutral-950 to-emerald-950/10 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              The ViezAI Harness Architecture
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Swappable, Sandboxed & Governed</h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-mono mt-0.5">✓</span>
                <span><strong className="text-white">Central Hub & Universal API:</strong> Consumer products use 1 base URL and 1 API key. The platform manages prompts, skills, and keys.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-mono mt-0.5">✓</span>
                <span><strong className="text-white">Containerized Harness Adapters:</strong> Independent runtime containers for Claude Code, Codex, DeepSeek, Antigravity, and Pi.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-mono mt-0.5">✓</span>
                <span><strong className="text-white">Ephemeral Git Worktrees:</strong> Every task turn boots inside its own sandbox. Zero side effects on peer agents or host repos.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-mono mt-0.5">✓</span>
                <span><strong className="text-white">Bring-Your-Own MCP per Call:</strong> Pass user tools dynamically; validated in-process, executed per turn, never stored.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Runtime Selector */}
        <div className="rounded-2xl border border-neutral-800 bg-[#080808] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-neutral-800/80 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Live Harness Runtime Catalog
              </span>
              <h3 className="text-xl font-semibold text-white mt-1">
                Explore ViezAI Harness Adapters
              </h3>
            </div>

            {/* Runtime Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {Object.values(runtimes).map((rt) => (
                <button
                  key={rt.id}
                  onClick={() => setActiveRuntime(rt.id)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                    activeRuntime === rt.id
                      ? 'bg-neutral-100 text-black font-semibold shadow-sm'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {rt.harnessType}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Runtime Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{current.name}</h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span className="text-emerald-400 font-semibold">{current.harnessType}</span>
                    <span>•</span>
                    <span className="text-neutral-500">{current.containerPort}</span>
                    <span>•</span>
                    <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px]">
                      {current.badge}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Engine Architecture
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {current.engineMechanism}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Provider Compatibility
                </span>
                <p className="text-xs font-mono text-emerald-400/90 bg-emerald-950/20 border border-emerald-900/30 p-2.5 rounded-md">
                  {current.providerCompatibility}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                  Harness Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-neutral-300 bg-neutral-900/60 p-2 rounded border border-neutral-850"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Protocol Payload Preview */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="rounded-lg bg-black border border-neutral-850 p-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-900 text-[11px] text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    harness-protocol.json
                  </span>
                  <span className="text-emerald-400">Status: Active</span>
                </div>
                <pre className="text-neutral-300 overflow-x-auto text-[11px] leading-relaxed">
                  {current.protocolPayload}
                </pre>
              </div>

              {/* 1-command registration hint */}
              <div className="mt-4 p-3 rounded-lg bg-neutral-950 border border-neutral-850 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-1.5 text-neutral-300 mb-1">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  <span>One-Command Runtime Node Connect</span>
                </div>
                <div className="bg-black p-2 rounded border border-neutral-900 text-[11px] text-emerald-300 select-all overflow-x-auto">
                  curl -fsSL https://platform.viezai.com/install/connect-runtime.sh | bash
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
