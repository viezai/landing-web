import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HarnessShowcase } from './components/HarnessShowcase';
import { AppsShowcase } from './components/AppsShowcase';
import { AgentSimulator } from './components/AgentSimulator';
import { BentoGrid } from './components/BentoGrid';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Architecture } from './components/Architecture';
import { Metrics } from './components/Metrics';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleScrollToTerminal = () => {
    const el = document.getElementById('capabilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#ededed] font-sans selection:bg-neutral-800 selection:text-white flex flex-col">
      {/* Top Fixed Header */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenDemoModal={handleOpenDemoModal}
          onScrollToTerminal={handleScrollToTerminal}
        />
        <HarnessShowcase />
        <AppsShowcase />
        <AgentSimulator />
        <BentoGrid />
        <InteractiveTerminal />
        <Architecture />
        <Metrics />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dedicated Demo Booking Modal */}
      <ContactModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />
    </div>
  );
};

export default App;
