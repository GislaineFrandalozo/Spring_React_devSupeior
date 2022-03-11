import Pagination from "../components/pagination";
import MovieCard from '../components/movieCard'
export default function Listing() {
    return(
        <>
        <Pagination />
    <div className="row m-4 row-cols-md-2 row-cols-lg-3">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
     </div>
        </>
        )
}