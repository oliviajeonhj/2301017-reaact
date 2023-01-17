import { Link } from "react-router-dom";
import naviDBjson from '../json/allDB.json';
import Scrollspy from "react-scrollspy";

function Navi(props){

    const naviDb = naviDBjson.allData;
    return(
      <div>
        <Scrollspy className={ 'd-md-flex mb-0 gnb_ul ' +  props.toggle } >                
        {
          naviDb.naviDB.map( (item, index) => {
            const clsArr = item.navi.cls.join(" ");
            return (
              item.navi.naviType===!"a"?
              (<li key={'navi'+index} className={clsArr}><Link to={item.navi.naviLink} >{item.navi.naviTitle}</Link></li>) : 
              (<li key={'navi'+index} className={clsArr}><a href={item.navi.naviLink} >{item.navi.naviTitle}</a></li>)
            )
          })
        }

        </Scrollspy>
        {/* <ul>
        {
          naviDb.snsDB.map( (item, index) => {
            return(
                <li key={'sns'+index} className={item.sns.cls}><a href={item.sns.href} target={item.sns.tar}>{item.sns.icon}</a></li>
                )
              })
        }
        </ul> */}
      </div>

      //   <Scrollspy className={ 'd-md-flex mb-0 gnb_ul ' + props.cls + ' ' + props.toggle } 
      //   items={[naviDb.naviDB[0].naviLink,naviDb[1].naviLink,naviDb[2].naviLink] } currentClassName="is-current">
      //   {
      //     naviDb.map((item, index) =>{
      //       return(
      //         <li id={ 'naivID'+index } key={ 'naivID'+index } ><a href={item.naviLink} className="text-decoration-none ps-md-3 pe-md-0 px-3">{item.naviTitle}</a></li>
      //       )
      //     }
      //     )
            
      //   }
      // </Scrollspy>
    )
  }

  export default Navi;