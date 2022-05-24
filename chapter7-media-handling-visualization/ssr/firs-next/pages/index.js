import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, Im Shu. Im a software engineer and a translator (English/Japanese). You can contact me on {' '}
          <a href="https://twitter.com/chibicode">Twitter.</a>
        </p>
        <p>
          (This is a sample website - youll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.) 
        </p>
      </section>
    </Layout>
  );
}