import { Header } from '@/components/legacy/Header';
import { SocialProof } from '@/components/legacy/SocialProof';
import { Footer } from '@/components/legacy/Footer';

export default function Proof() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SocialProof />
      <Footer />
    </div>
  );
}
