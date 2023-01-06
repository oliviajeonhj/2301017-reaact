import {Instagram, Youtube, Tiktok} from 'react-bootstrap-icons'

const Footer = () =>{
  return(
    <footer id="footer" className="py-5 border-top d-flex flex-column align-items-center">
      <div>hankkeutchayee</div>
      <div>대표 : 사진한끗차이</div>
      <div>사업자등록번호 : 5104500866</div>
      <div>통신판매업 신고번호 : 2022-경기김포-2945</div>
      <div>이메일 : hankkeutchayee@gamil.com</div>
      <div> 개인정보책임자 성함 : 사진한끗차이 </div>

      <ul className="icons d-flex">
        <li className='px-3'><a href="#none"><Instagram /></a></li>
        <li className='px-3'><a href="#none"><Youtube /></a></li>
        <li className='px-3'><a href="#none"><Tiktok /></a></li>
      </ul>
    </footer>
  )
}

export default Footer;