import { Header } from '@/components/legacy/Header';
import { Hero } from '@/components/legacy/Hero';
import { ProblemAgitation } from '@/components/legacy/ProblemAgitation';
import { SystemFailures } from '@/components/legacy/SystemFailures';
import { SyncSolution } from '@/components/legacy/SyncSolution';
import { SocialProof } from '@/components/legacy/SocialProof';
import { Week1Value } from '@/components/legacy/Week1Value';
import { ValueStack } from '@/components/legacy/ValueStack';
import { FoundingMembers } from '@/components/legacy/FoundingMembers';
import { FAQ } from '@/components/legacy/FAQ';
import { BookingSection } from '@/components/legacy/BookingSection';
import { Footer } from '@/components/legacy/Footer';

export default function OriginalHome() {
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
}
