import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
            >
                <span className="text-lg md:text-xl font-bold text-brand-dark pr-8">{question}</span>
                {isOpen ? <ChevronUp className="flex-shrink-0 text-brand-accent"/> : <ChevronDown className="flex-shrink-0 text-gray-400"/>}
            </button>
            {isOpen && (
                <div className="pb-8 text-gray-700 leading-relaxed text-lg">
                    {answer}
                </div>
            )}
        </div>
    )
}

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">I Still Have Some Questions...</h2>
      
      <div className="space-y-2">
        <FAQItem 
            question="I've Tried Sales Training Before. It Didn't Work. How Is This Different?"
            answer={
                <>
                    <p className="mb-4">Most sales training fails because it teaches you what to do, but doesn't do it FOR you. You don't have 100+ hours to implement it.</p>
                    <p className="mb-4 font-bold">This is different. We build it FOR you.</p>
                    <p>Discovery framework? We write the questions. Demo script? We script it word-for-word. CRM workflow? We install it. You don't implement it. We do.</p>
                </>
            }
        />
        <FAQItem 
            question="My Industry Is Super Niche—How Can I Be Sure This Will Work?"
            answer={
                <>
                    <p className="mb-4">The tactics for selling to construction are different from software, but the core principles of trust, diagnosis, and value are universal.</p>
                    <p>We custom-fit our universal framework to your specific industry, offer, and sales cycle. The principles scale. The tactics adapt.</p>
                </>
            }
        />
        <FAQItem 
            question="What If I Hire a Salesperson After This? Will They Be Able to Use the System?"
            answer={
                <>
                    <p className="mb-4">That's the entire point. The system is designed to be delegatable.</p>
                    <p>When you hire your next salesperson, you hand them the playbook and say: "Follow this." And they do. Because now there's something TO follow.</p>
                </>
            }
        />
        <FAQItem 
            question="I'm Worried I'll Invest £6K and Nothing Will Change"
            answer={
                <>
                    <p className="mb-4">That's why we built the £1 trial. You get Week 1—the full GTM Diagnostic—before you commit to anything.</p>
                    <p className="mb-4">If at the end of Week 1 you think: "This isn't for me," you walk away. One click. No charge.</p>
                    <p className="font-bold">You literally cannot lose.</p>
                </>
            }
        />
        <FAQItem 
            question="What Is The Time Commitment?"
            answer={
                <>
                    <p className="mb-4">You're not expected to spend 20 hours a week on this. You show up to the calls (2x per week). We build the system. You implement what we hand you.</p>
                    <p>That's it.</p>
                </>
            }
        />
      </div>
      
      <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center border border-gray-200">
        <h3 className="font-bold text-xl mb-4">Optional Ongoing Support</h3>
        <p>After the 8-week programme, you can continue with a <strong>£400/month retainer</strong> for ongoing support, CRM access, and updates.</p>
      </div>
    </section>
  );
};
