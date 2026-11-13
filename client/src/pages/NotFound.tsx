import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import { BUTTON, Card } from "@/components/brand/ui";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-ss-ink px-4 py-16">
      <Card className="w-full max-w-lg">
        <div className="px-6 pt-10 pb-10 md:px-10 text-center">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-14 w-14 text-ss-biro" strokeWidth={1.75} />
          </div>

          <h1 className="text-5xl font-black tracking-[-0.03em] text-ss-ink mb-2">404</h1>

          <h2 className="text-xl font-extrabold tracking-[-0.015em] text-ss-ink mb-4">
            Page Not Found
          </h2>

          <p className="text-base text-ss-muted-paper mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleGoHome}
              className={BUTTON}
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
