import Head from 'next/head';
import { Inter } from '@next/font/google';
import Main from '@/components/pages/Main/Main';

const inter = Inter({ subsets: ['latin'] });
import { GTM_SCRIPT } from '@/utils/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Куб Бетона | Аренда автобетононасосов в Ростове-на-дону</title>
        <meta
          name='description'
          content='Аренда бетононасосов: профессиональное оборудование для строительства и бетонных работ. Мы предлагаем широкий выбор бетононасосов различной грузоподъемности и дальности подачи бетона. Наша компания специализируется на предоставлении надежного и качественного оборудования, гарантируя его безупречную работу на строительных площадках. Своевременная доставка, профессиональный монтаж и техническая поддержка обеспечивают эффективность и безопасность вашего проекта. Свяжитесь с нами сегодня и получите доступ к надежным бетононасосам, которые помогут вам достичь успеха в строительстве.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='yandex-verification' content='5251ee59c6efce0a' />
        <link
          rel='icon'
          href='https://www.cubeton.ru/favicon.ico'
          type='image/x-icon'
        />
        {GTM_SCRIPT}
      </Head>
      <Main />
    </>
  );
}
