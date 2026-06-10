import { SocialProof } from '@/components/legacy/SocialProof';
import { NavBar, Footer } from '@/components/NavBar';

export default function Proof() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <SocialProof />
      <Footer />
    </div>
  );
}
