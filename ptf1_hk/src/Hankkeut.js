import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Header from './component/Header';
import Swipers from './component/Swipers';
import Intro from './component/routes/Intro'
import Gridswp from './component/routes/Gridswp'
import Notice from './component/Notice';
import Qna from './component/Qna';
import Request from './component/Request';
import Footer from './component/Foorter';


function Hankkeut() {
  return (
    <BrowserRouter>
   
    <Header />
    <Swipers contentid="banner" title="banner" section="bannerSection"  delay="4000" row="3" sb="10" bp={{
          768:{ slidesPerView: 1 },
          1024:{ slidesPerView: 1 }
        }} />
    
    <nav>
      <Link to={"/"}>소개 </Link>
      <Link to={"/lecture"}>강의 </Link>
      <Link to={"/gallery"}>갤러리</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/lecture" element={<Gridswp contentid="lecture" section="lectureSection" />} />
      <Route path="/gallery" element={<Gridswp contentid="gallery" section="gallerySection" />} />
    </Routes>

    <Swipers contentid="review" title="Review" section="reviewSection" delay="6000" row="1" sb="0" scroll="false" bp={{
          768:{ slidesPerView: 2},
          1024:{ slidesPerView: 3 }
        }} />
    <Notice />
    <Qna />
    <Request />
    <Footer />
    </BrowserRouter>
  );
}



export default Hankkeut;
