import { MovieCard } from './movieCard'

function StackMovies({listMovies}) {
  const movies = listMovies.map((movie) => {
    return <MovieCard key={movie.id} metadata={movie} />
})
  return (
    <div className="row p-4 row-cols-md-2 row-cols-lg-3">
    {movies}
    </div>
  )
}

export { StackMovies }
