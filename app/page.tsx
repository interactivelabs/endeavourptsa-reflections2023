import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import PDFIcon from '@/components/Icons/PDFIcon';
import WordIcon from '@/components/Icons/WordIcon';
import { UploadCta } from '@/components/UploadCta';
import Image from 'next/image';
import ptsaLogo from '../public/images/EndeavourPTSALogo.jpg';
import reflectionBanner from '../public/images/reflections-23-24.webp';

const Home = () => (
  <main className="flex-auto">
    <section>
      <Container>
        <Image
          src={reflectionBanner}
          alt="Reflections program banner 2023 - 2024, I'm hopeful because..."
        />
      </Container>
    </section>
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Information
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Each student must submit a completed Student Entry Packet with their
            piece of art.
          </p>
        </div>
        <div className="mt-14 text-center">
          <h3 className="font-display text-xl font-medium tracking-tighter text-blue-600 sm:text-2xl">
            Download Student Entry Packet:
          </h3>
          <div className="mt-8 flex justify-around">
            <Button
              href="https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/docs-provided/23.24-WSPTA-student-entry-packet-reflections.docx"
              target="_blank"
              className="mx-4"
            >
              Student Entry Packet{' '}
              <WordIcon
                className="ml-2 h-6 w-6 fill-white"
                aria-description="Word Icon"
              />
              <span>.docx</span>
            </Button>
            <Button
              href="https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/docs-provided/23.24-WSPTA-student-entry-packet-reflections.pdf"
              target="_blank"
              className="mx-4"
            >
              Student Entry Packet{' '}
              <PDFIcon
                className="ml-2 h-6 w-6 fill-white"
                aria-description="PDF Icon"
              />
              <span>.pdf</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
    <UploadCta />
    <section className="py-20 sm:py-32">
      <Container>
        <div className="flex justify-center">
          <Image src={ptsaLogo} alt="Endeavour Elementary PTSA logo" />
        </div>
      </Container>
    </section>
  </main>
);

export default Home;
