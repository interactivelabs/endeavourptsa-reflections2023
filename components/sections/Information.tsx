import Link from 'next/link';
import PDFIcon from '../Icons/PDFIcon';
import WordIcon from '../Icons/WordIcon';
import Button from '../UI/Button';
import Container from '../UI/Container';

const Information = () => (
  <section id="student-entry-packet" className="my-28">
    <Container>
      <div className="mx-auto lg:mx-0">
        <h2 className="font-display text-4xl font-medium tracking-tighter text-ptsa-blue-900 sm:text-5xl">
          Endeavour Information
        </h2>
        <p className="mt-4 font-display text-2xl tracking-tight text-ptsa-blue-800">
          Each student must submit a completed Student Entry Packet with their
          piece of art.
        </p>
      </div>
      <div className="mt-14 text-center">
        <h3 className="font-display text-xl font-medium tracking-tighter text-ptsa-blue-800 sm:text-2xl">
          Download Student Entry Packet:
        </h3>
        <div className="mt-8 flex justify-around">
          <div className="flex flex-col">
            <Button
              href="https://endeavourptsa.org/Doc/Reflections-2023-2024/23.24-WSPTA-student-entry-packet-reflections.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              Student Entry Packet{' '}
              <WordIcon
                className="ml-2 h-6 w-6 fill-white"
                aria-description="Word Icon"
              />
              <span>.docx</span>
            </Button>
            <Link
              href="https://endeavourptsa.org/Doc/Reflections-2023-2024/23.24-WSPTA-student-entry-packet-reflections_.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-ptsa-blue-800 underline"
            >
              En Español
            </Link>
          </div>
          <div className="flex flex-col">
            <Button
              href="https://endeavourptsa.org/Doc/Reflections-2023-2024/23.24-WSPTA-student-entry-packet-reflections.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              Student Entry Packet{' '}
              <PDFIcon
                className="ml-2 h-6 w-6 fill-white"
                aria-description="PDF Icon"
              />
              <span>.pdf</span>
            </Button>
            <Link
              href="https://endeavourptsa.org/Doc/Reflections-2023-2024/23.24-WSPTA-student-entry-packet-reflections_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-ptsa-blue-800 underline"
            >
              En Español
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Information;
