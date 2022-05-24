import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form } from "../components/form";
import { getMovie, putAssess } from "../services/http";
import { Navbar } from "../components/navbar";
import { Error } from "../components/error";
import { Alert } from "../components/alert";

function PageToAssess() {
    const feedback = "Endereço de email não é compatível. Exemplo: nome@email.com"
    const params = useParams()
    const navigate = useNavigate()
    const [alert, setAlert] = useState(false)
    const [stateForm, setStateForm] = useState(true)
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
                setStateForm(false)
                setMovie(res.data)
            })
            .catch(() => { setStateForm(true) })

    }, [params.movieId])
    const onClick = () => { setAlert(false) }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!/.+@.+\.com/.test(event.target[0].value)){
            setAlert(true)
            event.stopPropagation()
            return
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
                    {stateForm ? <Error /> :
                        <Form metadata={movie} onSubmit={handleSubmit} />
                    }
                </div>
                <div className="col-12">
                {alert === true && <Alert feedback={feedback} toggle={onClick} />}
                </div>
            </div>
        </div>)

}

export { PageToAssess }
