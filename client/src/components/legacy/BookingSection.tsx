import React from 'react';

export const BookingSection: React.FC = () => {
  return (
    <section id="booking" className="py-20 px-6 bg-brand-light">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-brand-dark">Book Your 30-Minute Qualification Call</h2>
        <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
             <iframe 
                src="https://app.revitk.com/widget/booking/BslymcW4TeyP90pbosaw" 
                style={{ width: '100%', border: 'none', minHeight: '700px' }} 
                title="Booking Calendar"
                scrolling="no"
                id="dzq3BQldGzXlm0HTRAew_1763720830921"
            ></iframe>
        </div>
        <script src="https://app.revitk.com/js/form_embed.js" type="text/javascript"></script>
      </div>
    </section>
  );
};
