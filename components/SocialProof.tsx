import React from 'react';

const VideoCard: React.FC<{
    mediaId: string;
    headline: string;
    description: string;
}> = ({ mediaId, headline, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="aspect-video bg-gray-900 rounded-md overflow-hidden mb-6">
                 {/* @ts-ignore - Custom Element */}
                <wistia-player media-id={mediaId} aspect="1.7777777777777777"></wistia-player>
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-4 leading-tight">{headline}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    )
}

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold mb-6">
                This Is The Same System That Took Vohkus From £40M to £100M<br/> (And 300+ Founders to £185M+)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We didn't hire "sales superstars." We took graduates with zero experience.
                We gave them a system. And those graduates generated <strong>£1.2M a month in revenue in less than a year.</strong>
            </p>
            <blockquote className="text-2xl font-bold text-brand-dark italic border-l-4 border-brand-accent pl-6 py-2 bg-white inline-block text-left shadow-sm">
                "75% of sales effectiveness is the system. Less than 25% is the skill of the person."
            </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoCard 
                mediaId="wpge7ym6pc"
                headline="How Jordan (Agency Founder) Chose Us To Coach Hundreds Of Founders"
                description="Jordan, CEO of FE Growth Partner (£50M business), chose Joe to coach hundreds of founders. He values Joe's experience as someone who has built a business, not just taught sales."
            />
             <VideoCard 
                mediaId="h4akkgj8si"
                headline="How Vohkus Scaled Sales Team From £0-£1.2M A Month"
                description="Steve Williams, Sales Director, implemented Joe's sales academy for graduates. The new team generated £1.2M a month, including a £1M+ deal with an oil and gas company."
            />
             <VideoCard 
                mediaId="iyot7g3u08"
                headline="Matej Closed Over £500K In Deals We Coached Him On"
                description="Matej increased his close rate and increased his prices sixfold. He describes Joe's process as the 'founder's way of conducting sales'."
            />
             <VideoCard 
                mediaId="iu0mwb1pri"
                headline="Steve (Agency Owner) Closed £100K In New Business"
                description="Steve White, MD at Red C Marketing, secured £50,000 in pure profit from four new clients, with a pipeline projected to exceed £100,000."
            />
        </div>
        
        {/* Brooks video is vertical, handle separately or in grid if styled */}
        <div className="mt-8 max-w-lg mx-auto">
             <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="aspect-[9/16] bg-gray-900 rounded-md overflow-hidden mb-6">
                    {/* @ts-ignore */}
                    <wistia-player media-id="38848fuss2" aspect="0.5625"></wistia-player>
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-4 leading-tight">Why A Top 1% Sales Veteran Hired Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Brooks Van Norman, a 25-year B2B sales veteran, hired Joe and learned 'million dollar questions' that he now uses regularly.</p>
            </div>
        </div>

      </div>
    </section>
  );
};
