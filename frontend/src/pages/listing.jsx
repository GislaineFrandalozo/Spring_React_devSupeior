import Pagination from "../components/pagination"
import MovieCard from '../components/movieCard'
import { useState, useEffect } from "react"
import { getMovies } from "../services/http"

export default function Listing() {
    const vazio = <p></p>
    const [page, setNewPage] = useState(0)
    const [listMovies, setListMovies] = useState({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 8,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    })
    useEffect(() => {
        getMovies(page)
            .then((res) => {
                setListMovies(res)
            })
            .catch((error) => { console.log(error) })
    }, [page])

    const handlePageChange = (newPage) => { setNewPage(newPage) }

    const movies = listMovies.content.map((movie) => {
        return <MovieCard key={movie.id} metadata={movie} />
    })
    return (
        <>
            <Pagination page={listMovies} onChange={handlePageChange} />
            <div className="row m-4 row-cols-md-2 row-cols-lg-3">
                {movies.length === 0 ? vazio : movies}
            </div>
        </>
    )
}