import './Carousel.css';
import ImageSlider from './ImageSlider/ImageSlider';
import { SliderData } from './ImageSlider/SliderData';

function Carousel() {
  return <ImageSlider slides={SliderData} />;
}

export default Carousel;
