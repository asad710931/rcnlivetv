import { Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/slider.css';

import img1 from '../../../public/slider/1.png'
import img2 from '../../../public/slider/2.jpg'
import img3 from '../../../public/slider/3.jpg'
import img4 from '../../../public/slider/4.jpg'
import img5 from '../../../public/slider/5.jpg'
import img6 from '../../../public/slider/6.png'

// import required modules
import { Navigation,Autoplay,Pagination } from 'swiper/modules';

const MySlider = () => {
  //
   const sliderData=[
    {id:1,imgSource:img1.src,alt:'',title:''},
    {id:2,imgSource:img2.src,alt:'',title:''},
    {id:3,imgSource:img3.src,alt:'',title:''},
    {id:4,imgSource:img4.src,alt:'',title:''},
    {id:5,imgSource:img5.src,alt:'',title:''},
    {id:5,imgSource:img6.src,alt:'',title:''}
  ]
   console.log(sliderData)

  return (
    <>
    <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          style={{zIndex:1}}
      
    > { 
      sliderData.map((slide,index)=>(
        <SwiperSlide key={index}>
          <img class="swiper-gl-image" src={slide.imgSource} alt={slide.alt}/>
          <div class="swiper-slide-content">
            <div class="swiper-slide-title">{slide.title}</div>
          </div>
        </SwiperSlide>
      ))
    }
    </Swiper>
    </>
  );
};

export default MySlider 