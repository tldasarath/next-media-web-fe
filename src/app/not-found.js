import Custom404 from '@/components/common/404';
import Footer from '@/components/Footer/Footer';
import SpaceLoader from '@/components/Loader/SpaceLoader';
import Navbar from '@/components/Navbar/Navbar';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

export const metadata = {
  title: '404 | Next Media',
  description:
    'Learn about Next Media, our mission, vision, and team dedicated to delivering excellence.',
  keywords: 'Next Media, About Us, Mission, Vision, Team',
  openGraph: {
    title: 'About Us | Next Media',
    description:
      'Learn about Next Media, our mission, vision, and team dedicated to delivering excellence.',
    url: 'https://yourwebsite.com/about',
    images: ['/images/og-about.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Next Media',
    description:
      'Learn about Next Media, our mission, vision, and team dedicated to delivering excellence.',
    images: ['/images/og-about.png'],
  },
};
export default function NotFound() {
  return (
    <div>
      <SpaceLoader />
      <Navbar />
      {/* <PremiumVideoBanner BannerTitle={'About Us'}/> */}

      <div className="py-36">
        <Custom404 />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
