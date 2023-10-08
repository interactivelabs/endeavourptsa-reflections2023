import Image from 'next/image';
import reflectionBanner from '../../public/images/reflections-23-24.webp';
import Container from '../UI/Container';

const BannerImage = () => (
  <section id="banner-image" className="mb-28">
    <Container className="px-0">
      <Image
        src={reflectionBanner}
        alt="Reflections program banner 2023 - 2024, I'm hopeful because..."
      />
    </Container>
  </section>
);

export default BannerImage;
