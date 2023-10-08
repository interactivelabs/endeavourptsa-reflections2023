'use client';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/20/solid';
import {
  ArrowRightIcon,
  ArrowUpOnSquareIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import ptsaLogo from '../../public/images/EndeavourPTSALogo.jpg';
import Button from '../UI/Button';

export default function Header() {
  const linkStyles =
    'items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 target:border-indigo-500 target:text-gray-900 hover:border-gray-300 hover:text-gray-700 focus:border-indigo-500 focus:text-gray-900 active:border-indigo-500 active:text-gray-900';
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="ml-4 flex items-center py-2">
                  <Link href="/" className="h-full">
                    <Image
                      src={ptsaLogo}
                      alt="Endeavour Elementary PTSA logo"
                      className="h-full w-auto"
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link
                    href="/#rules"
                    className={clsx(linkStyles, 'inline-flex')}
                  >
                    Rules
                  </Link>
                  <Link
                    href="/#student-entry-packet"
                    className={clsx(linkStyles, 'inline-flex')}
                  >
                    Information
                  </Link>
                  <Link
                    href="/#banner-video"
                    className={clsx(linkStyles, 'inline-flex')}
                  >
                    Video
                  </Link>
                </div>
              </div>
              <Link
                href="/upload"
                className="mt-4 inline-block whitespace-nowrap font-display text-base tracking-tight text-ptsa-blue-800 underline"
              >
                Upload <ArrowRightIcon className="inline h-4 w-4" />
              </Link>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/#rules"
                className={clsx(linkStyles, 'block px-6 py-4')}
              >
                Rules
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/#student-entry-packet"
                className={clsx(linkStyles, 'block px-6 py-4')}
              >
                Information
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/#banner-video"
                className={clsx(linkStyles, 'block px-6 py-4')}
                // className=" border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Video
              </Disclosure.Button>
            </div>
            <div className="flex justify-center border-t border-gray-200 pb-3 pt-4">
              <Button className="mr-4" href="/upload">
                Upload your art
                <ArrowUpOnSquareIcon className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
