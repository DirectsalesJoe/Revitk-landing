import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemAgitation } from './components/ProblemAgitation';
import { SystemFailures } from './components/SystemFailures';
import { SyncSolution } from './components/SyncSolution';
import { SocialProof } from './components/SocialProof';
import { Week1Value } from './components/Week1Value';
import { ValueStack } from './components/ValueStack';
import { FoundingMembers } from './components/FoundingMembers';
import { FAQ } from './components/FAQ';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemAgitation />
      <SystemFailures />
      <SyncSolution />
      <SocialProof />
      <Week1Value />
      <ValueStack />
      <FoundingMembers />
      <FAQ />
      <BookingSection />
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
