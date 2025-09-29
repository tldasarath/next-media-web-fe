import DigitalMarketing from '@/components/blogs/DigitalMarketing';
import EndToEndDigitalMarketing from '@/components/blogs/EndToEndDigitalMarketing';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import PrivacyPolicy from '@/components/PrivacyPolicySection/PrivacySection';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import React from 'react';

export const metadata = {
  title: 'EndToEndDigitalMarketing | Next Media',
  description:
    'Read Next Media’s Privacy Policy to understand how we collect, use, and protect your personal information.',
  keywords:
    'Next Media, Privacy Policy, Data Protection, User Privacy, Security',
  openGraph: {
    title: 'Privacy Policy | Next Media',
    description:
      'Read Next Media’s Privacy Policy to understand how we collect, use, and protect your personal information.',
    url: 'https://nextmedia.ae/privacy-policy',
    images: ['/images/og-privacy.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Next Media',
    description:
      'Read Next Media’s Privacy Policy to understand how we collect, use, and protect your personal information.',
    images: ['/images/og-privacy.png'],
  },
};
const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="py-36">
        <EndToEndDigitalMarketing />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PrivacyPolicyPage;
