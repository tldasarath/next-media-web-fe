import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import PrivacyPolicy from '@/components/PrivacyPolicySection/PrivacySection';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import TermsAndConditions from '@/components/Terms/Terms&Conditions';
import React from 'react';
export const metadata = {
  title: 'Terms & Conditions | Next Media',
  description:
    'Review the Terms & Conditions of Next Media to understand the rules, responsibilities, and guidelines for using our services.',
  keywords: 'Next Media, Terms and Conditions, User Agreement, Legal, Policies',
  openGraph: {
    title: 'Terms & Conditions | Next Media',
    description:
      'Review the Terms & Conditions of Next Media to understand the rules, responsibilities, and guidelines for using our services.',
    url: 'https://nextmedia.ae/terms',
    images: ['/images/og-terms.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Next Media',
    description:
      'Review the Terms & Conditions of Next Media to understand the rules, responsibilities, and guidelines for using our services.',
    images: ['/images/og-terms.png'],
  },
};
const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="py-36">
        <TermsAndConditions />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PrivacyPolicyPage;
