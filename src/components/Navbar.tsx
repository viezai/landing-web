import React, { useState } from 'react';
import { Menu, X, Mail, Sparkles, Copy, Check } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const navLinks = [
    { label: 'Harness Engine', href: '#harness' },
    { label: 'Ecosystem Apps', href: '#ecosystem' },
    { label: 'Kanban Workspace', href: '#kanban' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('support@viezai.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-black/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-neutral-600 transition-colors">
            {/* Geometric diamond logo with emerald core */}
            <div className="w-3.5 h-3.5 border-2 border-neutral-200 rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90">
              <div className="w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]" />
            </div>
          </div>
          <span className="text-base font-semibold tracking-tight text-white flex items-center gap-1.5">
            Viez<span className="text-neutral-400 font-normal">AI</span>
            <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-emerald-400">
              Harness Core
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-wide uppercase font-mono text-neutral-400 hover:text-white transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Copy / Email Direct Link */}
          <button
            onClick={handleCopyEmail}
            title="Click to copy official contact email"
            className="group flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950/80 px-3 py-1.5 text-xs font-mono text-neutral-400 hover:border-neutral-700 hover:text-neutral-200 transition-all active:scale-[0.98]"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>support@viezai.com</span>
            {copied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400" />
            )}
          </button>

          <button
            onClick={onOpenDemoModal}
            className="flex items-center gap-2 rounded-md bg-white px-3.5 py-1.5 text-xs font-medium text-black transition-all hover:bg-neutral-200 active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Request Access</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white"
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-800 bg-black/95 px-4 pt-3 pb-5 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-mono text-neutral-400 hover:bg-neutral-900 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-neutral-900 flex flex-col gap-2">
            <a
              href="mailto:support@viezai.com"
              className="flex items-center justify-center gap-2 rounded-md border border-neutral-850 bg-neutral-950 py-2.5 text-xs font-mono text-neutral-300"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>support@viezai.com</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-md bg-white py-2 text-xs font-medium text-black"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Architecture Access</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
