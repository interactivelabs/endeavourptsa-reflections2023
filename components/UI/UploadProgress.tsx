import { CheckCircleIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React from 'react';
import SpinnerIcon from '../Icons/SpinnerIcon';

export interface IUploadProgress {
  percentage: number;
}

const UploadProgress = ({ percentage }: IUploadProgress) => {
  const completed = percentage > 99;
  const bgColor = completed ? 'bg-green-200' : 'bg-blue-200';
  const fontColor = completed ? 'text-green-600' : 'text-blue-600';
  const barColor = completed ? 'bg-green-500' : 'bg-blue-500';
  return (
    <div className="relative pt-1">
      <div className="mb-2 flex items-center justify-between">
        <div
          className={clsx(
            'flex justify-center rounded-full px-2 py-2 align-middle text-xs',
            bgColor,
          )}
        >
          <span className={clsx('mx-4 font-semibold uppercase', fontColor)}>
            Upload {completed ? 'Complete' : 'Progress'}
          </span>
          {!completed && <SpinnerIcon className={fontColor} />}
          {completed && <CheckCircleIcon className={`h-4 w-4 ${fontColor}`} />}
        </div>
        <div className="text-right">
          <span
            className={clsx('inline-block text-xs font-semibold', fontColor)}
          >
            {percentage}%
          </span>
        </div>
      </div>
      <div
        className={clsx(
          'mb-4 flex h-2 overflow-hidden rounded text-xs',
          bgColor,
        )}
      >
        <div
          style={{ width: `${percentage}%` }}
          className={clsx(
            'whitespace-nowra flex flex-col justify-center text-center text-white shadow-none',
            barColor,
          )}
        ></div>
      </div>
    </div>
  );
};

export default UploadProgress;
