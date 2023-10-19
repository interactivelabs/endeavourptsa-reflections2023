'use client';

import Button from '@/components/UI/Button';
import Container from '@/components/UI/Container';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SpinnerIcon from '../Icons/SpinnerIcon';
import DropzoneFileInput from '../UI/DropzoneFileInput';
import ErrorAlert from '../UI/ErrorAlert';
import ErrorText from '../UI/ErrorText';
import Label from '../UI/Label';
import SuccessAlert from '../UI/SuccessAlert';
import UploadProgress from '../UI/UploadProgress';
import getUploadFormOnSubmit from './UploadFormOnSubmit';

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
  artwork: FileList;
  packet: FileList;
}

const UploadForm = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [artworkUploadProgress, setArtworkUploadProgress] = useState<number>(0);
  const [packetUploadProgress, setPacketUploadProgress] = useState<number>(0);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    register,
    reset,
  } = useForm<IUploadFormValues>();

  useEffect(() => {
    if (isDirty) {
      resetProgress();
      setIsError(false);
      setIsUploading(false);
      setIsCompleted(false);
    }
  }, [isDirty]);

  const resetProgress = () => {
    setArtworkUploadProgress(0);
    setPacketUploadProgress(0);
  };

  const onStart = () => {
    resetProgress();
    setIsError(false);
    setIsUploading(true);
    setIsCompleted(false);
  };

  const onError = () => {
    resetProgress();
    setIsError(true);
    setIsUploading(false);
    setIsCompleted(false);
  };

  const onFormEvent = () => {
    reset();
    resetProgress();
    setIsError(false);
    setIsUploading(false);
  };

  const onComplete = () => {
    onFormEvent();
    setIsCompleted(true);
  };

  const onReset = () => {
    onFormEvent();
    setIsCompleted(false);
  };

  const onSubmit = getUploadFormOnSubmit({
    onComplete,
    onError,
    onStart,
    setIsUploading,
    setArtworkUploadProgress,
    setPacketUploadProgress,
  });

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
        <fieldset disabled={isUploading}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <Label htmlFor="studentName">
                      Student&apos;s Full Name
                    </Label>
                    <div className="mt-2">
                      <input
                        id="studentName"
                        placeholder="Full Name"
                        {...register('studentName', { required: true })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors?.studentName && (
                        <ErrorText
                          text="Student's full name is required"
                          fieldName="studentName"
                        />
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <Label htmlFor="category">Art Category</Label>
                    <div className="mt-2">
                      <select
                        id="category"
                        {...register('category', {
                          required: true,
                          validate: (value) =>
                            value !== '-- select an option --',
                        })}
                        className='className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      >
                        <option disabled selected>
                          -- select an option --
                        </option>
                        {ArtCategories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                      {errors?.category && (
                        <ErrorText
                          text="Art Category is required"
                          fieldName="category"
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-span-full">
                    <Label htmlFor="artwork-display">Artwork</Label>
                    <Controller
                      name="artwork"
                      control={control}
                      rules={{ required: true }}
                      render={({ field, fieldState }) => (
                        <DropzoneFileInput<IUploadFormValues, 'artwork'>
                          field={field}
                          fieldState={fieldState}
                          maxSize={1024}
                          error={
                            errors?.artwork
                              ? 'Artwork File is required'
                              : undefined
                          }
                          accept={{
                            'image/png': ['.png'],
                            'image/jpeg': ['.jpg', '.jpeg'],
                            'video/mp4': ['.mp4'],
                            'video/quicktime': ['.mov'],
                            'video/x-msvideo': ['.avi'],
                            'audio/mpeg': ['.mp3'],
                            'audio/wav': ['.wav'],
                            'application/pdf': ['.pdf'],
                          }}
                        />
                      )}
                    />
                    {artworkUploadProgress > 0 && (
                      <UploadProgress percentage={artworkUploadProgress} />
                    )}
                  </div>
                  <div className="col-span-full">
                    <Label htmlFor="packet-display">Student Entry Packet</Label>
                    <Controller
                      name="packet"
                      control={control}
                      rules={{ required: true }}
                      render={({ field, fieldState }) => (
                        <DropzoneFileInput<IUploadFormValues, 'packet'>
                          field={field}
                          fieldState={fieldState}
                          maxSize={10}
                          error={
                            errors?.packet
                              ? 'Student Packet is required'
                              : undefined
                          }
                          accept={{
                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                              ['.docx'],
                            'application/msword': ['.doc'],
                            'application/pdf': ['.pdf'],
                          }}
                          CustomIcon={DocumentTextIcon}
                        />
                      )}
                    />
                    {packetUploadProgress > 0 && (
                      <UploadProgress percentage={packetUploadProgress} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              {!!isCompleted && (
                <SuccessAlert
                  className="flex-1"
                  message="Successfully uploaded"
                  onDismiss={() => setIsCompleted(false)}
                />
              )}
              {!!isError && (
                <ErrorAlert
                  className="flex-1"
                  message="There was an error uploading your artwork. Please try again."
                  onDismiss={() => setIsError(false)}
                />
              )}
              <button
                type="reset"
                onClick={onReset}
                disabled={isUploading}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <Button type="submit" disabled={isUploading}>
                <span className="inline-block">Submit Artwork</span>
                {!!isUploading && <SpinnerIcon className="ml-4" />}
              </Button>
            </div>
          </form>
        </fieldset>
      </Container>
    </section>
  );
};

export default UploadForm;
