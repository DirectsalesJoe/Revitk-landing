import React from 'react';
import { Card, PLAYER_COLOR, Section, T } from '@/components/brand/ui';

/* The proof page, word for word from components/legacy/SocialProof.tsx, in
 * the Sync Selling look. Two changes Joe asked for on 12 Nov 2026: Brooks's
 * video is landscape now and sits in the grid, and Luke at Swiftbrick joins
 * at the end. */

const VideoCard: React.FC<{
    mediaId: string;
    headline: string;
    description: string;
}> = ({ mediaId, headline, description }) => {
    return (
        <Card className="overflow-hidden flex flex-col">
            <div className="aspect-video bg-black">
                 {/* @ts-ignore - Custom Element */}
                <wistia-player media-id={mediaId} aspect="1.7777777777777777" player-color={PLAYER_COLOR}></wistia-player>
            </div>
            <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-[22px] font-extrabold tracking-[-0.015em] leading-tight text-ss-ink mb-3">{headline}</h3>
                <p className="text-[15px] text-ss-muted-paper leading-relaxed">{description}</p>
            </div>
        </Card>
    )
}

export const ProofSection: React.FC = () => {
  return (
    <Section first className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-16 max-w-4xl mx-auto">
             <h2 className={`${T.h1Page} mb-6`}>
                Will Sync Selling Work For My Business?
            </h2>
            <p className="text-lg md:text-xl font-semibold text-ss-proof mb-8">
                300+ founders. 60 industries. £185M+ in revenue generated.
            </p>
            <div className={`${T.body} mb-10 text-left max-w-3xl mx-auto`}>
                <p className="mb-4">We have worked with businesses at every stage — from solo founders closing their first £3K deal to teams scaling past £10M.</p>
                <p className="mb-6">The system works because it covers everything you see, say, send, or show your prospect.</p>
            </div>
            <blockquote className="text-2xl md:text-3xl leading-[1.2] font-extrabold tracking-[-0.02em] text-white border-l-4 border-ss-yellow pl-6 py-2 inline-block text-left max-w-3xl">
                "You don't need to be a killer salesperson if you have a killer process."
            </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
             <VideoCard
                mediaId="38848fuss2"
                headline="Why A Top 1% Sales Veteran Hired Us"
                description="Brooks Van Norman, 25-year B2B veteran, learned 'million pound questions' he uses daily."
            />
             <VideoCard
                mediaId="la5vjca3pm"
                headline="Luke Won A £50K Job The Day After His Workshop"
                description="Luke Regan runs Swiftbrick, a builder in Swindon. He closed his biggest job ever before we'd even finished onboarding him."
            />
        </div>

      </div>
    </Section>
  );
};
