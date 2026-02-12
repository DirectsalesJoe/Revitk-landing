import { PrivacyPolicy } from '@/components/legacy/PrivacyPolicy';
import { Header } from '@/components/legacy/Header';
import { Footer } from '@/components/legacy/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
