import Image from 'next/image';
import Link from 'next/link';
import ptsaLogo from '../../public/images/EndeavourPTSALogo.jpg';
import Container from '../Container';

const PtsaLogo = () => (
  <section id="ptsa-logo" className="my-28">
    <Container>
      <div className="flex justify-center">
        <Link href="https://endeavourptsa.org" target="_blank">
          <Image src={ptsaLogo} alt="Endeavour Elementary PTSA logo" />
        </Link>
      </div>
    </Container>
  </section>
);

export default PtsaLogo;
