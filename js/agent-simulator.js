/**
 * ViezAI Interactive Agent Simulator Data & Engine
 * Provides realistic enterprise multi-agent execution traces
 */

export const SCENARIOS = {
  bugfix: {
    id: "bugfix",
    name: "Enterprise Bug Fix & Adversarial Review",
    subtitle: "Issue #408: Distributed Cache Invalidation Race Condition",
    steps: [
      {
        id: 1,
        agent: "Planner Agent",
        role: "planner",
        tagClass: "tag-planner",
        title: "Triage & Root Cause Analysis",
        status: "completed",
        timestamp: "00:01.120",
        tokens: 342,
        logs: [
          {
            type: "thought",
            content: "Analyzing telemetry & stack traces across redis-cluster-node-04 and session worker pool..."
          },
          {
            type: "action",
            content: "Located race condition in <code>src/services/sessionStore.ts:142</code> where token rotation misses atomic mutex during concurrent refresh."
          },
          {
            type: "plan",
            content: "Generated atomic CAS (Compare-And-Swap) migration plan. Delegating implementation to <strong>Coder Agent</strong> with strict backward compatibility constraints."
          }
        ]
      },
      {
        id: 2,
        agent: "Coder Agent",
        role: "coder",
        tagClass: "tag-coder",
        title: "Atomic Mutex Implementation",
        status: "completed",
        timestamp: "00:03.450",
        tokens: 789,
        logs: [
          {
            type: "action",
            content: "Created temporary git worktree <code>wt-fix-session-race</code>."
          },
          {
            type: "code",
            snippet: `async function rotateTokenAtomic(sessionId: string, oldToken: string, newToken: string): Promise<boolean> {
  const script = \`
    if redis.call("get", KEYS[1]) == ARGV[1] then
      return redis.call("set", KEYS[1], ARGV[2], "XX", "EX", ARGV[3])
    else
      return 0
    end
  \`;
  return await redis.eval(script, 1, \`session:\${sessionId}\`, oldToken, newToken, 86400);
}`
          },
          {
            type: "result",
            content: "Applied minimal diff with zero memory leak. Handing patch over to <strong>Security & Guardrail Agent</strong>."
          }
        ]
      },
      {
        id: 3,
        agent: "Security Agent",
        role: "security",
        tagClass: "tag-security",
        title: "Adversarial Verification & AST Audit",
        status: "completed",
        timestamp: "00:05.210",
        tokens: 512,
        logs: [
          {
            type: "security",
            content: "Running static taint analysis & AST invariant checks. No sensitive credentials logged."
          },
          {
            type: "adversarial",
            content: "Simulated 500 concurrent rogue invalidation requests in isolated sandbox. 0 duplicate session leaks detected."
          },
          {
            type: "verdict",
            content: "Security Policy <strong>SOC2-CC6.1 PASSED</strong>. Signed off with cryptographically verified checksum."
          }
        ]
      },
      {
        id: 4,
        agent: "Evaluator Agent",
        role: "eval",
        tagClass: "tag-eval",
        title: "Automated Regression & Deployment",
        status: "completed",
        timestamp: "00:06.840",
        tokens: 410,
        logs: [
          {
            type: "test",
            content: "Executed 68 unit & integration test suites. 100% pass rate in 1.42s."
          },
          {
            type: "deploy",
            content: "Auto-generated pull request <code>#1289</code> with semantic commit attribution and verified benchmark report. Ready for merge."
          }
        ]
      }
    ]
  },

  pipeline: {
    id: "pipeline",
    name: "Automated Data Pipeline & Migration",
    subtitle: "ETL Schema Evolution: PostgreSQL to ClickHouse Vector Lake",
    steps: [
      {
        id: 1,
        agent: "Planner Agent",
        role: "planner",
        tagClass: "tag-planner",
        title: "Schema Introspection & Mapping",
        status: "completed",
        timestamp: "00:01.050",
        tokens: 418,
        logs: [
          {
            type: "thought",
            content: "Scanning PostgreSQL table <code>enterprise_embeddings</code> (4.2M rows). Inferring schema delta."
          },
          {
            type: "plan",
            content: "Defined batched zero-downtime replication strategy with dual-write synchronization and rollback trigger."
          }
        ]
      },
      {
        id: 2,
        agent: "Coder Agent",
        role: "coder",
        tagClass: "tag-coder",
        title: "High-Throughput Stream Worker",
        status: "completed",
        timestamp: "00:02.980",
        tokens: 650,
        logs: [
          {
            type: "code",
            snippet: `CREATE TABLE IF NOT EXISTS analytics.agent_vectors (
  id UUID,
  org_id LowCardinality(String),
  embedding Array(Float32),
  created_at DateTime64(3) CODEC(DoubleDelta, ZSTD)
) ENGINE = ReplacingMergeTree()
PRIMARY KEY (org_id, id);`
          },
          {
            type: "action",
            content: "Compiled Rust stream consumer with backpressure regulation. Throughput benchmark: 28,000 events/sec."
          }
        ]
      },
      {
        id: 3,
        agent: "Security Agent",
        role: "security",
        tagClass: "tag-security",
        title: "PII Masking & Encryption Audit",
        status: "completed",
        timestamp: "00:04.620",
        tokens: 380,
        logs: [
          {
            type: "security",
            content: "Validated column-level encryption keys and GDPR deletion propagation compliance."
          }
        ]
      },
      {
        id: 4,
        agent: "Evaluator Agent",
        role: "eval",
        tagClass: "tag-eval",
        title: "Parity Check & Cutover",
        status: "completed",
        timestamp: "00:05.900",
        tokens: 290,
        logs: [
          {
            type: "test",
            content: "Checksum parity validated on 4,200,000 rows. Discrepancy: 0. Cutover complete."
          }
        ]
      }
    ]
  },

  compliance: {
    id: "compliance",
    name: "Security Compliance Audit & Patch",
    subtitle: "Enterprise CVE-2026 Vulnerability Scan & Auto-Remediation",
    steps: [
      {
        id: 1,
        agent: "Planner Agent",
        role: "planner",
        tagClass: "tag-planner",
        title: "Dependency Graph & SBOM Scan",
        status: "completed",
        timestamp: "00:00.920",
        tokens: 310,
        logs: [
          {
            type: "thought",
            content: "Auditing lockfiles across 14 microservices against NIST CVE & GitHub Security Advisories."
          },
          {
            type: "plan",
            content: "Found 1 moderate transitive dependency CVE in deep parser tree. Impact scope: internal batch worker only."
          }
        ]
      },
      {
        id: 2,
        agent: "Coder Agent",
        role: "coder",
        tagClass: "tag-coder",
        title: "Pinning & Compatibility Patch",
        status: "completed",
        timestamp: "00:02.400",
        tokens: 490,
        logs: [
          {
            type: "action",
            content: "Overrode package resolution with audited patched version. Ran backward compatibility suite."
          }
        ]
      },
      {
        id: 3,
        agent: "Security Agent",
        role: "security",
        tagClass: "tag-security",
        title: "Sandbox Penetration Simulation",
        status: "completed",
        timestamp: "00:03.950",
        tokens: 580,
        logs: [
          {
            type: "adversarial",
            content: "Fuzzed inputs with exploit payload generator. Exploit vector safely neutralized by runtime sandbox."
          }
        ]
      },
      {
        id: 4,
        agent: "Evaluator Agent",
        role: "eval",
        tagClass: "tag-eval",
        title: "Audit Trail & Compliance Attestation",
        status: "completed",
        timestamp: "00:05.110",
        tokens: 320,
        logs: [
          {
            type: "deploy",
            content: "Generated signed SBOM attestation certificate. Audit trail exported to Enterprise SIEM."
          }
        ]
      }
    ]
  }
};
