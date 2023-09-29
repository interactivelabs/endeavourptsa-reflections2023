import Container from '../Container';

const BannerVideo = () => (
  <section id="banner-video" className="my-28">
    <Container>
      <iframe
        className="aspect-video w-full"
        src="https://www.youtube.com/embed/MuaoV5TyfBI?si=xQOLG6BlkC4VyHpe"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Container>
  </section>
);

export default BannerVideo;
