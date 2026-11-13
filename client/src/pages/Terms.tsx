import { TermsSection } from '@/components/brand/TermsSection';
import { NavBar, Footer } from '@/components/NavBar';

export default function Terms() {
  return (
    <div className="min-h-screen bg-ss-ink">
      <NavBar />
      <TermsSection />
      <Footer />
    </div>
  );
}
