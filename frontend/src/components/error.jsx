import { useNavigate } from "react-router-dom";

function Error() {
  let navigate = useNavigate();
  const handleClick = () => { navigate(`/`); }
  return (
    <div className="row row-cols-1 justify-content-center">
      <div className="col-auto mt-5">
        <p className="text-center p-5">
          <strong>:(</strong>
          <br/>
          <br/>
          <em>Essa página não tem contéudo algum.</em> 
        </p>
      </div>
      <div className="col mt-3">
        <div className="d-flex justify-content-center p-1">
          <button className="btn btn-dsmovie" onClick={handleClick}>Voltar ao início da página</button>
        </div>
      </div>
    </div>
  )
}

export { Error }
