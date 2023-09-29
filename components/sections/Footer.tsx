import Link from 'next/link';

const Footer = () => (
  <footer className="bg-ptsa-blue-100 py-28">
    <div className="flex justify-around">
      <Link
        href="https://www.wastatepta.org/events-programs/reflections"
        target="_blank"
        className="text-ptsa-blue-800"
      >
        WA State Reflections Program Info
      </Link>
      <Link
        href="https://endeavourptsa.org"
        target="_blank"
        className="text-ptsa-blue-800"
      >
        Endeavourptsa.org
      </Link>
    </div>
  </footer>
);

export default Footer;
