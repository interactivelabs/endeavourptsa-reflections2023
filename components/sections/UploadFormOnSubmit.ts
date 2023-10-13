import { getUploadUrl } from '@/lib/aws-s3/utils';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { IUploadFormValues } from './UploadForm';

export interface IGetUploadFormOnSubmit {
  onComplete: () => void;
  onError: (err: Error) => void;
  onStart: () => void;
  setIsUploading: Dispatch<SetStateAction<boolean>>;
  setArtworkUploadProgress: Dispatch<SetStateAction<number>>;
  setPacketUploadProgress: Dispatch<SetStateAction<number>>;
}

export default function getUploadFormOnSubmit({
  onComplete,
  onError,
  onStart,
  setArtworkUploadProgress,
  setPacketUploadProgress,
}: IGetUploadFormOnSubmit) {
  const onSubmit: SubmitHandler<IUploadFormValues> = async (data) => {
    onStart();

    const { studentName, category } = data;
    const artwork = data.artwork[0];
    const packet = data.packet[0];
    const artworkUrl = await fetch(
      getUploadUrl(artwork, 'artwork', studentName, category),
    ).then((res) => res.json());

    const packetUrl = await fetch(
      getUploadUrl(packet, 'packet', studentName, category),
    ).then((res) => res.json());

    function sendUploadRequest(
      url: string,
      file: File,
      setProgress: Dispatch<SetStateAction<number>>,
    ) {
      const uploadPromise = new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);
        const request = new XMLHttpRequest();
        request.open('PUT', url);
        // upload progress event
        request.upload.addEventListener('progress', function (e) {
          const progress = Math.round((e.loaded / e.total) * 100);
          setProgress(progress);
        });
        // request finished event
        request.addEventListener('load', function () {
          if (request.status === 200) {
            resolve({ success: true });
          } else reject(new Error(`Upload failed ${file.name}`));
        });
        request.send(formData);
      });
      return uploadPromise;
    }

    const p1 = sendUploadRequest(
      artworkUrl.url,
      artwork,
      setArtworkUploadProgress,
    );
    const p2 = sendUploadRequest(
      packetUrl.url,
      packet,
      setPacketUploadProgress,
    );

    Promise.all([p1, p2])
      .then(() => onComplete())
      .catch(onError);
  };

  return onSubmit;
}
