import Head from 'next/head';
import { Inter } from '@next/font/google';
import Main from '@/components/pages/Main/Main';

const inter = Inter({ subsets: ['latin'] });
import { GTM_SCRIPT } from '@/utils/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Куб Бетона | Сервис доставки бетона</title>
        <meta
          name='description'
          content='Куб Бетона - первый удобный сервис доставки бетона и аренды техники. Если вас интересует доставка бетона или аренда спец техники в Ростове-на-Дону, то мы с радостью предоставим вам наши услуги и качественный сервис.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='yandex-verification' content='5251ee59c6efce0a' />
        <link rel='icon' href='/favicon.ico' />
        {GTM_SCRIPT}
      </Head>
      <Main />
    </>
  );
}
