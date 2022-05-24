
import { getFills } from '../methods/getFills'
import { StarFill } from '../methods/starFills'

function MovieStars({ score }) {
  const createStars = getFills(score)

  return (
    <div className="row justify-content-center">
      <div className="col-1 p-1">
        {StarFill(createStars[0])}
      </div>
      <div className="col-1 p-1">
        {StarFill(createStars[1])}
      </div>
      <div className="col-1 p-1">
        {StarFill(createStars[2])}
      </div>
      <div className="col-1 p-1">
        {StarFill(createStars[3])}
      </div>
      <div className="col-1 p-1">
        {StarFill(createStars[4])}
      </div>
    </div>
  )
}
export { MovieStars }