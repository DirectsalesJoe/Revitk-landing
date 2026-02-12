import { TermsAndConditions } from '@/components/legacy/TermsAndConditions';
import { Header } from '@/components/legacy/Header';
import { Footer } from '@/components/legacy/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TermsAndConditions />
      <Footer />
    </div>
  );
}
