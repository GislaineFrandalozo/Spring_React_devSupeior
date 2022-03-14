export function PlaceholderCard() {
  const srcImg = "https://macmagazine.com.br/wp-content/uploads/2013/11/18-cinza.png"
  return(
    <div class="card" aria-hidden="true">
  <img src={srcImg} class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <div >
      <button tabindex="-1" class="btn btn-primary disabled placeholder col-6"></button>
    </div>
  </div>
</div>
  )
}