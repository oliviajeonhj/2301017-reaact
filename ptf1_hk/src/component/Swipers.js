import swiperDBjson from '../json/swipers.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay, Grid, Pagination } from 'swiper';
import { StarFill } from 'react-bootstrap-icons'; 


const Swipers = (props) => {
    const swiperinfo = swiperDBjson[props.section];

      return(
        <Swiper id={props.contentid}
        modules={[Navigation, Scrollbar, A11y, Autoplay, Grid, Pagination]}       
        // centeredSlides={true}
        autoplay={{ delay: props.delay , disableOnInteraction: false }}
        loop = {true}
        // scrollbar={props.scroll}
        breakpoints={props.bp}
        onSlideChange={() => {
          //슬라이드가 끝나고 실행
        }}
        onSwiper={(swiper) => console.log(swiper)}
         >
          {
            swiperinfo.map( ( item, index ) => {
                   return(
                    
                    <SwiperSlide className={item.slidecls} key={'swp'+index} style={{backgroundImage:item.bgImg}}>
                      <p className='rankstar'><StarFill/><StarFill/><StarFill/><StarFill/><StarFill/></p>
                      <strong>{item.userid}</strong>
                      <span>{item.userreview}</span>  
                    </SwiperSlide>
                   )
              }
            )
            
          }
        </Swiper>
      )
  }
  
  export default Swipers;