import { SCENARIOS } from './agent-simulator.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroInteractive();
  initAgentShowcase();
  initFaqAccordion();
  initContactForm();
  initMetricsAnimation();
});

/* ==========================================================================
   Navbar & Mobile Menu
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.borderColor = 'var(--border-medium)';
      navbar.style.background = 'rgba(0, 0, 0, 0.88)';
    } else {
      navbar.style.borderColor = 'var(--border-subtle)';
      navbar.style.background = 'rgba(0, 0, 0, 0.75)';
    }
  });

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isOpen = mobileNav.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   Hero Interactive Nodes
   ========================================================================== */
function initHeroInteractive() {
  const heroCards = document.querySelectorAll('.agent-node-card');
  const streamDetail = document.getElementById('heroStreamDetail');

  const descriptions = {
    planner: "Planner Agent: Decomposing enterprise requests into sub-tasks with dependency graphs.",
    coder: "Coder Agent: Scoping localized diffs, writing idiomatic type-safe code in isolated worktrees.",
    security: "Guardrail Agent: Static taint analysis, credential leakage prevention, and sandbox containment.",
    eval: "Evaluator Agent: Running regression test suites, benchmark assertions, and PR sign-off."
  };

  heroCards.forEach(card => {
    card.addEventListener('click', () => {
      heroCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const role = card.dataset.role;
      if (streamDetail && descriptions[role]) {
        streamDetail.textContent = descriptions[role];
      }
    });
  });
}

/* ==========================================================================
   Interactive Agent Showcase & Simulator
   ========================================================================== */
function initAgentShowcase() {
  let currentScenarioKey = 'bugfix';
  let activeStepIndex = 0;
  let isAutoPlaying = false;
  let playInterval = null;

  const tabButtons = document.querySelectorAll('.scenario-tab');
  const scenarioTitleEl = document.getElementById('showcaseScenarioTitle');
  const sidebarEl = document.getElementById('showcasePipelineSteps');
  const terminalEl = document.getElementById('showcaseTerminal');
  const playPauseBtn = document.getElementById('btnPlayPause');
  const stepNextBtn = document.getElementById('btnStepNext');
  const statusPill = document.getElementById('showcaseStatusPill');

  function renderScenario(key, stepIndex = 0) {
    const scenario = SCENARIOS[key];
    if (!scenario) return;

    currentScenarioKey = key;
    activeStepIndex = stepIndex;

    // Update scenario title
    if (scenarioTitleEl) {
      scenarioTitleEl.textContent = scenario.name + " — " + scenario.subtitle;
    }

    // Render Pipeline Steps in Sidebar
    if (sidebarEl) {
      sidebarEl.innerHTML = scenario.steps.map((step, idx) => {
        const isActive = idx === activeStepIndex;
        const isDone = idx < activeStepIndex;
        const badgeText = isDone ? "PASSED" : isActive ? "ACTIVE" : "QUEUED";

        return `
          <div class="pipeline-step ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}" data-step-index="${idx}">
            <div class="step-header">
              <span class="step-agent">${step.agent}</span>
              <span class="step-badge">${badgeText}</span>
            </div>
            <div class="step-title">${step.title}</div>
          </div>
        `;
      }).join('');

      // Add click listener to steps
      sidebarEl.querySelectorAll('.pipeline-step').forEach(stepEl => {
        stepEl.addEventListener('click', () => {
          const idx = parseInt(stepEl.dataset.stepIndex, 10);
          renderScenario(currentScenarioKey, idx);
        });
      });
    }

    // Render Terminal Log Output
    if (terminalEl) {
      const step = scenario.steps[activeStepIndex];
      let logsHtml = `
        <div class="terminal-line">
          <span class="log-tag tag-system">SYSTEM</span>
          <div class="log-content">
            Phase ${activeStepIndex + 1}/${scenario.steps.length}: <strong>${step.agent}</strong> initialized [T+${step.timestamp} | ${step.tokens} tokens]
          </div>
        </div>
      `;

      step.logs.forEach(log => {
        let tag = `<span class="log-tag ${step.tagClass}">${step.role.toUpperCase()}</span>`;
        let body = `<div class="log-content">${log.content || ''}`;

        if (log.snippet) {
          body += `<pre class="log-code-snippet"><code>${escapeHtml(log.snippet)}</code></pre>`;
        }
        body += `</div>`;

        logsHtml += `
          <div class="terminal-line">
            ${tag}
            ${body}
          </div>
        `;
      });

      terminalEl.innerHTML = logsHtml;
      terminalEl.scrollTop = terminalEl.scrollHeight;
    }

    if (statusPill) {
      statusPill.textContent = `Step ${activeStepIndex + 1} of ${scenario.steps.length}`;
    }
  }

  // Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.dataset.scenario;
      renderScenario(key, 0);
    });
  });

  // Step Next button
  if (stepNextBtn) {
    stepNextBtn.addEventListener('click', () => {
      const scenario = SCENARIOS[currentScenarioKey];
      if (activeStepIndex < scenario.steps.length - 1) {
        renderScenario(currentScenarioKey, activeStepIndex + 1);
      } else {
        renderScenario(currentScenarioKey, 0);
      }
    });
  }

  // Auto-play toggle
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      isAutoPlaying = !isAutoPlaying;
      if (isAutoPlaying) {
        playPauseBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
          Pause
        `;
        playInterval = setInterval(() => {
          const scenario = SCENARIOS[currentScenarioKey];
          if (activeStepIndex < scenario.steps.length - 1) {
            renderScenario(currentScenarioKey, activeStepIndex + 1);
          } else {
            renderScenario(currentScenarioKey, 0);
          }
        }, 3200);
      } else {
        clearInterval(playInterval);
        playPauseBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Play
        `;
      }
    });
  }

  // Initial render
  renderScenario('bugfix', 0);
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const wasActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(i => i.classList.remove('active'));

      // Toggle clicked item
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Lead Capture Contact Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('contactFeedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const company = form.elements['company']?.value.trim();
    const solution = form.elements['solution']?.value;
    const message = form.elements['message']?.value.trim();

    // Validation
    if (!name || !email || !company) {
      showFeedback('Vui lòng điền đầy đủ Tên, Email công ty và Tên doanh nghiệp.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('Vui lòng nhập định dạng email hợp lệ (vd: name@company.com).', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
      </svg>
      Đang gửi yêu cầu...
    `;

    // Simulate async enterprise lead dispatch
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.reset();
      showFeedback('Cảm ơn bạn! Đội ngũ chuyên gia kiến trúc ViezAI sẽ liên hệ demo và tư vấn giải pháp trong vòng 24 giờ làm việc.', 'success');
    }, 900);
  });

  function showFeedback(text, type) {
    feedback.className = `form-feedback ${type}`;
    feedback.textContent = text;
    feedback.style.display = 'block';

    if (type === 'success') {
      setTimeout(() => {
        feedback.style.display = 'none';
      }, 8000);
    }
  }
}

/* ==========================================================================
   Metrics Counter Animation
   ========================================================================== */
function initMetricsAnimation() {
  const metricValues = document.querySelectorAll('.metric-val');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        metricValues.forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      }
    });
  }, { threshold: 0.2 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
