import styles from './Slider.module.scss';
import Container from '@/components/UI/Container/Container';
import Slide from '@/components/UI/Slide/Slide';
import { useWindowSize } from '@/hooks';
import { mobileMaxWidth } from '@/utils/constants';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function Slider() {
  const width = useWindowSize().width;
  return (
    <section className={styles.block}>
      <Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={width > mobileMaxWidth}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Slide
              source='/imgs/slider-photos/pump.webp'
              title='Аренда бетононасоса'
              text='В нашем парке есть вся необходимая техника, включая бетононасоcы. Предоставляем спец технику в аренду. Собственный автопарк, грамотно обученный персонал. Любая форма оплаты. Выезд специалиста на строительную площадку.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              video
              source='/imgs/slider-photos/pig.webm'
              title='Цены'
              text='Мы стремимся сделать нашу продукцию доступной для всех клиентов, независимо от объема заказа и сложности проекта. Мы предоставляем прозрачные и честные цены, без скрытых дополнительных расходов'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              source='/imgs/slider-photos/big-pump.webp'
              title='Гибкие условия аренды'
              text='Мы предлагаем гибкие условия аренды, чтобы удовлетворить потребности каждого клиента. Вы можете арендовать автобетононасосы на короткий или длительный срок, в зависимости от продолжительности вашего проекта.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              source='/imgs/slider-photos/tech.webp'
              title='Качественное и надежное оборудование'
              text='Мы гарантируем высокое качество и надежность нашего оборудования. Все наши автобетононасосы регулярно проходят проверку и обслуживание, чтобы быть в отличном состоянии перед каждой арендой. '
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
