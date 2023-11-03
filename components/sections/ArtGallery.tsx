'use client';

import type { _Object } from '@aws-sdk/client-s3';
import Link from 'next/link';
import { useState } from 'react';
import MusicIcon from '../Icons/MusicIcon';
import PDFIcon from '../Icons/PDFIcon';
import ArtModal, { ArtType, getMimeType } from '../UI/ArtModal/ArtModal';

interface IArtGallery {
  images: _Object[];
}

function splitIntoFour(images: _Object[]) {
  let result: Array<Array<_Object>> = [[], [], [], []];
  for (let i = 0; i < images.length; i++) {
    result[i % 4].push(images[i]);
  }
  return result;
}

const ArtGallery = ({ images }: IArtGallery) => {
  const [isOpen, setIsOpen] = useState(false);
  const [artType, setArtType] = useState<ArtType>('image');
  const [url, setUrl] = useState('');
  const closeModal = () => {
    setUrl('');
    setArtType('image');
    setIsOpen(false);
  };
  const openModal = (url: string, artType: ArtType) => {
    setUrl(url);
    setArtType(artType);
    setIsOpen(true);
  };
  const columns = splitIntoFour(images);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {columns.map((column, index) => (
          <div key={index} className="grid gap-4">
            {column.map(
              (image) =>
                image && (
                  <div key={image.ETag} className="overflow-hidden rounded-lg">
                    {(image.Key?.includes('jpeg') ||
                      image.Key?.includes('jpg') ||
                      image.Key?.includes('png')) && (
                      <button
                        onClick={() => openModal(image.Key || '', 'image')}
                        className="focus:outline-none"
                      >
                        <img
                          className="h-auto max-w-full transition duration-500 hover:scale-110"
                          src={`https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/${image.Key}`}
                          alt=""
                        />
                      </button>
                    )}
                    {(image.Key?.includes('mp4') ||
                      image.Key?.includes('mov') ||
                      image.Key?.includes('avi')) && (
                      <button
                        onClick={() => openModal(image.Key || '', 'video')}
                        className="focus:outline-none"
                      >
                        <video className="relative h-auto w-full transition duration-500 hover:scale-110">
                          <source
                            src={`https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/${image.Key}`}
                            type={getMimeType(image.Key)}
                          />
                        </video>
                      </button>
                    )}
                    {(image.Key?.includes('mp3') ||
                      image.Key?.includes('wav')) && (
                      <>
                        <div className="flex justify-center p-4 text-ptsa-blue-900">
                          <MusicIcon className="h-auto w-1/3" />
                          <div className="w-full p-4">
                            Audio file - Click to listen
                          </div>
                        </div>
                        <audio
                          controls
                          className="h-auto min-h-[40px] max-w-full"
                        >
                          <source
                            src={`https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/${image.Key}`}
                            type={getMimeType(image.Key)}
                          />
                        </audio>
                      </>
                    )}
                    {image.Key?.includes('pdf') && (
                      <Link
                        href={`https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/${image.Key}`}
                        target="_blank"
                      >
                        <div className="flex justify-center p-4 text-ptsa-blue-900">
                          <PDFIcon className="h-auto w-1/3" />
                          <div className="w-full p-4">
                            Document file - Click to download
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                ),
            )}
          </div>
        ))}
      </div>
      <ArtModal
        isOpen={isOpen}
        closeModal={closeModal}
        url={url}
        artType={artType}
      />
    </>
  );
};

export default ArtGallery;
