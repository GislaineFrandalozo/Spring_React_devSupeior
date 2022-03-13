import axios from "axios"
import { BASE_URL } from "../utils/requests"

export async function getMovies(page) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/movies?size=8&sort=id,desc&page=${page}`)
            .then(res => { resolve(res.data) })
            .catch(error => { reject(error) })
    })
}

export async function getMovie(param) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/movies/${param}`)
            .then(res => { resolve(res.data) })
            .catch(error => { reject(error) })
    })
}

export async function putAssess(form) {

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