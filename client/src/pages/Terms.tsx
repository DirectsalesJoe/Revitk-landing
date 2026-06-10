import { TermsAndConditions } from '@/components/legacy/TermsAndConditions';
import { NavBar, Footer } from '@/components/NavBar';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
}
