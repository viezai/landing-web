import React, { useState } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Mail,
  User,
  ShieldCheck
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [useCase, setUseCase] = useState('autonomous-coding');
  const [errors, setErrors] = useState<{ fullName?: string; workEmail?: string; companyName?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: typeof errors = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!workEmail.trim()) {
      errs.workEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) {
      errs.workEmail = 'Invalid email address';
    }
    if (!companyName.trim()) errs.companyName = 'Company name is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">VIP Demo Scheduled</h3>
            <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
              We've dispatched an invitation to <span className="text-emerald-400 font-mono">{workEmail}</span>.
              A senior architect will host your interactive walkthrough.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 rounded-md bg-white text-black text-xs font-medium hover:bg-neutral-200"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 uppercase tracking-widest mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Enterprise Access
              </div>
              <h3 className="text-xl font-semibold text-white">Book an Architecture Demo</h3>
              <p className="text-xs text-neutral-400 mt-1">
                See ViezAI multi-agent swarms running live against complex codebases.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-neutral-500" />
                  Your Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="Alex Mercer"
                  className={`w-full rounded-md bg-black px-3 py-2 text-sm text-white placeholder-neutral-600 border ${
                    errors.fullName ? 'border-red-500' : 'border-neutral-800'
                  } focus:outline-none focus:border-neutral-500`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  Work Email
                </label>
                <input
                  type="email"
                  value={workEmail}
                  onChange={(e) => {
                    setWorkEmail(e.target.value);
                    if (errors.workEmail) setErrors({ ...errors, workEmail: undefined });
                  }}
                  placeholder="alex@enterprise.com"
                  className={`w-full rounded-md bg-black px-3 py-2 text-sm text-white placeholder-neutral-600 border ${
                    errors.workEmail ? 'border-red-500' : 'border-neutral-800'
                  } focus:outline-none focus:border-neutral-500`}
                />
                {errors.workEmail && (
                  <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.workEmail}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-neutral-500" />
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    if (errors.companyName) setErrors({ ...errors, companyName: undefined });
                  }}
                  placeholder="Global Tech Corp"
                  className={`w-full rounded-md bg-black px-3 py-2 text-sm text-white placeholder-neutral-600 border ${
                    errors.companyName ? 'border-red-500' : 'border-neutral-800'
                  } focus:outline-none focus:border-neutral-500`}
                />
                {errors.companyName && (
                  <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Primary Initiative
                </label>
                <select
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="w-full rounded-md bg-black px-3 py-2 text-sm text-white border border-neutral-800 focus:outline-none focus:border-neutral-500"
                >
                  <option value="autonomous-coding">Autonomous Software Engineering & PRs</option>
                  <option value="security-audit">Automated Security & Compliance Audits</option>
                  <option value="data-pipeline">Data Engineering & Schema Migrations</option>
                  <option value="custom-agentic">Custom Multi-Agent Swarm Orchestration</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-white py-2.5 text-sm font-medium text-black hover:bg-neutral-200 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Allocating Architect...</span>
                  ) : (
                    <>
                      <span>Confirm Session</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
