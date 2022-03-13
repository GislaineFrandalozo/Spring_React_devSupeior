import { useNavigate } from 'react-router-dom'
import MovieStars from './movieStars';

export default function MovieCard({
    metadata = {
        id: 0,
        image: "https://www.leadershipmartialartsct.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
        title: "Default",
        count: 0,
        score: 0
    }
}) {
    let navigate = useNavigate();
    const handleClick = () => { navigate(`form/${metadata.id}`); }
    return (
        <div className='col d-flex justify-content-center'>
            <div className="card m-2 " style={{ width: '25rem' }}>
                <img src={metadata.image} className="card-img-top" alt="..." />
                <div className="row row-cols-sm-1 card-body">
                    <div className="p-2">
                        <h5 className="card-title fs-5 text-center fw-bolder">{metadata.title}</h5>
                    </div>
                    <div className="bg-nfo">
                        <p className="text-center">{metadata.score > 0 ? metadata.score.toFixed(1) : '-'}</p>
                        <MovieStars score={metadata.score} />
                        <p className="text-center mt-3">{metadata.count} avaliações</p>
                    </div>
                    <div className='col align-self-end'>
                        <div className="d-flex justify-content-center p-2">
                            <button className="btn btn-dsmovie col-8" onClick={handleClick} >Avaliar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}