import { Link } from "react-router-dom"

export default function Form() {
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
    return (
        <div className="d-flex justify-content-center m-4">

            <div className="card " style={{ width: '35rem' }}>
                <img src={movie.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex justify-content-center p-2">
                        <h5 className="card-title fs-5 fw-bolder">{movie.title}</h5>
                    </div>
                    <form classNameName="mb-2">
                        <div className="mb-2 mt-2">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label text-secondary">Informe seu email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label text-secondary">Informe sua avaliação</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center p-1">
                            <button type="submit" className="btn btn-dsmovie col-6">Salvar</button>
                        </div>
                    </form>
                    <Link className="d-flex justify-content-center p-1" to="/">
                        <button className="btn btn-dsmovie col-6">Cancelar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}