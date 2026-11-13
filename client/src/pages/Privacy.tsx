import { Link } from "wouter";
import { NavBar, Footer } from "@/components/NavBar";
import { BUTTON, Card, Section, T } from "@/components/brand/ui";

/* ─── TABLE OF CONTENTS ─── */
const tocItems = [
  { id: "section1", label: "What Information Do We Collect?" },
  { id: "section2", label: "How Do We Process Your Information?" },
  { id: "section3", label: "When and With Whom Do We Share Your Personal Information?" },
  { id: "section4", label: "Do We Use Cookies and Other Tracking Technologies?" },
  { id: "section5", label: "How Do We Handle Your Social Logins?" },
  { id: "section6", label: "Is Your Information Transferred Internationally?" },
  { id: "section7", label: "How Long Do We Keep Your Information?" },
  { id: "section8", label: "Do We Collect Information From Minors?" },
  { id: "section9", label: "What Are Your Privacy Rights?" },
  { id: "section10", label: "Controls for Do-Not-Track Features" },
  { id: "section11", label: "Do We Make Updates to This Notice?" },
  { id: "section12", label: "How Can You Contact Us About This Notice?" },
  { id: "section13", label: "How Can You Review, Update, or Delete the Data We Collect From You?" },
];

/* A section heading inside the white sheet. */
const H2 = "text-2xl md:text-3xl leading-[1.15] font-extrabold tracking-[-0.02em] text-ss-ink text-balance";

