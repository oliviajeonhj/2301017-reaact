import gridDBjson from '../../json/swipers.json';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper";

import {HeartFill} from 'react-bootstrap-icons'

function Gridswp(props) {

  const gridswpDb = gridDBjson[props.section]
  return (
    <Swiper id={props.contentid}
        slidesPerView={3}
        grid={{
          rows: 2
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper container"
      >
        {
            gridswpDb.map( ( item, index ) => {
                   return(
                    
                    <SwiperSlide className={item.slidecls} style={{backgroundImage:item.bgImg}}>
                      <span className="hearticon"><HeartFill /></span>
                      <p>{item.text}</p>
                    </SwiperSlide>
                   )
              }
            )
            
          }

        </Swiper>
      )
  }




export default Gridswp;