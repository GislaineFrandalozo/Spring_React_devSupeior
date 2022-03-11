import { ReactComponent as ArrowLeft} from '../assets/img/arrow_left.svg'
import { ReactComponent as ArrowRight} from '../assets/img/arrow_right.svg'

export default function Pagination() {
    return(
    <div className="row m-3 align-items-center justify-content-center">
        <div className="col-1 d-flex justify-content-end ">
        <button type="button" class="btn btn-light" disabled={true} >
            <ArrowLeft />
        </button>
        </div>
        <div  className="col-1 justify-content-center">
        <div class="color-font-dsmovie text-center" >{`${1} de ${3}`}</div>    
        </div>
        <div className="col-1">
        <button type="button" class="btn btn-light" disabled={false} >
            <ArrowRight className="dsmovie-flip-horizontal" />
        </button>
        </div>
    </div>
    )
}