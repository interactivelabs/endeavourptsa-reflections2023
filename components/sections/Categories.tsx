import {
  AcademicCapIcon,
  ArrowDownOnSquareIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

const actions = [
  {
    title: 'Dance Choreography',
    href: '#',
    href_es: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Film Production',
    href: '#',
    href_es: '#',
    icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Literature',
    href: '#',
    href_es: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'Music Composition',
    href: '#',
    href_es: '#',
    icon: BanknotesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Photography',
    href: '#',
    href_es: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'Visual Arts',
    href: '#',
    href_es: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
];

export default function Categories() {
  return (
    <div className="mt-14">
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
              <span
                className={clsx(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-2 ring-white',
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold leading-6 text-ptsa-blue-900">
                <Link href={action.href} className="focus:outline-none">
                  {action.title}
                </Link>
              </h3>
              <Link
                href={action.href_es}
                className="z-50 mt-2 inline-block text-sm text-ptsa-blue-800 underline"
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
