import Button from '@/components/Button';
import Container from '@/components/Container';
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const UploadCta = () => (
  <section
    id="upload-cta"
    aria-label="Call to upload your art"
    className="my-28"
  >
    <Container>
      <div className="relative -mx-4 overflow-hidden bg-ptsa-blue-100 px-4 py-28 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24">
        <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
          <div>
            <Link
              href="/upload"
              className="font-display text-4xl font-medium tracking-tighter text-ptsa-blue-900 underline sm:text-5xl"
            >
              Upload your art
            </Link>
            <p className="mt-4 text-lg tracking-tight text-ptsa-blue-800">
              Remember each student must submit a completed Student Entry Packet
              with their piece of art.
            </p>
          </div>
          <div className="flex justify-center">
            <div>
              <Button href="/upload">
                Upload your art <ArrowUpOnSquareIcon className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default UploadCta;
