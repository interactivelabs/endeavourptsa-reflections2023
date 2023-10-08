import clsx from 'clsx';
import { LabelHTMLAttributes } from 'react';

export default function Label({
  className,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      htmlFor="email"
      className={clsx(
        'block text-sm font-medium leading-6 text-gray-900',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}
