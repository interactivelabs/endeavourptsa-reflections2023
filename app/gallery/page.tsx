'use server';

import ArtGallery from '@/components/sections/ArtGallery';
import getServersUrl from '@/lib/getServerUrl';
import { ListObjectsV2CommandOutput } from '@aws-sdk/client-s3';

// const getData = async () => {
//   const serverUrl = getServersUrl();
//   const response = await fetch(`${serverUrl}/api/gallery`);
//   const { Contents } = (await response.json()) as ListObjectsV2CommandOutput;
//   const items = Contents?.filter((item) => !!item.Size && item.Size > 0);

//   return items;
// };

const GalleryPage = async () => {
  // const data = await getData();
  // if (!data) return null;
  return (
    <main className="p-8">
      {/* <ArtGallery images={data} /> */}
      Gallery Page
    </main>
  );
};

export default GalleryPage;
