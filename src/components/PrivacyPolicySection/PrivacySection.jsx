'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Eye,
  Users,
  Cookie,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
  ChevronUp,
  Building,
  ChartBar,
  Megaphone,
  Gavel,
} from 'lucide-react';
import ShinyText from '../animations/ShinyText';

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: ShieldCheck },
    { id: 'information-collected', title: 'Information We Collect', icon: Eye },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Users,
    },
    { id: 'data-sharing', title: 'Data Sharing and Disclosure', icon: Users },
    { id: 'data-security', title: 'Data Security', icon: Lock },
    { id: 'cookies', title: 'Cookies and Tracking', icon: Cookie },
    { id: 'your-rights', title: 'Your Rights', icon: ShieldCheck },
    { id: 'updates', title: 'Updates to This Policy', icon: ShieldCheck },
    { id: 'contact', title: 'Contact Us', icon: Mail },
  ];

  return (
    <div className="pt-15 container-custom">
      <div className=" w-4/5 mx-auto px-4">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 -left-4 w-20 h-20  rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24  rounded-full opacity-50 blur-xl"></div>

          <ShinyText text="Privacy Policy" disabled={false} speed={2.3} />

          <div className="flex items-center justify-center space-x-2 text-lg pt-5  relative z-10">
            <span>Effective Date: 26 September 2025 </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 ">
          {/* Main Content */}
          <div className="lg:col-span-3 ">
            <div className=" rounded-2xl bg-black/60 shadow-lg overflow-hidden">
              {/* Introduction */}
              <section
                id="introduction"
                className="p-8 border-b border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold ">Introduction</h2>
                </div>
                <p className=" leading-relaxed mb-4">
                  At <strong>Next Media</strong>, we respect your privacy and
                  are committed to protecting the personal information you share
                  with us. This Privacy Policy explains how we collect, use,
                  store, and safeguard your information when you visit our
                  website or engage with our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section
                id="information-collected"
                className="p-8 border-b border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold ">
                      Information We Collect
                    </h2>
                  </div>
                  <button
                    onClick={() => toggleSection('information-collected')}
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                  >
                    {openSections['information-collected'] ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </button>
                </div>

                <div
                  className={`space-y-6 ${openSections['information-collected'] ? 'block' : 'hidden lg:block'}`}
                >
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span>Personal Information</span>
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Name, email address, phone number, company name, and other
                      details you provide through contact forms, inquiries, or
                      subscriptions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Name and contact information',
                        'Email address',
                        'Phone number',
                        'Company name',
                        'Subscription details',
                        'Inquiry information',
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                      <ChartBar className="w-5 h-5 text-green-600" />
                      <span>Non-Personal Information</span>
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Browser type, IP address, device information, website
                      usage, and analytics data.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Browser type and version',
                        'IP address',
                        'Device information',
                        'Website usage patterns',
                        'Analytics data',
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section
                id="information-use"
                className="p-8 border-b border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold ">
                    How We Use Your Information
                  </h2>
                </div>
                <p className=" mb-6">Your information may be used to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Respond to inquiries or requests',
                    'Provide and improve our services',
                    'Send updates, newsletters, or promotional communications (with your consent)',
                    'Analyze website usage to enhance user experience',
                    'Comply with legal obligations',
                  ].map((use, index) => (
                    <div
                      key={use}
                      className="flex items-start space-x-3 bg-purple-50 p-4 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{use}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Data Sharing and Disclosure */}
              <section
                id="data-sharing"
                className="p-8 border-b border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold ">
                    Data Sharing and Disclosure
                  </h2>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
                  <p className="text-red-800 font-semibold">
                    We do not sell or rent your personal information.
                  </p>
                </div>
                <p className=" mb-6">Your data may be shared with:</p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                    <Building className="w-6 h-6 text-red-600" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Trusted Third-Party Service Providers
                      </p>
                      <p className="text-gray-700">
                        To facilitate our services (e.g., email providers,
                        analytics tools)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                    <Gavel className="w-6 h-6 text-red-600" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Legal Authorities
                      </p>
                      <p className="text-gray-700">
                        When required by law or to protect our rights
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section
                id="data-security"
                className="p-8 border-b border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold ">Data Security</h2>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Lock className="w-5 h-5 text-green-600" />
                    <h4 className="text-lg font-semibold text-green-800">
                      We Protect Your Data
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational
                    measures to protect your data from unauthorized access,
                    disclosure, alteration, or destruction.
                  </p>
                </div>
              </section>

              {/* Cookies and Tracking */}
              <section id="cookies" className="p-8 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold ">Cookies and Tracking</h2>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    Our website may use cookies, tracking pixels, or similar
                    technologies to enhance user experience, analyze trends, and
                    provide personalized content.
                  </p>
                  <div className="flex items-center space-x-2 text-orange-700 bg-orange-100 px-3 py-2 rounded-lg">
                    <Cookie className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      You can manage or disable cookies through your browser
                      settings.
                    </span>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section
                id="your-rights"
                className="p-8 border-b border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold ">Your Rights</h2>
                </div>
                <p className=" mb-6">You have the right to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Access, update, or delete your personal information',
                    'Opt-out of marketing communications',
                    'Withdraw consent at any time',
                  ].map((right, index) => (
                    <div
                      key={right}
                      className="flex items-center space-x-3 bg-indigo-50 p-4 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-3 h-3 text-indigo-600" />
                      </div>
                      <span className="text-gray-700">{right}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Updates to This Policy */}
              <section id="updates" className="p-8 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold ">
                    Updates to This Policy
                  </h2>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-gray-700">
                    We may update this Privacy Policy periodically. Any changes
                    will be posted on this page with an updated "Effective
                    Date." Please review this policy regularly to stay informed.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <h2 className="text-2xl font-bold ">Contact Us</h2>
                </div>
                <p className=" mb-6">
                  To exercise your rights or for privacy-related inquiries,
                  please contact us at:
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
