import axios from "axios"
import { BASE_URL } from "../utils/requests"

async function getMovies(page) {
    return axios.get(`${BASE_URL}/movies?size=8&sort=id,desc&page=${page}`)
}

async function getMovie(param) {
    return axios.get(`${BASE_URL}/movies/${param}`)
}

async function putAssess(form) {
    const data = {
        email: form.email,
        movieId: form.movieId,
        score: form.score
    }
    return new Promise((resolve, reject) => {
        axios.put(`${BASE_URL}/scores`, data)
            .then(res => { resolve(res) })
            .catch(error => {
                reject(error)
            })
    })
}

export { getMovies, getMovie, putAssess }
