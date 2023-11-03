export default function getServersUrl() {
  if (typeof window !== 'undefined') {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}:${port}`;
  }

  return !!process.env.VERCEL
    ? `https://endeavourptsa-reflections2023.vercel.app`
    : 'http://localhost:3000';
}
