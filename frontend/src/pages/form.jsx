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
        <div class="d-flex justify-content-center m-4"> 
       
        <div class="card " style={{ width: '35rem'}}>
            <img src={movie.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <div class="d-flex justify-content-center p-2">
                <h5 class="card-title fs-5 fw-bolder">{movie.title}</h5>
                </div>
                <form className="mb-2"> 
                <div class="mb-2 mt-2">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-secondary">Informe seu email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-secondary">Informe sua avaliação</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"  />
                </div>
                </div>
                <div  class="d-flex justify-content-center p-1">
                <button type="submit" class="btn btn-primary col-6">Salvar</button>
                </div>
                </form>
               <Link  class="d-flex justify-content-center p-1" to="/">
               <button class="btn btn-primary col-6">Cancelar</button>
               </Link>
            </div>
        </div>
        </div>
    )
}