import { XCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';

export interface IErrorAlert {
  message: string;
  className?: string;
  onDismiss?: MouseEventHandler<HTMLButtonElement>;
}

export default function ErrorAlert({
  message,
  className,
  onDismiss,
}: IErrorAlert) {
  return (
    <div className={clsx('rounded-md bg-red-50 p-4', className)}>
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">{message}</div>
        {!!onDismiss && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
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
