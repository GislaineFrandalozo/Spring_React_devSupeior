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
        <div class="card m-2 " style={{ width: '25rem' }}>
            <img src={movie.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <div class="d-flex justify-content-center p-2">
                    <h5 class="card-title fs-5 fw-bolder">{movie.title}</h5>
                </div>
                <div class="bg-nfo">
                    <p className=" text-center">{movie.score > 0 ? movie.score.toFixed(1) : '-'}</p>
                    <MovieStars />
                    <p className=" text-center mt-3">{movie.count} avaliações</p>
                </div>
                <Link class="d-flex justify-content-center p-2" to="/from/1">
                    <button class="btn btn-dsmovie col-8">Avaliar</button>
                </Link>
            </div>
        </div>
        </div>
    )
}