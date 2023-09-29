import Container from '@/components/Container';
import BannerImage from '@/components/sections/BannerImage';
import BannerVideo from '@/components/sections/BannerVideo';
import Information from '@/components/sections/Information';
import PtsaLogo from '@/components/sections/PtsaLogo';
import Rules from '@/components/sections/Rules';
import UploadCta from '@/components/sections/UploadCta';

const Home = () => (
  <main className="flex-auto">
    <BannerImage />
    <Rules />
    <Information />
    <BannerVideo />
    <UploadCta />
    <PtsaLogo />
  </main>
);

export default Home;
