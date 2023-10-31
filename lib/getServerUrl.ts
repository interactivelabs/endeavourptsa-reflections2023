export default function getServersUrl() {
  if (typeof window !== 'undefined') {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}:${port}`;
  }
  const baseUrl = process.env.VERCEL_URL;
  return !!baseUrl ? `https://${baseUrl}` : 'http://localhost:3000';
}
