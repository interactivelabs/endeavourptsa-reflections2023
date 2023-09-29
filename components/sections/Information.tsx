import Link from 'next/link';
import Button from '../Button';
import Container from '../Container';
import PDFIcon from '../Icons/PDFIcon';
import WordIcon from '../Icons/WordIcon';

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
            <Link
              href="https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/docs-provided/23.24-WSPTA-student-entry-packet-reflections_es.docx"
              target="_blank"
              className="mt-4 inline-block text-ptsa-blue-800 underline"
            >
              En Español
            </Link>
          </div>
          <div className="flex flex-col">
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
            <Link
              href="https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/docs-provided/23.24-WSPTA-student-entry-packet-reflections_es.pdf"
              target="_blank"
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
