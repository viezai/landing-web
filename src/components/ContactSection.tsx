import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Shield,
  Building,
  Mail,
  User,
  MessageSquare,
  AlertCircle
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

    // Simulate reliable API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      teamSize: '21-100',
      deploymentMode: 'private-vpc',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-900 bg-black relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Context & Value Proposition */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Enterprise Consultation
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Ready to scale autonomous engineering?
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
              Schedule a dedicated architecture session with our AI Systems Engineering team.
              We'll discuss your security guardrails, private model requirements, and monorepo topology.
            </p>

            {/* Benefit Highlights */}
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-400 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Custom Threat Model Assessment</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Evaluate sandbox isolation, AST indexing limits, and automated DLP rules for your proprietary IP.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-400 shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Dedicated Solutions Architect</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Direct pairing with a Staff AI Engineer to build a proof-of-concept swarm for your stack.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 rounded-lg bg-neutral-950 border border-neutral-900 text-xs font-mono text-neutral-500">
              Response SLA: Enterprise inquiries receive reply within <span className="text-emerald-400 font-medium">2 business hours</span>.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="rounded-2xl border border-neutral-800 bg-[#080808] p-6 sm:p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>.
                  A Senior AI Solutions Architect has been assigned to <span className="text-white font-medium">{formData.companyName}</span> and will reach out via <span className="text-emerald-400 font-mono">{formData.workEmail}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-medium text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-neutral-500" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="Jane Doe"
                    className={`w-full rounded-md bg-black px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 border transition-colors focus:outline-none ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-neutral-800 focus:border-neutral-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-neutral-500" />
                      Work Email *
                    </label>
                    <input
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => {
                        setFormData({ ...formData, workEmail: e.target.value });
                        if (errors.workEmail) setErrors({ ...errors, workEmail: undefined });
                      }}
                      placeholder="jane@company.com"
                      className={`w-full rounded-md bg-black px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 border transition-colors focus:outline-none ${
                        errors.workEmail
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-neutral-800 focus:border-neutral-500'
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.workEmail}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-neutral-500" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => {
                        setFormData({ ...formData, companyName: e.target.value });
                        if (errors.companyName) setErrors({ ...errors, companyName: undefined });
                      }}
                      placeholder="Acme Corp"
                      className={`w-full rounded-md bg-black px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 border transition-colors focus:outline-none ${
                        errors.companyName
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-neutral-800 focus:border-neutral-500'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.companyName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Engineering Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full rounded-md bg-black px-3.5 py-2.5 text-sm text-white border border-neutral-800 focus:border-neutral-500 focus:outline-none"
                    >
                      <option value="1-20">1 - 20 engineers</option>
                      <option value="21-100">21 - 100 engineers</option>
                      <option value="101-500">101 - 500 engineers</option>
                      <option value="500+">500+ engineers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Preferred Deployment Mode
                    </label>
                    <select
                      value={formData.deploymentMode}
                      onChange={(e) => setFormData({ ...formData, deploymentMode: e.target.value })}
                      className="w-full rounded-md bg-black px-3.5 py-2.5 text-sm text-white border border-neutral-800 focus:border-neutral-500 focus:outline-none"
                    >
                      <option value="private-vpc">Dedicated Private VPC</option>
                      <option value="on-prem">Air-Gapped / On-Premises</option>
                      <option value="cloud-saas">Enterprise Cloud SaaS</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-neutral-500" />
                    Project Scope & Objectives (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current monorepo structure, languages, or AI agent objectives..."
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
                        <span>Validating and submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Architecture Consultation</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-neutral-500 text-center font-mono pt-1">
                  We respect NDA agreements. No customer code or prompt data is ever retained.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
