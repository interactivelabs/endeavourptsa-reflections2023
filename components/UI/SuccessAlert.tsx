import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';

export interface ISusccessAlert {
  message: string;
  className?: string;
  onDismiss?: MouseEventHandler<HTMLButtonElement>;
}

export default function SuccessAlert({
  message,
  className,
  onDismiss,
}: ISusccessAlert) {
  return (
    <div className={clsx('rounded-md bg-green-50 p-4', className)}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">{message}</p>
        </div>
        {!!onDismiss && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                onClick={onDismiss}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
