import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Shield,
  Building,
  Mail,
  User,
  MessageSquare,
  AlertCircle,
  Copy,
  Check,
  Lock,
  ExternalLink
} from 'lucide-react';

interface ContactFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  teamSize: string;
  deploymentMode: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  companyName?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    teamSize: '21-100',
    deploymentMode: 'private-vpc',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@viezai.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Please provide your business email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please enter a valid email address.';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Please enter your company name.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-900 bg-[#020202] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-emerald-950/15 blur-3xl rounded-full"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Stealth Team Presence & Direct Email */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                Stealth Systems Group
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                Connect with the Core Engineering Team.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
                Operating in stealth mode. We partner with select enterprise design partners, 
                high-growth tech companies, and technical leaders who require deterministic,
                sandboxed AI agent orchestration.
              </p>
            </div>

            {/* Direct Email Card (Primary Contact Channel) */}
            <div className="rounded-2xl border border-neutral-800 bg-[#070707] p-6 relative overflow-hidden shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                      Official Contact Channel
                    </span>
                    <h3 className="text-sm font-semibold text-white">Direct Technical Line</h3>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Big Email Display */}
              <div className="bg-black border border-neutral-850 rounded-xl p-4 flex items-center justify-between gap-3 mb-4">
                <div className="font-mono text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2 select-all">
                  <span className="text-emerald-400">support</span>
                  <span className="text-neutral-500">@</span>
                  <span className="text-white">viezai.com</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-750 px-3 py-1.5 text-xs font-mono text-neutral-300 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Mailto Button */}
              <a
                href="mailto:support@viezai.com?subject=ViezAI%20Architecture%20Inquiry"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-xs font-mono text-neutral-200 py-2.5 transition-all mb-4"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Launch Email Client (mailto)</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>

              <div className="space-y-2 text-xs text-neutral-400 border-t border-neutral-900 pt-3">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Strict NDA adherence. Confidential architectural reviews.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Direct response from lead platform engineers within 24h.</span>
                </div>
              </div>
            </div>

            {/* Confidential Team Statement */}
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-900 text-xs text-neutral-500 font-mono leading-relaxed">
              <span className="text-neutral-400 font-semibold">// Stealth Note: </span>
              We do not publish individual team identities. Inquiries are triaged directly by our core systems group via <strong className="text-neutral-300">support@viezai.com</strong>.
            </div>
          </div>

          {/* Right Column: Architectural Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-800 bg-[#080808] p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-800 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Transmission Received</h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your technical scope has been encrypted and dispatched to the platform leads. We will respond directly to <strong className="text-white">{formData.workEmail}</strong> within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          workEmail: '',
                          companyName: '',
                          teamSize: '21-100',
                          deploymentMode: 'private-vpc',
                          message: '',
                        });
                      }}
                      className="text-xs font-mono text-emerald-400 hover:text-emerald-300 underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-neutral-850 pb-4 mb-4">
                    <h3 className="text-lg font-semibold text-white">Architecture Consultation Request</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Share your target deployment mode, scale, or reach out directly to <strong className="text-emerald-400 font-mono">support@viezai.com</strong>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-neutral-500" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alex Thorne"
                        className={`w-full rounded-md bg-black px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 border ${
                          errors.fullName ? 'border-red-500' : 'border-neutral-800'
                        } focus:border-neutral-500 focus:outline-none`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-neutral-500" />
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full rounded-md bg-black px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 border ${
                          errors.workEmail ? 'border-red-500' : 'border-neutral-800'
                        } focus:border-neutral-500 focus:outline-none`}
                      />
                      {errors.workEmail && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.workEmail}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-neutral-500" />
                        Organization / Company *
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Acme Corp"
                        className={`w-full rounded-md bg-black px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 border ${
                          errors.companyName ? 'border-red-500' : 'border-neutral-800'
                        } focus:border-neutral-500 focus:outline-none`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    {/* Preferred Deployment Mode */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Target Harness Deployment
                      </label>
                      <select
                        value={formData.deploymentMode}
                        onChange={(e) => setFormData({ ...formData, deploymentMode: e.target.value })}
                        className="w-full rounded-md bg-black px-3.5 py-2.5 text-sm text-white border border-neutral-800 focus:border-neutral-500 focus:outline-none"
                      >
                        <option value="private-vpc">Dedicated Private Cloud VPC</option>
                        <option value="on-prem">Air-Gapped / On-Premises Host</option>
                        <option value="cluster-connect">Distributed Node Mesh (connect-runtime.sh)</option>
                        <option value="kanban-workspace">ViezAgent Kanban Workspace Deployment</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Technical Scope */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-neutral-500" />
                      Technical Scope & Objectives (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your target agent workflows, preferred Harness runtimes (Claude, Codex, DeepSeek), or custom MCP servers..."
                      className="w-full rounded-md bg-black px-3.5 py-2 text-sm text-white placeholder-neutral-600 border border-neutral-800 focus:border-neutral-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-white py-3 text-sm font-medium text-black transition-all hover:bg-neutral-200 active:scale-[0.98] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching to core leads...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Consultation Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-neutral-500 text-center font-mono pt-1">
                    Direct inquiries can also be routed to <a href="mailto:support@viezai.com" className="text-emerald-400 hover:underline">support@viezai.com</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
