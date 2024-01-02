import Head from 'next/head';
import IframeResizer from 'iframe-resizer-react';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <IframeResizer src="https://truongngoc-wedding.iwedding.info/" style={{ width: '100%'}} /> */}
      {/* <iframe src="https://truongngoc-wedding.iwedding.info/" /> */}
      <div class="container">
        <iframe
          class="responsive-iframe"
          src="https://truongngoc-wedding.iwedding.info"
        ></iframe>
      </div>
    </Layout>
  );
}
