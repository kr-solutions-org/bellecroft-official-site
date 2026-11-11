import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    id: 'terms-of-use',
    title: 'Terms of Use',
    content: [
      'Welcome to the Bellecroft Advisory website. By accessing or using this website, you agree to be bound by these Terms & Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use this website.',
      'Bellecroft Pvt Ltd ("Bellecroft", "we", "us", or "our") reserves the right to modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of the updated terms.',
      'This website is intended for informational purposes only. The content provided does not constitute professional advice, and you should not rely solely on it for making business or organisational decisions. For tailored guidance, please contact our team directly.',
      'You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else\'s use and enjoyment of the website.',
    ],
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    content: [
      'Bellecroft Advisory is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our website and services.',
    ],
    subsections: [
      {
        title: 'Information We Collect',
        content: [
          'We may collect personal information that you voluntarily provide to us, including but not limited to:',
          '• Your name, email address, company name, and phone number when you submit an inquiry through our contact form.',
          '• Your email address when you subscribe to our newsletter.',
          '• Any additional information you choose to include in your inquiry or correspondence with us.',
          'We may also automatically collect certain technical data, such as your IP address, browser type, device information, and pages visited, to improve our website performance and user experience.',
        ],
      },
      {
        title: 'How We Use Your Information',
        content: [
          'We use the information we collect for the following purposes:',
          '• To respond to your inquiries and provide the services you have requested.',
          '• To send you marketing communications, newsletters, and updates about our services, where you have consented to receive them.',
          '• To improve our website, services, and user experience.',
          '• To comply with legal obligations and protect our legitimate interests.',
        ],
      },
      {
        title: 'Data Sharing',
        content: [
          'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except where necessary to:',
          '• Comply with applicable laws, regulations, or legal proceedings.',
          '• Protect the rights, property, or safety of Bellecroft, our clients, or others.',
          '• Engage trusted service providers who assist us in operating our website or conducting our business, subject to confidentiality obligations.',
        ],
      },
      {
        title: 'Data Retention',
        content: [
          'We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. When your data is no longer needed, it will be securely deleted or anonymised.',
        ],
      },
      {
        title: 'Your Rights',
        content: [
          'You have the right to:',
          '• Access the personal information we hold about you.',
          '• Request correction of inaccurate or incomplete data.',
          '• Request deletion of your personal data, subject to legal obligations.',
          '• Withdraw your consent to marketing communications at any time.',
          '• Lodge a complaint with a relevant data protection authority.',
          'To exercise any of these rights, please contact us at connect@bellecroft.com.',
        ],
      },
    ],
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    content: [
      'Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us understand how you interact with our website.',
      'We may use the following types of cookies:',
      '• Essential Cookies: Necessary for the website to function properly. These cannot be disabled.',
      '• Analytics Cookies: Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      '• Marketing Cookies: Used to track visitors across websites to display relevant advertisements.',
      'You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.',
    ],
  },
  {
    id: 'gdpr-compliance',
    title: 'GDPR Compliance',
    content: [
      'Bellecroft Advisory is committed to compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We process personal data lawfully, fairly, and transparently.',
      'Where we process data of individuals within the European Economic Area (EEA), we ensure that:',
      '• Data is collected for specified, explicit, and legitimate purposes.',
      '• Data processing is limited to what is necessary for the purposes for which it is collected.',
      '• Appropriate technical and organisational measures are in place to protect personal data against unauthorised access, loss, or destruction.',
      '• Data subjects can exercise their rights as outlined in our Privacy Policy above.',
      'All data transmitted through our website is protected using SSL (Secure Sockets Layer) encryption to ensure the security and integrity of your information during transmission.',
    ],
  },
  {
    id: 'newsletter-subscription',
    title: 'Newsletter & Marketing Communications',
    content: [
      'By subscribing to our newsletter, you agree to receive marketing communications from Bellecroft Advisory, including updates on leadership, governance, professional development, and organisational growth.',
      'You can unsubscribe from our marketing communications at any time by clicking the unsubscribe link included in each email or by contacting us at connect@bellecroft.com.',
      'We respect your privacy and will never share your email address or subscription information with third parties for their own marketing purposes.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: [
      'All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Bellecroft Pvt Ltd or its content suppliers and is protected by international copyright and intellectual property laws.',
      'You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent, except for your personal, non-commercial use.',
      'The Bellecroft name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Bellecroft Pvt Ltd. You must not use such marks without our prior written permission.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content: [
      'The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up to date, Bellecroft makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.',
      'To the fullest extent permitted by law, Bellecroft shall not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising out of or in connection with the use of this website.',
      'This website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective content or privacy policies.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: [
      'These Terms & Conditions shall be governed by and construed in accordance with the laws of the Republic of Maldives. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts of the Republic of Maldives.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      'If you have any questions about these Terms & Conditions and Policies, or wish to exercise your data protection rights, please contact us:',
      'Bellecroft Pvt Ltd',
      'Malé, Republic of Maldives',
      'Email: connect@bellecroft.com',
    ],
  },
];

