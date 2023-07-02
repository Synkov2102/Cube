import Advantages from '@/components/block/Advantages/Advantages';
import MainBanner from '@/components/block/MainBanner/MainBanner';
import Slider from '@/components/block/Slider/Slider';
import Pricing from '@/components/block/Pricing/Pricing';
import BottomBanner from '@/components/block/BottomBanner/BottomBanner';
import MobileCall from '@/components/UI/MobileCall/MobileCall';
import FormBlock from '@/components/block/FormBlock/FormBlock';
import Modal from '@/components/UI/Modal/Modal';

import {
  topAdvantages,
  topAdvantagesTitle,
  bottomAdvantages,
  bottomAdvantagesTitle,
} from '@/utils/constants';

export default function Main() {
  return (
    <>
      <MainBanner />
      <Advantages title={topAdvantagesTitle} advantages={topAdvantages} />
      <Slider />
      <Pricing />
      <Advantages title={bottomAdvantagesTitle} advantages={bottomAdvantages} />
      <BottomBanner />
      <FormBlock />
      <MobileCall />
      <Modal />
    </>
  );
}
