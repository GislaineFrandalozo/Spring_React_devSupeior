 function Spinner() {
    return(
      <div className="row row-cols-1 d-flex mt-5 justify-content-center">
        <div className="col d-flex mt-5 justify-content-center">
      <div className="spinner-border color-font-dsmovie" role="status">
        <span className="sr-only"></span>
        </div>
      </div>
      <div className="col mt-2 color-font-dsmovie">
        <div className="text-center">Aguarde...</div>
      </div>
    </div>
  )
}

export { Spinner }
