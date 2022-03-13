import axios from "axios"
import Pagination from "../components/pagination"
import MovieCard from '../components/movieCard'
import { BASE_URL } from "../utils/requests"
import { useEffect } from "react"

async function request() {
    return new Promise(() => {
        axios.get(`${BASE_URL}/movies`).then(res => { console.log(res) })
    })
}

export default function Listing() {
    
    console.log("YYYYYYYYYYY")
    useEffect(() => {
        request()
        console.log("XXXXXXXXXX")
    }, [

    ]
    )

    
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