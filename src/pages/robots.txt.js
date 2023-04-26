import _ from 'lodash';

const Sitemap = () => {};

export const getServerSideProps = ({ req, res }) => {
  const robots = `User-Agent: *
Allow: /*.png
Allow: /*.jpg
Allow: /_next/static/*.js
Allow: /_next/static/*.css
Sitemap: https://${req.headers.host}/sitemap.xml
`;
  res.setHeader('Content-Type', 'text/plain');

  res.write(robots);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
