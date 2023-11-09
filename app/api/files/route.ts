import { getClient } from '@/lib/aws-s3/client';
import { getConfig } from '@/lib/aws-s3/config';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';

export async function GET() {
  const config = getConfig();
  const client = getClient(config);
  const { bucket } = config;

  const params = {
    Bucket: bucket,
    Prefix: 'uploads/',
  };

  const command = new ListObjectsV2Command(params);
  const response = await client.send(command);

  const { Contents } = response;

  return NextResponse.json({ Contents }, { status: 200 });
}
