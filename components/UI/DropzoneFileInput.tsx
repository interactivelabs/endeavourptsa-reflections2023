'use client';

import { PhotoIcon } from '@heroicons/react/24/outline';
import React, {
  ForwardRefExoticComponent,
  SVGProps,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDropzone } from 'react-dropzone/dist/es/index';
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import ErrorText from './ErrorText';
import InputFileList from './InputFileList';

export const getFileMBSize = (file: File) =>
  +(file.size / 1024 / 1024).toFixed(1);

interface IDropzoneFileInput<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
> {
  accept?: any;
  CustomIcon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  error?: string;
  field: ControllerRenderProps<TFieldValues, TPath>;
  fieldState: ControllerFieldState;
  maxSize?: number;
  multiple?: boolean;
}

const DropzoneFileInput = <
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
>({
  field,
  fieldState,
  error = '',
  accept,
  CustomIcon,
  maxSize,
}: IDropzoneFileInput<TFieldValues, TPath>) => {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = [...files, ...acceptedFiles];
      setFiles(newFiles);
      field.onChange({
        target: { value: newFiles },
        name: field.name,
      });
    },
    [files, field],
  );
  const onRemove = useCallback(
    (fileName: string) => {
      const newFiles = files.filter((f) => f.name !== fileName);
      setFiles(newFiles);
      field.onChange({
        target: { value: newFiles },
        name: field.name,
      });
    },
    [field, files],
  );
  const sizeValidator = useCallback(
    (file: File) => {
      const size = getFileMBSize(file);
      if (maxSize && size >= maxSize)
        return {
          code: 'file-too-large',
          message: `File is larger than ${maxSize} MB`,
        };
      return null;
    },
    [maxSize],
  );

  useEffect(() => {
    if (!fieldState.isDirty) setFiles([]);
  }, [fieldState]);

  const { fileRejections, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept,
      validator: maxSize ? sizeValidator : undefined,
    });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.name} className="inline-block">
        {file.name} - {getFileMBSize(file)}MB
        <ul className="inline-block">
          {errors.map((e) => (
            <li key={e.code} className="ml-4 inline-block">
              <ErrorText
                text={e.message}
                fieldName={`dropzone-file-${field.name}-file`}
              />
            </li>
          ))}
        </ul>
      </li>
    );
  });

  const hideAddFiles = files.length > 0;
  return (
    <>
      {!hideAddFiles && (
        <div
          {...getRootProps({
            className:
              'flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md',
          })}
        >
          <div className="flex max-w-lg justify-center">
            <div className="text-center">
              {!!CustomIcon ? (
                <CustomIcon
                  className="inline-block h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
              ) : (
                <PhotoIcon
                  className="inline-block h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
              )}
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file"
                  className="relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
                >
                  <span className="underline">Upload files</span>
                </label>
                <p className="pl-1">
                  {isDragActive ? 'or drop here' : 'or drag and drop here'}
                </p>
              </div>
              {!!accept && (
                <p className="text-xs leading-5 text-gray-600">
                  {Object.keys(accept)
                    .map(
                      (key) =>
                        accept[key].length > 0 &&
                        accept[key].join(', ').toLocaleUpperCase(),
                    )
                    .join(', ')}
                </p>
              )}
              {!!maxSize && (
                <p className="text-xs leading-5 text-gray-600">
                  up to {maxSize}MB
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      {fileRejectionItems.length > 0 && (
        <ul className="mt-2 inline-block text-sm leading-5 text-gray-600">
          {fileRejectionItems}
        </ul>
      )}
      <input {...getInputProps({ className: 'sr-only' })} />
      {!!error && (
        <ErrorText text={error} fieldName={`dropzone-file-${field.name}`} />
      )}
      {!!files.length && <InputFileList files={files} onRemove={onRemove} />}
    </>
  );
};

export default DropzoneFileInput;
