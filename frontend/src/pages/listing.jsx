import { Pagination } from "../components/pagination"
import { useState, useEffect } from "react"
import { getMovies } from "../services/http"
import { Spinner } from "../components/spinner"
import { Navbar } from "../components/navbar"
import { StackMovies } from '../components/stackMovies'
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

    const handlePageChange = (newPage) => {
        setSpinner(true)
        setNewPage(newPage)
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <Navbar />
                <Pagination page={listMovies} onChange={handlePageChange} />
                {spinner ? <Spinner /> :
                    <StackMovies listMovies={listMovies.content} />
                }
            </div>
        </div>
    )
}

export { PageListing }
