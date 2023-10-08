'use client';

import Button from '@/components/UI/Button';
import Container from '@/components/UI/Container';
import { ArrowUpOnSquareIcon, PhotoIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import Label from '../UI/Label';

export interface ArtCategory {
  label: string;
  value: string;
}

export const ArtCategories: ArtCategory[] = [
  {
    label: 'Dance Choreography',
    value: 'dance',
  },
  {
    label: 'Film Production',
    value: 'film',
  },
  {
    label: 'Literature',
    value: 'literature',
  },
  {
    label: 'Music Composition',
    value: 'music',
  },
  {
    label: 'Photography',
    value: 'photography',
  },
  {
    label: 'Visual Arts',
    value: 'visualArts',
  },
];

export interface IUploadFormValues {
  studentName: string;
  category: string;
  coverPhoto?: string;
  artwork: FileList;
}

const UploadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUploadFormValues>();
  const onSubmit: SubmitHandler<IUploadFormValues> = (data) =>
    console.log(data);

  console.log(errors);

  return (
    <section
      id="upload-form-section"
      aria-label="Upload your art form sectiopn"
      className="my-28"
    >
      <Container>
        <h1 className="font-display text-4xl font-medium tracking-tighter text-ptsa-blue-900 sm:text-5xl">
          Upload your artwork
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <Label htmlFor="studentName">Student&apos;s Full Name</Label>
                  <div className="mt-2">
                    <input
                      placeholder="Full Name"
                      {...register('studentName', { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <Label htmlFor="category">Art Category</Label>
                  <div className="mt-2">
                    <select
                      {...register('category', { required: true })}
                      className='className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    >
                      {ArtCategories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-span-full">
                  <Label htmlFor="artwork-display">Artwork</Label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <Label htmlFor="artwork">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            className="sr-only"
                            {...register('artwork', { required: true })}
                          />
                        </Label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="reset"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default UploadForm;