const TermsAndPoliciesPage: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="snap-start snap-always w-full shrink-0 bg-white">
        <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-28 pb-12 px-6 md:px-16 lg:px-28">
          {/* Faint Background Text */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 flex flex-col gap-0 leading-[0.8] opacity-[0.03]">
            <span className="text-[18vw] font-black text-gray-900 uppercase tracking-tighter">BELLECROFT</span>
          </div>

          <div className="relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-[4rem] font-black tracking-tight leading-[1.1] mb-6">
              <span className="text-[#2B2A2A]">Terms, Conditions & Policies</span><br />
            </h1>
            <p className="text-gray-500 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Please review the following terms, conditions, and policies that govern your use of the Bellecroft Advisory website and services.
            </p>
            <p className="text-gray-400 text-sm font-medium mt-4">
              Last updated: October 2026
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="relative z-10 mt-12 w-full max-w-3xl">
            <div className="bg-[#fafafa] rounded-lg p-6 md:p-8">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-[#2B2A2A] text-sm md:text-[15px] font-semibold hover:text-[#E6A2A9] transition-colors py-1.5 flex items-center gap-2"
                  >
                    <span className="text-[#E6A2A9] text-xs">●</span>
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </section>
      </div>

      {/* Content Sections */}
      <div className="snap-start snap-always w-full shrink-0">
        <section className="w-full bg-white px-6 md:px-16 lg:px-28 pb-20">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className={`py-10 ${index < sections.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-[#E6A2A9] rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#2B2A2A] tracking-tight">
                    {section.title}
                  </h2>
                </div>

                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-gray-600 text-[15px] md:text-base leading-relaxed font-medium ${
                      pIndex < section.content.length - 1 || section.subsections ? 'mb-4' : ''
                    } ${paragraph.startsWith('•') ? 'pl-4' : ''} ${
                      ['Bellecroft Pvt Ltd', 'Malé, Republic of Maldives'].includes(paragraph)
                        ? 'font-semibold text-[#2B2A2A]'
                        : ''
                    }`}
                  >
                    {paragraph.startsWith('Email:') ? (
                      <>
                        Email:{' '}
                        <a
                          href="mailto:connect@bellecroft.com"
                          className="text-[#E6A2A9] hover:text-[#c9878a] transition-colors font-semibold"
                        >
                          connect@bellecroft.com
                        </a>
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}

                {/* Subsections */}
                {section.subsections?.map((sub, sIndex) => (
                  <div key={sIndex} className="mt-6">
                    <h3 className="text-lg md:text-xl font-bold text-[#2B2A2A] mb-3 tracking-tight">
                      {sub.title}
                    </h3>
                    {sub.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={`text-gray-600 text-[15px] md:text-base leading-relaxed font-medium ${
                          pIndex < sub.content.length - 1 ? 'mb-3' : ''
                        } ${paragraph.startsWith('•') ? 'pl-4' : ''}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* Back to top */}
            <div className="text-center pt-8 pb-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E6A2A9] hover:text-[#c9878a] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[data-scroll-container]')?.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5"></path>
                  <path d="M5 12l7-7 7 7"></path>
                </svg>
                Back to top
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="snap-start snap-always w-full shrink-0">
        <Footer />
      </div>
    </>
  );
};

export default TermsAndPoliciesPage;
