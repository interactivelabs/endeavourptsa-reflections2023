import { getClient } from '@/lib/aws-s3/client';
import { getConfig } from '@/lib/aws-s3/config';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');
  const studentName = searchParams.get('studentName');
  const category = searchParams.get('category');
  const filetype = searchParams.get('filetype');
  const kindOfFile = searchParams.get('kindOfFile');

  if (!studentName || !category || !filetype || !kindOfFile) {
    return NextResponse.json({ error: 'missing data' }, { status: 400 });
  }

  const config = getConfig();
  const client = getClient(config);
  const { bucket } = config;

  const key = `uploads/${studentName}-${category}-${kindOfFile}-${Date.now()}-${name}`;

  const params = {
    Bucket: bucket,
    Key: key,
    ContentType: filetype as string,
  };

  const url = await getSignedUrl(client, new PutObjectCommand(params), {
    expiresIn: 3600,
  });

  return NextResponse.json({ url }, { status: 200 });
}
