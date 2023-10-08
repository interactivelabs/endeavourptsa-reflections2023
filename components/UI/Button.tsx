import clsx from 'clsx';
import Link from 'next/link';

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined });

const Button = ({ className, ...props }: ButtonProps) => {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-ptsa-red-900 p-4 text-base font-semibold text-white hover:bg-ptsa-red-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-ptsa-red-900 active:text-white/70',
    className,
  );

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
};

export default Button;
