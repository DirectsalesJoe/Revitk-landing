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
             <h2 className="text-3xl md:text-4xl font-bold mb-6">
                This Is The Same System That Took Vohkus From £40M to £100M
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
                (And 300+ Founders to £185M+)
            </p>
            <div className="text-lg text-gray-800 leading-relaxed mb-8 text-left max-w-3xl mx-auto">
                <p className="mb-4">We didn't hire "sales superstars." We took graduates with zero experience. We gave them a system.</p>
                <p className="mb-6">Those graduates hit <strong>£1.2M a month</strong> in less than a year.</p>
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-brand-dark border-l-4 border-brand-accent pl-6 py-4 bg-white inline-block text-left shadow-sm">
                "75% of sales is the system. Less than 25% is the person."
            </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoCard 
                mediaId="wpge7ym6pc"
                headline="Jordan (£50M Agency) Chose Us To Coach Hundreds of Founders"
                description="Jordan, CEO of FE Growth Partner, chose Joe because of his experience building businesses—not just teaching sales."
            />
             <VideoCard 
                mediaId="h4akkgj8si"
                headline="Vohkus Scaled From £0-£1.2M Monthly"
                description="Steve Williams rolled out Joe's system to graduates. New team hit £1.2M monthly, including a £1M+ deal with oil and gas."
            />
             <VideoCard 
                mediaId="iyot7g3u08"
                headline="Matej Closed Over £500K"
                description="Increased close rate and prices sixfold. Calls it 'the founder's way of doing sales'."
            />
             <VideoCard 
                mediaId="iu0mwb1pri"
                headline="Steve Closed £100K In New Business"
                description="Landed £50K in profit from four new clients, pipeline now past £100K."
            />
        </div>
        
        {/* Brooks video is vertical, handle separately */}
        <div className="mt-8 max-w-lg mx-auto">
             <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="aspect-[9/16] bg-gray-900 rounded-md overflow-hidden mb-6">
                    {/* @ts-ignore */}
                    <wistia-player media-id="38848fuss2" aspect="0.5625"></wistia-player>
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-4 leading-tight">Why A Top 1% Sales Veteran Hired Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Brooks Van Norman, 25-year B2B veteran, learned 'million pound questions' he uses daily.</p>
            </div>
        </div>

      </div>
    </section>
  );
};
