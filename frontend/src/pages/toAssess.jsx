import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form } from "../components/form";
import { getMovie, putAssess } from "../services/http";
import { Navbar } from "../components/navbar";
import { Error } from "../components/error";

function PageToAssess() {
    const params = useParams()
    const navigate = useNavigate()
    const [state, setState] = useState(true) 
    const [movie, setMovie] = useState({
        id: 0,
        image: "https://www.leadershipmartialartsct.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
        title: "Default",
        count: 0,
        score: 0
    })
    useEffect(() => {
        getMovie(params.movieId)
            .then(res => {
                setState(false)
                setMovie(res.data)
            })
            .catch(() => { setState(true) })

    }, [params.movieId])

    const handleSubmit = (event) => {
        event.preventDefault()
        for (let imput = 0; imput < 1; imput++) {
            let imputTag = event.target[imput]
            if (imputTag.checkValidity() === false) {
                event.stopPropagation()
            }
        }
        if (event.target[1].value > 5.0) {
            console.log(event.target[1].value)
            throw alert("Erro o valor deve ser menor ou igual a 5.0")

        }
        const config = {
            email: event.target[0].value,
            movieId: movie.id,
            score: event.target[1].value
        }
        putAssess(config)
            .then(res => {
                navigate(`/`)
            })
            .catch(res => {
                console.log(res)
            })
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <Navbar />
                <div className="col-12">
                {state ? <Error /> :
                <Form metadata={movie} onSubmit={handleSubmit} />
                }
                </div>
            </div>
        </div>)

}

export { PageToAssess }
