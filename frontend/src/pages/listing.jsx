import axios from "axios"
import Pagination from "../components/pagination"
import MovieCard from '../components/movieCard'
import { BASE_URL } from "../utils/requests"
export default function Listing() {

    axios.get(`${BASE_URL}/movies`).then(res => { console.log(res) })
    
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