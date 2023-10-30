import { XMarkIcon } from '@heroicons/react/24/outline';

const CloseButton = ({ onClick }: React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      type="button"
      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default CloseButton;
