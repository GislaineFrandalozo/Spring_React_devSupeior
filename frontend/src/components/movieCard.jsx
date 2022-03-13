import { Link } from 'react-router-dom'
import MovieStars from './movieStars';

export default function MovieCard() {
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
    return (
        <div className='col d-flex justify-content-center'>
        <div className="card m-2 " style={{ width: '25rem' }}>
            <img src={movie.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="d-flex justify-content-center p-2">
                    <h5 className="card-title fs-5 fw-bolder">{movie.title}</h5>
                </div>
                <div className="bg-nfo">
                    <p className=" text-center">{movie.score > 0 ? movie.score.toFixed(1) : '-'}</p>
                    <MovieStars />
                    <p className=" text-center mt-3">{movie.count} avaliações</p>
                </div>
                <Link className="d-flex justify-content-center p-2" to="/form/1">
                    <button className="btn btn-dsmovie col-8">Avaliar</button>
                </Link>
            </div>
        </div>
        </div>
    )
}