import { PaperClipIcon } from '@heroicons/react/24/outline';
import Button from './Button';

interface IInputFileList {
  files: File[];
  onRemove?: (fileName: string) => void;
}

const InputFileList = ({ files, onRemove }: IInputFileList) => (
  <ul
    role="list"
    className="mt-4 divide-y divide-gray-200 rounded-md border border-gray-200"
  >
    {files.map((file) => (
      <li
        key={file.name}
        className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
      >
        <div className="flex w-0 flex-1 items-center">
          <PaperClipIcon
            className="h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-2 w-0 flex-1 truncate">{file.name}</span>
        </div>
        <div className="ml-4 flex flex-shrink-0 space-x-4">
          {!!onRemove && (
            <Button onClick={() => onRemove(file.name)}>Remove</Button>
          )}
        </div>
      </li>
    ))}
  </ul>
);

export default InputFileList;
