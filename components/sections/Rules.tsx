import Link from 'next/link';
import Container from '../Container';
import Categories from './Categories';

const Rules = () => (
  <section id="rules" className="my-28">
    <Container>
      <div className="mx-auto lg:mx-0">
        <h2 className="font-display text-4xl font-medium tracking-tighter text-ptsa-blue-900 sm:text-5xl">
          Rules
        </h2>
        <Link
          href="https://www.wastatepta.org/events-programs/reflections"
          className="mt-4 inline-block font-display text-2xl tracking-tight text-ptsa-blue-800"
        >
          Rules and more information can be found on the{' '}
          <span className="underline">WA State Reflections</span> website.
        </Link>
        <Categories />
      </div>
    </Container>
  </section>
);

export default Rules;
