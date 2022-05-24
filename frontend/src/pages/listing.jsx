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
                const dataResponse = res.data
                setListMovies({
                    content: dataResponse.content,
                    last: dataResponse.last,
                    totalPages: dataResponse.totalPages,
                    totalElements: dataResponse.totalElements,
                    size: dataResponse.size,
                    number: dataResponse.number,
                    first: dataResponse.first,
                    numberOfElements: dataResponse.numberOfElements,
                    empty: dataResponse.empty
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
                <div className="col-12">
                <Pagination page={listMovies} onChange={handlePageChange} />
                {spinner ? <Spinner /> :
                    <StackMovies listMovies={listMovies.content} />
                }
                </div>
            </div>
        </div>
    )
}

export { PageListing }
