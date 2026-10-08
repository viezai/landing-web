import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-black/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-700/80 group-hover:border-neutral-500 transition-colors">
            {/* OpenAI inspired geometric symbol */}
            <div className="w-3.5 h-3.5 border-2 border-white rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90">
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
            </div>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1.5">
            Viez<span className="text-neutral-400 font-normal">AI</span>
            <span className="text-[10px] font-mono tracking-normal uppercase px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-emerald-400 ml-1">
              v2.4
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/viezai"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-neutral-400 hover:text-neutral-200 px-3 py-1.5 rounded-md border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center gap-1.5"
          >
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            GitHub
          </a>

          <button
            onClick={onOpenDemoModal}
            className="group relative inline-flex items-center gap-2 rounded-md bg-white px-3.5 py-1.5 text-xs font-medium text-black transition-all hover:bg-neutral-200 active:scale-[0.98]"
          >
            <span>Book a Demo</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#080808] px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-neutral-300 hover:text-white py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-md bg-white py-2 text-sm font-medium text-black hover:bg-neutral-200"
            >
              <span>Book an Enterprise Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 pt-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>SOC2 Type II & Private VPC Ready</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
