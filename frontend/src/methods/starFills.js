import { ReactComponent as StarFull } from '../assets/img/star_full.svg'
import { ReactComponent as StarHalf } from '../assets/img/star_half.svg'
import { ReactComponent as StarEmpty } from '../assets/img/star_empty.svg'

export function StarFill(star) {
    if (star === 0) {
        return <StarEmpty />
    } else if (star === 1) {
        return <StarFull />
    } else if (star === 0.5) {
        return <StarHalf />

    }
}