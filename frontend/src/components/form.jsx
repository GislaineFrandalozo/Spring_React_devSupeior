import { useNavigate } from 'react-router-dom'
export default function Form({
    metadata = {
        id: 0,
        image: "https://www.leadershipmartialartsct.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
        title: "Default",
        count: 0,
        score: 0
    },
    onSubmit
}) {
    let navigate = useNavigate();
    const handleClick = () => { navigate(`/`); }
    return (
        <div className="d-flex justify-content-center m-4">

            <div className="card " style={{ width: '35rem' }}>
                <img src={metadata.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-center p-2">
                        <h5 className="card-title fs-5 fw-bolder">{metadata.title}</h5>
                    </div>
                    <form className="mb-2" onSubmit={onSubmit}>
                        <div className="mb-2 mt-2">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label text-secondary">Informe seu email</label>
                                <input required pattern='.+@.+\.com' type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label text-secondary">Informe sua avaliação</label>
                                <input required pattern='[0-5]{1}[.][0-9]{1}' type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center p-1">
                            <button type="submit" className="btn btn-dsmovie col-6">Salvar</button>
                        </div>
                    </form>
                    <div className="d-flex justify-content-center p-1">
                        <button className="btn btn-dsmovie col-6" onClick={handleClick}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}