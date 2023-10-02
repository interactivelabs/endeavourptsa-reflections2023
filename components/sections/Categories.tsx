import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

enum Category {
  Dance,
  Film,
  Literature,
  Music,
  Photography,
  VisualArts,
}

const CategoryIcon = {
  [Category.Dance]: (
    <div className="h-24 w-20 bg-category-icons bg-[length:600%] bg-[position:-8px] bg-no-repeat" />
  ),
  [Category.Film]: (
    <div className="h-24 w-20 bg-category-icons bg-[length:600%] bg-[position:-90px] bg-no-repeat" />
  ),
  [Category.Literature]: (
    <div className="h-24 w-20 bg-category-icons bg-[length:600%] bg-[position:-166px] bg-no-repeat" />
  ),
  [Category.Music]: (
    <div className="h-24 w-20 bg-category-icons bg-[length:600%] bg-[position:-242px] bg-no-repeat" />
  ),
  [Category.Photography]: (
    <div className="h-24 w-20 bg-category-icons bg-[length:600%] bg-[position:-324px] bg-no-repeat" />
  ),
  [Category.VisualArts]: (
    <div className="h-24 w-20 bg-category-icons bg-[length:600%] bg-[position:-400px] bg-no-repeat" />
  ),
};

const actions = [
  {
    title: 'Dance Choreography',
    href: 'https://www.wastatepta.org/wp-content/uploads/2023/08/dance-choreography-category-guidelines_reflections-23-24.pdf',
    href_es:
      'https://www.wastatepta.org/wp-content/uploads/2023/08/dance-choreography-cat-guidelines_reflections-es-23-24.pdf',
    icon: Category.Dance,
  },
  {
    title: 'Film Production',
    href: 'https://www.wastatepta.org/wp-content/uploads/2023/08/film-production-category-guidelines_reflections-23-24.pdf',
    href_es:
      'https://www.wastatepta.org/wp-content/uploads/2023/08/film-production-cat-guidelines_reflections-es-23-24.pdf',
    icon: Category.Film,
  },
  {
    title: 'Literature',
    href: 'https://www.wastatepta.org/wp-content/uploads/2023/08/literature-category-guidelines_reflections-23-24.pdf',
    href_es:
      'https://www.wastatepta.org/wp-content/uploads/2023/08/literature-cat-guidelines_reflections-es-23-24.pdf',
    icon: Category.Literature,
  },
  {
    title: 'Music Composition',
    href: 'https://www.wastatepta.org/wp-content/uploads/2023/08/music-composition-category-guidelines_reflections-23-24.pdf',
    href_es:
      'https://www.wastatepta.org/wp-content/uploads/2023/08/music-composition-cat-guidelines_reflection-es-23-24.pdf',
    icon: Category.Music,
  },
  {
    title: 'Photography',
    href: 'https://www.wastatepta.org/wp-content/uploads/2023/08/photography-category-guidelines_reflections-23-24.pdf',
    href_es:
      'https://www.wastatepta.org/wp-content/uploads/2023/08/photography-cat-guidelines_reflections-es-23-24.pdf',
    icon: Category.Photography,
  },
  {
    title: 'Visual Arts',
    href: 'https://www.wastatepta.org/wp-content/uploads/2023/08/visual-arts-category-guidelines_reflections-23-24.pdf',
    href_es:
      'https://www.wastatepta.org/wp-content/uploads/2023/08/visual-arts-cat-guidelines_reflections-es-23-24.pdf',
    icon: Category.VisualArts,
  },
];

export default function Categories() {
  return (
    <div className="mt-14">
      <div className="mb-2 text-ptsa-blue-800">
        You can download the rules directly here:
      </div>
      <div className="divide-y overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={clsx(
              actionIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'group relative bg-ptsa-blue-100 p-6 focus-within:bg-ptsa-blue-200 focus-within:ring-2 focus-within:ring-inset',
            )}
          >
            <div>
              <Link
                href={action.href}
                className="focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex rounded-lg p-3 ring-2 ring-white">
                  {CategoryIcon[action.icon]}
                </span>
              </Link>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold leading-6 text-ptsa-blue-900">
                <Link
                  href={action.href}
                  className="focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {action.title}
                </Link>
              </h3>
              <Link
                href={action.href_es}
                className="z-50 mt-2 inline-block text-sm text-ptsa-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                En Español
              </Link>
            </div>
            <Link
              href={action.href}
              className="absolute right-6 top-6 p-4 text-gray-300 group-hover:text-gray-400"
            >
              <ArrowDownOnSquareIcon className="h-8 w-8 text-ptsa-blue-900" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
