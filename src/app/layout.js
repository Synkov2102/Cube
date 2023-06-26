// New: App Router ✨
// The root layout is shared for the entire application
import '../styles/globals.scss';
import { GTM_SCRIPT } from '@/utils/script';
import { Roboto } from 'next/font/google';
const inter = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title itemProp='headline'>
          Куб Бетона | Аренда автобетононасосов в Ростове-на-дону
        </title>
        <meta
          itemProp='description'
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
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
