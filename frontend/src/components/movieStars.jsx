import { ReactComponent as StarFull } from '../assets/img/star_full.svg'
import { ReactComponent as StarHalf } from '../assets/img/star_half.svg'
import { ReactComponent as StarEmpty } from '../assets/img/star_empty.svg'


export default function MovieStars() {
   
    return(
       <div className="row justify-content-center">
           <div className="col-1 p-1">
               <StarFull />
               </div>
           <div className="col-1 p-1">
           <StarFull />
               </div>
           <div className="col-1 p-1">
           <StarHalf />
               </div>
           <div className="col-1 p-1">
           <StarEmpty />
               </div>
           <div className="col-1 p-1">
           <StarEmpty />
               </div>
       </div>
    )
}