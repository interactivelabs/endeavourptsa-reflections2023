import Image from 'next/image';
import ptsaLogo from '../public/images/EndeavourPTSALogo.jpg';
import reflectionBanner from '../public/images/reflections-23-24.webp';

const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Image
      src={reflectionBanner}
      alt="Reflections program banner 2023 - 2024, I'm hopeful because..."
    />
    <Image src={ptsaLogo} alt="Endeavour Elementary PTSA logo" />
  </main>
);

export default Home;
