'use server';

import getServersUrl from '@/lib/getServerUrl';
import type { ListObjectsV2CommandOutput } from '@aws-sdk/client-s3';
import Link from 'next/link';

const getData = async () => {
  const serverUrl = getServersUrl();
  const response = await fetch(`${serverUrl}/api/files`);
  const { Contents } = (await response.json()) as ListObjectsV2CommandOutput;
  const items = Contents?.filter((item) => !!item.Size && item.Size > 0);

  return items;
};

const GalleryPage = async () => {
  const data = await getData();
  if (!data) return null;
  return (
    <main className="p-8">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
            >
              All Files
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item) => (
            <tr key={item.Key} className="even:bg-gray-50">
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <Link
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-900"
                  href={`https://endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com/${item.Key}`}
                >
                  {item.Key?.split('/')[1]}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default GalleryPage;