/* ─── PRIVACY POLICY PAGE ─── */
export default function Privacy() {
  return (
    <div className="min-h-screen bg-ss-ink">
      <NavBar />

      {/* Hero / Title */}
      <Section first>
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-12 md:pt-20 text-center">
          <div className="w-12 h-1 bg-ss-yellow mx-auto mb-6" />
          <h1 className={`${T.h1Page} mb-4`}>
            Privacy Policy
          </h1>
          <p className="text-base text-ss-muted-ink">
            Last updated: February 2026
          </p>
        </div>
      </Section>

      {/* Content */}
      <section className="bg-ss-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
          <Card className="px-5 py-8 sm:px-8 md:px-12 md:py-12">

            {/* Intro */}
            <p className="text-lg text-ss-ink leading-relaxed mb-6">
              Privacy Policy for Revitk LTD ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
            </p>
            <p className="text-base text-ss-muted-paper leading-relaxed mb-12">
              Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services.
            </p>

            {/* Summary of Key Points */}
            <div className="mb-16">
              <h2 className={`${H2} mb-8`}>
                Summary of Key Points
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-8">
                This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
              </p>
              <div className="border border-ss-feint rounded-[4px] divide-y divide-ss-feint">
                {[
                  { q: "What personal information do we process?", a: "When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use." },
                  { q: "Do we process any sensitive personal information?", a: "We do not process sensitive personal information." },
                  { q: "Do we receive any information from third parties?", a: "We may receive information from public databases, marketing partners, social media platforms, and other outside sources." },
                  { q: "How do we process your information?", a: "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent." },
                  { q: "In what situations and with which parties do we share personal information?", a: "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties." },
                  { q: "What are your rights?", a: "Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information." },
                  { q: "How do you exercise your rights?", a: "The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws." },
                ].map((item, i) => (
                  <div key={i} className="px-5 py-5 md:px-6">
                    <h3 className="font-bold text-ss-ink text-base mb-2">
                      Question {i + 1}: {item.q}
                    </h3>
                    <p className="text-[15px] text-ss-muted-paper leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-16">
              <h2 className={`${H2} mb-6`}>
                Table of Contents
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-ss-muted-paper marker:font-semibold">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className={`${T.linkOnPaper} text-base`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Section 1 */}
            <section id="section1" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                1. What Information Do We Collect?
              </h2>
              <h3 className="font-bold text-ss-ink text-lg mb-3">Personal information you disclose to us</h3>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                <span className="font-semibold text-ss-ink">In Short:</span> We collect personal information that you provide to us.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                <span className="font-semibold text-ss-ink">Sensitive Information:</span> We do not process sensitive information.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-6">
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>
              <h3 className="font-bold text-ss-ink text-lg mb-3">Information automatically collected</h3>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                <span className="font-semibold text-ss-ink">In Short:</span> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                Like many businesses, we also collect information through cookies and similar technologies.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                2. How Do We Process Your Information?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                <span className="font-semibold text-ss-ink">In Short:</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                3. When and With Whom Do We Share Your Personal Information?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </section>

            {/* Section 4 */}
            <section id="section4" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                4. Do We Use Cookies and Other Tracking Technologies?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                <span className="font-semibold text-ss-ink">In Short:</span> We may use cookies and other tracking technologies to collect and store your information.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
              </p>
            </section>

            {/* Section 5 */}
            <section id="section5" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                5. How Do We Handle Your Social Logins?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                <span className="font-semibold text-ss-ink">In Short:</span> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider.
              </p>
            </section>

            {/* Section 6 */}
            <section id="section6" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                6. Is Your Information Transferred Internationally?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                <span className="font-semibold text-ss-ink">In Short:</span> We may transfer, store, and process your information in countries other than your own.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                Our servers are located in the United Kingdom. If you are accessing our Services from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities. If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.
              </p>
            </section>

            {/* Section 7 */}
            <section id="section7" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                7. How Long Do We Keep Your Information?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                <span className="font-semibold text-ss-ink">In Short:</span> We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </section>

            {/* Section 8 */}
            <section id="section8" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                8. Do We Collect Information From Minors?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                <span className="font-semibold text-ss-ink">In Short:</span> We do not knowingly collect data from or market to children under 18 years of age.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:joe@revitk.com" className={T.linkOnPaper}>joe@revitk.com</a>.
              </p>
            </section>

            {/* Section 9 */}
            <section id="section9" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                9. What Are Your Privacy Rights?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                <span className="font-semibold text-ss-ink">In Short:</span> You may review, change, or terminate your account at any time.
              </p>
              <h3 className="font-bold text-ss-ink text-lg mb-3 mt-6">Withdrawing your consent</h3>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
              </p>
              <h3 className="font-bold text-ss-ink text-lg mb-3 mt-6">Account Information</h3>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                If you would at any time like to review or change the information in your account or terminate your account, you can contact us using the details below.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section10" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                10. Controls for Do-Not-Track Features
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section11" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                11. Do We Make Updates to This Notice?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-4">
                <span className="font-semibold text-ss-ink">In Short:</span> Yes, we will update this notice as necessary to stay compliant with relevant laws.
              </p>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section12" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                12. How Can You Contact Us About This Notice?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed mb-6">
                If you have questions or comments about this notice, you may contact us by post at:
              </p>
              <div className="border border-ss-feint rounded-[4px] p-6 md:p-8">
                <p className="font-bold text-ss-ink text-base">Revitk LTD</p>
                <p className="text-ss-muted-paper text-base mt-2">Address: 107 Louth Road, Sheffield, S11 7AU</p>
                <p className="text-ss-muted-paper text-base mt-1">
                  Email: <a href="mailto:joe@revitk.com" className={T.linkOnPaper}>joe@revitk.com</a>
                </p>
                <p className="text-ss-muted-paper text-base mt-1">
                  Phone: <a href="tel:+447700138991" className={T.linkOnPaper}>+44 7700 138991</a>
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="section13" className="mb-16 scroll-mt-20">
              <h2 className={`${H2} mb-6`}>
                13. How Can You Review, Update, or Delete the Data We Collect From You?
              </h2>
              <p className="text-base text-ss-muted-paper leading-relaxed">
                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
              </p>
            </section>

            {/* Footer line */}
            <div className="mt-4 pt-8 border-t border-ss-feint text-center">
              <p className="text-sm text-ss-muted-paper">
                © {new Date().getFullYear()} Revitk LTD | All Rights Reserved | Company No. 15929263
              </p>
              <p className="text-sm text-ss-muted-paper/80 mt-2">
                Revitk Ltd, 107 Louth Road, Sheffield, S11 7AU
              </p>
            </div>

          </Card>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className={BUTTON}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
