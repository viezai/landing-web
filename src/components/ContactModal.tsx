import React, { useState } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [useCase, setUseCase] = useState('harness-runtimes');
  const [errors, setErrors] = useState<{ fullName?: string; workEmail?: string; companyName?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('support@viezai.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl border border-neutral-800 bg-[#070707] p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 rounded-md p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Transmission Acknowledged</h3>
            <p className="text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
              We received your request. An architect from the ViezAI systems group will reach out directly from <strong className="text-emerald-400 font-mono">support@viezai.com</strong> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="rounded-md bg-white px-5 py-2 text-xs font-semibold text-black hover:bg-neutral-200"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                Stealth Architecture Intake
              </div>
              <h3 className="text-xl font-semibold text-white">
                Request Platform Access
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Direct inquiry line to the core engineering group.
              </p>

              {/* Direct email quick badge */}
              <div className="mt-3 p-2.5 rounded-lg bg-black border border-neutral-850 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Direct mail:</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  <span>support@viezai.com</span>
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-neutral-500" />}
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className={`w-full rounded-md bg-black px-3 py-2 text-sm text-white placeholder-neutral-600 border ${
                    errors.fullName ? 'border-red-500' : 'border-neutral-800'
                  } focus:border-neutral-500 focus:outline-none`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="name@company.com"
                  className={`w-full rounded-md bg-black px-3 py-2 text-sm text-white placeholder-neutral-600 border ${
                    errors.workEmail ? 'border-red-500' : 'border-neutral-800'
                  } focus:border-neutral-500 focus:outline-none`}
                />
                {errors.workEmail && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.workEmail}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company Name"
                  className={`w-full rounded-md bg-black px-3 py-2 text-sm text-white placeholder-neutral-600 border ${
                    errors.companyName ? 'border-red-500' : 'border-neutral-800'
                  } focus:border-neutral-500 focus:outline-none`}
                />
                {errors.companyName && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Primary Interest
                </label>
                <select
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="w-full rounded-md bg-black px-3 py-2 text-sm text-white border border-neutral-800 focus:border-neutral-500 focus:outline-none"
                >
                  <option value="harness-runtimes">Harness Runtimes (Claude, Codex, DeepSeek)</option>
                  <option value="viezagent-hub">ViezAgent Platform Hub & OpenAI Facade</option>
                  <option value="kanban-workspace">ViezAgent Kanban & A2A Workspace</option>
                  <option value="byo-mcp">Bring-Your-Own MCP Security Sandboxing</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-white py-2.5 text-xs font-semibold text-black hover:bg-neutral-200 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Dispatching...</span>
                  ) : (
                    <>
                      <span>Submit Architecture Access Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-neutral-500 text-center font-mono">
                Encrypted channel. Strict enterprise confidentiality.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
