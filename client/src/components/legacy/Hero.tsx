import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-20 max-w-4xl mx-auto px-6 text-center">
      <h1 className="text-3xl md:text-5xl lg:text-[60px] font-extrabold leading-[1.2] text-brand-dark mb-6">
        ClosTransform Your Sales Performance in 7 Days. <span class="underline decoration-brand-accent decoration-4 underline-offset-4">Risk Free.</span>
      </h1>
      
      <p className="text-xl md:text-2xl font-bold text-gray-700 mb-12">
        ...and don't pay me more than £1 until you get results
      </p>

      <div className="text-left max-w-3xl mx-auto space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed text-gray-800">
        <p className="font-bold text-2xl md:text-3xl">The deal is coming.</p>
        
        <p>
          You just had a brilliant conversation. The demo went perfectly.
        </p>
        
        <p>
          Your champion says: <em>"This looks great. Exactly what we need. Let me get sign-off and we'll move forward."</em>
        </p>

        <p>
          You put the phone down thinking: <em>Finally. This one's in the bag.</em>
        </p>

        <p>
          Or your rep comes off the call and says: <em>"Brilliant demo. They loved it. Put it in the forecast—should close this month."</em>
        </p>

        <p>
          You look at the pipeline. £250K. All looking good.
        </p>

        <p>
          You breathe a sigh of relief. <em>This quarter's going to hit target.</em>
        </p>

        <div className="py-12 text-center">
          <p className="text-2xl md:text-4xl font-bold text-brand-dark">
            Then... nothing.
          </p>
        </div>
      </div>
    </section>
  );
};
