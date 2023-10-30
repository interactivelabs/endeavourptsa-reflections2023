import ImageGallery from '@/components/sections/ImageGallery';
import ImageModal from '@/components/UI/ImageModal/ImageModal';
import getServersUrl from '@/lib/getServerUrl';
import { ListObjectsV2CommandOutput } from '@aws-sdk/client-s3';

const getData = async () => {
  const serverUrl = getServersUrl();
  const response = await fetch(`${serverUrl}/api/gallery`);
  const { Contents } = (await response.json()) as ListObjectsV2CommandOutput;
  const items = Contents?.filter((item) => !!item.Size && item.Size > 0);

  return items;
};

const GalleryPage = async () => {
  const data = await getData();
  if (!data) return null;
  return (
    <main className="p-8">
      <ImageGallery images={data} />
    </main>
  );
};

export default GalleryPage;
