export function PlaceholderCard() {
  const srcImg = "https://macmagazine.com.br/wp-content/uploads/2013/11/18-cinza.png"
  return(
    <div className="card" aria-hidden="true">
  <img src={srcImg} className="card-img-top" alt="" />
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className="placeholder col-6"></span>
    </h5>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>
    <div >
      <button tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></button>
    </div>
  </div>
</div>
  )
}