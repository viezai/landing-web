# ViezAI — Enterprise AI Agent Platform

> **viezai.com** — Production-grade Landing Page for ViezAI, showcasing the **Harness Agent Architecture**, the **viezagent** Platform Hub, and the **viezagent-kanban** Agent Teams Workspace.

---

## ✦ Core Architecture: The Harness Agent Paradigm

The fundamental innovation behind ViezAI is **decoupling agent cognition from execution**:
- **Central Platform Hub (`viezagent`)**: Consumer apps connect with 1 base URL and 1 API key via an OpenAI-wire facade (`POST /v1/chat/completions` with `model: "<agent-key>"`). Prompts, skills, memory, and LLM credentials reside in the platform, never in consumer apps.
- **Swappable Harness Runtimes**: Execution is delegated to dedicated runtime adapter containers:
  - `claude_runtime`: Claude Code via Anthropic Agent SDK with tool allowlists & transcript resumption.
  - `codex_runtime`: OpenAI Codex via `codex app-server` (Responses API) with surgical diff patches.
  - `dsh_runtime`: DeepSeek Harness with dedicated shell and filesystem workspaces.
  - `antigravity_runtime`: Google Antigravity SDK & `localharness` binary with isolated workspaces.
  - `pi_runtime`: Ultra-lightweight sub-1k token RPC runner.
- **viezagent-kanban**: Collaborative Trello-style workboards combined with roleplay group chat, coordinating agent teams over the **A2A (Agent-to-Agent)** JSON-RPC protocol and **ACP (Agent Client Protocol)**.
- **Bring-Your-Own MCP**: Consumer apps provide user MCP tools dynamically per turn with zero platform credential storage.
- **One-Command Node Connect**: Attach any remote server or GPU node via `connect-runtime.sh`.

---

## 🏛️ Ecosystem Projects

| Project | Location | Focus |
|---|---|---|
| **viezagent** | `E:\develops\viezagent` | Enterprise Platform Hub, FastAPI + MongoDB, Admin Web, Chat UI, Master Agent Gaia (`gaia`), and Harness Adapters. |
| **viezagent-kanban** | `E:\develops\viezagent-kanban` | Agent Teams Workspace, Next.js 14 App Router, Prisma SQLite, A2A JSON-RPC protocol bus. |
| **landing-web** | `E:\develops\landing-web` | Public welcome and enterprise showcase portal for ViezAI. |

---

## 🔒 Stealth Engineering Collective & Inquiries

Built in stealth by the ViezAI Core Systems Group. Direct all partnership, architecture, and deployment inquiries to:

**`support@viezai.com`**

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Run typecheck and vitest suite
npm test

# Build production bundle
npm run build

# Start local dev server
npm run dev
```
