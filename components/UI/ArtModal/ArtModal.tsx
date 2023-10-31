'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Dispatch, Fragment, useState } from 'react';
import CloseButton from '../CloseButton';

export type ArtType = 'image' | 'video' | 'document' | 'audio';

interface IImageModal {
  url: string;
  artType: ArtType;
  isOpen: boolean;
  closeModal: () => void;
}

export const getMimeType = (url: string): string => {
  if (url.includes('mp4')) return 'video/mp4';
  if (url.includes('mov')) return 'video/quicktime';
  if (url.includes('avi')) return 'video/x-msvideo';
  if (url.includes('mp3')) return 'audio/mpeg';
  if (url.includes('wav')) return 'audio/wav';
  if (url.includes('pdf')) return 'application/pdf';
  return '';
};

const ImageModal = ({ url, artType, isOpen, closeModal }: IImageModal) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="scale-0"
        enterTo="scale-100"
        leave="ease-in duration-400"
        leaveFrom="scale-100"
        leaveTo="scale-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-30"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-400"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-30"
          >
            <Dialog.Panel className="relative w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              {artType === 'image' && (
                <img
                  alt="Artwork submitted by Student"
                  className="relative h-auto max-w-full"
                  src={`https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/${url}`}
                />
              )}
              {artType === 'video' && (
                <video controls className="relative h-auto w-full">
                  <source
                    src={`https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/${url}`}
                    type={getMimeType(url)}
                  />
                </video>
              )}
              <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <CloseButton onClick={() => closeModal()} />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default ImageModal;
