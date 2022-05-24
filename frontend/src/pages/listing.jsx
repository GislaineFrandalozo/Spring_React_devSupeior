import { Pagination } from "../components/pagination"
import { MovieCard } from '../components/movieCard'
import { useState, useEffect } from "react"
import { getMovies } from "../services/http"
import { Spinner } from "../components/spinner"
import { Navbar } from "../components/navbar"

function PageListing() {
    const [spinner, setSpinner] = useState(true)
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
                setSpinner(false)
            })
            .catch((error) => { console.log(error) })
    }, [page])

    const handlePageChange = (newPage) => { setNewPage(newPage) }

    const movies = listMovies.content.map((movie) => {
        return <MovieCard key={movie.id} metadata={movie} />
    })
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <Navbar />
                <Pagination page={listMovies} onChange={handlePageChange} />
                {spinner === true && <Spinner />}
                <div className="row p-4 row-cols-md-2 row-cols-lg-3">
                    {spinner === false && movies}
                </div>
            </div>
        </div>
    )
}

export { PageListing }
