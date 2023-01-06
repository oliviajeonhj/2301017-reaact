import naviDBjson from '../json/allDB.json';
import Scrollspy from "react-scrollspy";

function Navi(props){
    const naviDb = naviDBjson.naviDB;
    return(
        <Scrollspy className={ 'd-md-flex mb-0 gnb_ul ' + props.cls + ' ' + props.toggle } items={[naviDb[0].naviLink,naviDb[1].naviLink,naviDb[2].naviLink] } currentClassName="is-current">
     
        {
          naviDb.map((item, index) =>{
            return(
              <li id={ 'naivID'+index } key={ 'naivID'+index } ><a href={item.naviLink} className="text-decoration-none ps-md-3 pe-md-0 px-3">{item.naviTitle}</a></li>
            )
          }
          )
            
        }
      </Scrollspy>
    )
  }

  export default Navi;