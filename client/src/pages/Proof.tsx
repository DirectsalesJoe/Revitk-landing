import { ProofSection } from '@/components/brand/ProofSection';
import { NavBar, Footer } from '@/components/NavBar';

export default function Proof() {
  return (
    <div className="min-h-screen bg-ss-ink">
      <NavBar />
      <ProofSection />
      <Footer />
    </div>
  );
}
