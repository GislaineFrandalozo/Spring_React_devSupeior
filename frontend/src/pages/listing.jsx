import Pagination from "../components/pagination"
import MovieCard from '../components/movieCard'
import { useState, useEffect } from "react"
import { getMovies } from "../services/http"
import { PlaceholderCard } from "../components/placeholderCard"

export default function Listing() {
    const [page, setNewPage] = useState(0)
    const [listMovies, setListMovies] = useState({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 8,
        number: -1,
        first: true,
        numberOfElements: 0,
        empty: true
    })
    useEffect(() => {
        getMovies(page)
            .then((res) => {
                setListMovies({
                    content: res.content,
                    last: res.last,
                    totalPages: res.totalPages,
                    totalElements: res.totalElements,
                    size: res.size,
                    number: res.number,
                    first: res.first,
                    numberOfElements: res.numberOfElements,
                    empty: res.empty
                })
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
                {movies.length === 0 ? <PlaceholderCard /> : movies}
            </div>
        </>
    )
}