import Advantages from '@/components/block/Advantages/Advantages';
import Header from '@/components/block/Header/Header';
import MainBanner from '@/components/block/MainBanner/MainBanner';
import Slider from '@/components/block/Slider/Slider';
import Pricing from '@/components/block/Pricing/Pricing';
import BottomBanner from '@/components/block/BottomBanner/BottomBanner';
import MobileCall from '@/components/UI/MobileCall/MobileCall';
import FormBlock from '@/components/block/FormBlock/FormBlock';

export default function Main() {
  return (
    <>
      <Header />
      <MainBanner />
      <Advantages />
      <Slider />
      <Pricing />
      <BottomBanner />
      <FormBlock />
      <MobileCall />
    </>
  );
}
