import _ from 'lodash';

const Sitemap = () => {};

export const getServerSideProps = ({ req, res }) => {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://' + _.get(req, 'headers.host'),
  }[process.env.NODE_ENV];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd">
  <url>
    <loc>https://www.cubeton.ru/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
