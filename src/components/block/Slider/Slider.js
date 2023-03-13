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
              image='/imgs/slider-photos/pig.gif'
              title='Цены'
              text='Мы предлагаем конкурентные цены на наши услуги по производству и доставке бетона. Мы стремимся сделать нашу продукцию доступной для всех клиентов, независимо от объема заказа и сложности проекта. Мы предоставляем прозрачные и честные цены, без скрытых дополнительных расходов'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image='/imgs/slider-photos/concrete.jpg'
              title='Продукция'
              text='Мы предлагаем широкий ассортимент бетона различных марок и пропорций, адаптированных к конкретным потребностям заказчика. Наши смеси производятся на высокотехнологичном оборудовании, что гарантирует их качество и прочность. Наша продукция соответствует всем нормам и правилам, и имеет соответствующие сертификаты и документы.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image='/imgs/slider-photos/road.gif'
              title='Доставка'
              text='Мы гарантируем точную и своевременную доставку нашей продукции на объект заказчика. Наша транспортная логистика позволяет обеспечить эффективную и быструю доставку бетона на любой объект в городе и регионе. Мы готовы доставлять бетон в удобное для заказчика время, включая выходные и праздничные дни.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image='/imgs/slider-photos/mixer.jpg'
              title='Услуги'
              text='Мы предоставляем полный спектр услуг по производству и доставке бетона. Мы готовы выполнить заказы любой сложности, а также предоставляем консультации по выбору марки и пропорций бетона, анализу характеристик грунта и условий производства. Мы гарантируем индивидуальный подход к каждому заказчику и высокий уровень обслуживания.'
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
