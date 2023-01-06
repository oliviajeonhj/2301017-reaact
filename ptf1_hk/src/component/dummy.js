import lecimg1 from '../../img/lecture/lec1.png';
import lecimg2 from '../../img/lecture/lec2.png';
import lecimg3 from '../../img/lecture/lec3.png';
import lecimg4 from '../../img/lecture/lec4.png';

const Lecture = () => {
  return(
 <div className="lectureSection container d-flex flex-wrap">
  <div className="col-6"><a href="https://hankkeutchayee.liveklass.com/classes/117661" target="_blank"><img src={lecimg1} alt="" /></a></div>
  <div className="col-6"><a href="https://hankkeutchayee.liveklass.com/classes/117661" target="_blank"><img src={lecimg2} alt="" /></a></div>
  <div className="col-6"><a href="https://hankkeutchayee.liveklass.com/classes/117661" target="_blank"><img src={lecimg3} alt="" /></a></div>
  <div className="col-6"><a href="https://hankkeutchayee.liveklass.com/classes/117661" target="_blank"><img src={lecimg4} alt="" /></a></div>
 </div>
  )
 
 }

 
 export default Lecture;