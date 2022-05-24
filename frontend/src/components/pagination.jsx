import { ReactComponent as ArrowLeft} from '../assets/img/arrow_left.svg'
import { ReactComponent as ArrowRight} from '../assets/img/arrow_right.svg'

function Pagination({page, onChange}) {
   // const handleClick = () => {page}
    return(
    <div className="row m-3 align-items-center justify-content-center">
        <div className="col-1 d-flex justify-content-end ">
        <button type="button" onClick={() => onChange(page.number - 1)} className="btn btn-light" disabled={page.first} >
            <ArrowLeft />
        </button>
        </div>
        <div className="col-1 ">
        <div className="m-1 color-font-dsmovie text-center">
            {`${page.number + 1}`}
        </div>
        <div className="color-font-dsmovie text-center" > de </div>    
        <div className="m-1 color-font-dsmovie text-center">
            {`${page.totalPages}`}
        </div>
        </div>
        <div className="col-1">
        <button type="button" onClick={() => onChange(page.number + 1)} className="btn btn-light" disabled={page.last} >
            <ArrowRight className="dsmovie-flip-horizontal" />
        </button>
        </div>
    </div>
    )
}

export { Pagination }
