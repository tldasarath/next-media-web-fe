'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import {
  FileText,
  Gavel,
  Shield,
  Link2,
  Scale,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
  BookOpen,
  UserCheck,
  Copyright,
  ExternalLink,
} from 'lucide-react';
import ShinyText from '../animations/ShinyText';

export default function TermsAndConditions() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: UserCheck },
    { id: 'services', title: 'Services', icon: BookOpen },
    { id: 'responsibilities', title: 'User Responsibilities', icon: UserCheck },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Copyright,
    },
    { id: 'third-party', title: 'Third-Party Links', icon: Link2 },
    { id: 'liability', title: 'Limitation of Liability', icon: Scale },
    { id: 'privacy', title: 'Privacy', icon: Shield },
    { id: 'changes', title: 'Changes to Terms', icon: Gavel },
    { id: 'governing-law', title: 'Governing Law', icon: Gavel },
    { id: 'contact', title: 'Contact Us', icon: Mail },
  ];

  return (
    <div className="pt-15 container-custom">
      <Head>
        <title>Terms and Conditions | Next Media</title>
        <meta
          name="description"
          content="Next Media Terms and Conditions - Please read our terms carefully before using our services."
        />
      </Head>

      <div className="w-4/5 mx-auto px-4">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-50 blur-xl"></div>

          <ShinyText text="Terms and Conditions" disabled={false} speed={2.3} />

          <div className="flex items-center justify-center space-x-2 text-lg pt-5 relative z-10">
            <span>Effective Date: 26 September 2025</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-black/60 shadow-lg overflow-hidden">
              {/* Introduction */}
              <section className="p-8 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Welcome to Next Media</h2>
                </div>
                <p className="leading-relaxed mb-4">
                  By accessing or using our website and services, you agree to
                  comply with the following terms and conditions. Please read
                  them carefully.
                </p>
                {/* <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Important:</strong> These terms govern your use of our website and services. 
                    By continuing to use our site, you accept these terms in full.
                  </p>
                </div> */}
              </section>

              {/* Acceptance of Terms */}
              <section id="acceptance" className="p-8 border-b border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold">
                      1. Acceptance of Terms
                    </h2>
                  </div>
                  <button
                    onClick={() => toggleSection('acceptance')}
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                  >
                    {openSections['acceptance'] ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </button>
                </div>

                <div
                  className={`space-y-6 ${openSections['acceptance'] ? 'block' : 'hidden lg:block'}`}
                >
                  <p className="leading-relaxed">
                    By using our website or services, you acknowledge that you
                    have read, understood, and agreed to these Terms and
                    Conditions, including any updates we may make in the future.
                  </p>
                  {/* <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-green-800">
                      <UserCheck className="w-4 h-4" />
                      <span className="font-medium">Your continued use constitutes acceptance of these terms.</span>
                    </div>
                  </div> */}
                </div>
              </section>

              {/* Services */}
              <section id="services" className="p-8 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold">2. Services</h2>
                </div>
                <p className="mb-6">
                  Next Media provides digital marketing services, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    'Web design and development',
                    'Branding and media production',
                    'Content creation and strategy',
                    'Social media management',
                    'Integrated marketing campaigns',
                    'Digital marketing consulting',
                  ].map((service, index) => (
                    <div
                      key={service}
                      className="flex items-center space-x-3 bg-purple-50 p-3 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <BookOpen className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                {/* <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <p className="text-purple-800 text-sm">
                    <strong>Note:</strong> All services are subject to the terms outlined in your service agreement or proposal.
                  </p>
                </div> */}
              </section>

              {/* User Responsibilities */}
              <section
                id="responsibilities"
                className="p-8 border-b border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    3. User Responsibilities
                  </h2>
                </div>
                <p className="mb-6">
                  You agree to use our website and services only for lawful
                  purposes. You must not:
                </p>
                <div className="space-y-3">
                  {[
                    'Misuse the website or attempt to disrupt its functionality',
                    'Upload or share content that is unlawful, harmful, or offensive',
                    'Violate any applicable laws or regulations',
                  ].map((restriction, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-red-50 p-4 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xs flex-shrink-0 mt-1">
                        ✗
                      </div>
                      <span className="text-gray-700">{restriction}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Intellectual Property */}
              <section
                id="intellectual-property"
                className="p-8 border-b border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Copyright className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    4. Intellectual Property
                  </h2>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Copyright className="w-5 h-5 text-orange-600" />
                    <h4 className="text-lg font-semibold text-orange-800">
                      Protected Content
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    All content, designs, logos, images, and materials on this
                    website are the property of Next Media or its licensors. You
                    may not reproduce, distribute, or use any content without
                    written permission.
                  </p>
                </div>
              </section>

              {/* Third-Party Links */}
              <section
                id="third-party"
                className="p-8 border-b border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Link2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">5. Third-Party Links</h2>
                </div>
                <div className="flex items-start space-x-4 bg-blue-50 p-6 rounded-lg">
                  <ExternalLink className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-2">
                      Our website may contain links to third-party websites.
                      Next Media is not responsible for the content, privacy
                      practices, or accuracy of these external sites.
                    </p>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" className="p-8 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Scale className="w-6 h-6 text-gray-600" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    6. Limitation of Liability
                  </h2>
                </div>
                <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded-r-lg mb-6">
                  <p className="text-gray-800 font-semibold">
                    Next Media is not liable for any direct, indirect,
                    incidental, or consequential damages arising from the use of
                    our website or services.
                  </p>
                </div>
                <p className="">
                  While we strive for accuracy and quality, we do not guarantee
                  specific results from marketing efforts.
                </p>
              </section>

              {/* Privacy */}
              <section id="privacy" className="p-8 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold">7. Privacy</h2>
                </div>
                <p className="mb-6">
                  Your use of our website and services is also governed by our
                  Privacy Policy, which explains how we collect, use, and
                  protect your personal information.
                </p>
              </section>

              {/* Changes to Terms */}
              <section id="changes" className="p-8 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Gavel className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold">8. Changes to Terms</h2>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <p className="text-gray-700">
                    We may update these Terms and Conditions from time to time.
                    Any changes will be posted on this page with an updated
                    "Effective Date." Continued use of our website or services
                    constitutes acceptance of these changes.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section
                id="governing-law"
                className="p-8 border-b border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Gavel className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold">9. Governing Law</h2>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Gavel className="w-5 h-5 text-red-600" />
                    <h4 className="text-lg font-semibold text-red-800">
                      Legal Jurisdiction
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    These Terms and Conditions are governed by the laws of the
                    United Arab Emirates. Any disputes will be subject to the
                    jurisdiction of UAE courts.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <h2 className="text-2xl font-bold">10. Contact Us</h2>
                </div>
                <p className="mb-6">
                  If you have questions or concerns about these Terms and
                  Conditions, please contact us:
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-700">+971 58 898 4455</p>
                        <p className="text-gray-700">+971 52 516 2071</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-blue-600">info.nextdms@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}
