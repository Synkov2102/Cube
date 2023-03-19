import Head from 'next/head';
import { Inter } from '@next/font/google';
import Main from '@/components/pages/Main/Main';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Куб Бетона | Сервис доставки бетона</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main></Main>
    </>
  );
}
