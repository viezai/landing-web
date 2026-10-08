# ViezAI — Enterprise AI Agents Orchestration Platform

> **viezai.com** — Production-grade Landing Page for ViezAI, specialized in autonomous multi-agent orchestration, deterministic software delivery pipelines, and enterprise-grade guardrails.

---

## ✦ Design Aesthetics & Tone

Designed following the modern, minimalist aesthetic inspired by **OpenAI**:
- **Palette**: Pitch Black backdrop (`#000000`, `#080808`, `#0c0c0c`), ultra-thin neutral borders (`#262626`, `#1f1f1f`), subtle emerald and white glows.
- **Typography**: Clean, geometric sans-serif hierarchy powered by *Inter* & *JetBrains Mono* for telemetry and terminal outputs.
- **Interactivity**: Micro-animations, live log streaming, multi-agent status transitions, and client-side validated lead capture.
- **Performance**: Zero bulky runtime dependencies; built with Vite, React 19, TypeScript, and Tailwind CSS v4 for blazing-fast load times.

---

## 🏛️ Page Sections & Architecture

1. **Header / Navigation (`Navbar.tsx`)**:
   - Modern geometric brand mark & version pill (`v2.4`).
   - Smooth anchor navigation: Solutions, Capabilities, Architecture, Metrics, Contact.
   - Quick GitHub repo link and "Book a Demo" modal trigger.
   - Responsive mobile navigation with backdrop blur.

2. **Hero Section (`Hero.tsx`)**:
   - Status badge: `ViezAI Swarm v2.4 — Deterministic Multi-Agent Runtime`.
   - Clear value proposition: *"Enterprise AI Agents Orchestration Platform"*.
   - Dual Call-to-Action: Primary direct booking + secondary interactive swarm simulator trigger.
   - Enterprise assurance badges: 99.4% CI first-pass rate, SOC2 Type II, Zero data retention in transit, Self-hosted VPC native.

3. **Multi-Agent Orchestration Simulator (`AgentSimulator.tsx`)**:
   - Interactive visual canvas demonstrating how the Orchestrator coordinates 4 specialized agents:
     - `@planner (Shikamaru)`: Task graph decomposition (DAG).
     - `@coder (Kakashi)`: Isolated git worktree surgical changes & TDD.
     - `@reviewer (Neji)`: Security static audit & guardrail enforcement.
     - `@executor (Minato)`: Canary deployment & telemetry flush.
   - Switchable task presets (*Refactor*, *Security Audit*, *A2A Migration*).
   - Real-time animated status transitions (Pending -> Running -> Verified -> Shipped).

4. **Core Solutions Bento Grid (`BentoGrid.tsx`)**:
   - 4-card asymmetric bento layout:
     - *Autonomous Multi-Agent Swarms* (A2A protocol, subagent fan-out, ephemeral worktrees).
     - *Private LLM & VPC Isolation* (Air-gapped VPC, DLP PII redaction, mTLS encryption).
     - *Enterprise Integration Engine* (GitHub, GitLab, Jira, Linear, Postgres, Snowflake, Datadog).
     - *Real-Time Observability & Continuous Evaluation* (OpenTelemetry traces, reasoning steps, automated regression suites).

5. **Interactive Agent Showcase (`InteractiveTerminal.tsx`)**:
   - Monospace developer console with tab switching across agent roles.
   - One-click live log streaming simulation with realistic execution timestamps and log levels (`agent`, `info`, `success`).
   - Command snippet copy-to-clipboard functionality.

6. **Why ViezAI / 4-Stage Architecture (`Architecture.tsx`)**:
   - Systematic breakdown of the ViezAI execution lifecycle:
     - `01. Ingest`: Knowledge graph, AST mapping, and hybrid semantic retrieval.
     - `02. Plan`: Deterministic Directed Acyclic Graph (DAG) with token ceilings.
     - `03. Execute`: Isolated ephemeral git worktrees in gVisor sandboxes.
     - `04. Guardrails`: Adversarial dual-skeptic verification and zero-leakage security gates.

7. **Enterprise Benchmarks & Compliance (`Metrics.tsx`)**:
   - 10M+ Tasks executed autonomously.
   - 99.4% CI first-pass success rate.
   - 12x Faster cycle from spec to production pull request.
   - < 45ms Orchestration overhead.

8. **Lead Capture & Consultation Form (`ContactSection.tsx` & `ContactModal.tsx`)**:
   - Enterprise consultation booking form.
   - Client-side validation: Full Name, Business Email format, Company Name, Team Size, Deployment Mode.
   - Simulated 2-hour SLA response feedback and success state.
   - Reusable popup modal triggerable from anywhere on the page.

9. **Footer (`Footer.tsx`)**:
   - Comprehensive site map, resources, and compliance certifications.
   - Real-time pulsing system status: *"All Systems Operational (99.99%)"*.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript 5+](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest](https://vitest.dev/)
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/viezai/landing-web.git
cd landing-web

# Install dependencies
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Typecheck & Unit Tests
```bash
# Run TypeScript validation and Vitest test suite
npm test
```

### Production Build
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory, ready to deploy to any CDN or web server (Vercel, Cloudflare Pages, AWS CloudFront, Nginx).

### Preview Production Build
```bash
npm run preview
```

---

## 📦 Deployment

### Run with Docker / GitHub Container Registry (GHCR)
The repository automatically builds and publishes production multi-platform images (`linux/amd64`, `linux/arm64`) to **GitHub Container Registry (GHCR)** on every push to `main`.

```bash
# Pull the latest container image from GHCR
docker pull ghcr.io/viezai/landing-web:latest

# Run containerized Nginx web server
docker run -d --name viezai-landing -p 8080:80 ghcr.io/viezai/landing-web:latest

# Check health endpoint
curl http://localhost:8080/healthz
```

### Build Docker Image Locally
```bash
# Build production multi-stage image
docker build -t viezai-landing-web .

# Run locally
docker run -d -p 8080:80 viezai-landing-web
```

### Deploy to Vercel / Cloudflare Pages / Static CDN
Since ViezAI Landing Web builds into a pure static export (`dist/`), it can also be deployed with zero backend configuration:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 20.x

---

## 🛡️ License

Copyright © 2026 ViezAI, Inc. All rights reserved.
