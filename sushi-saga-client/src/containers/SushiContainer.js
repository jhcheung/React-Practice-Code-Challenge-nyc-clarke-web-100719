import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, sushiIndex, moreSushi, buySushi, eatenSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.slice(sushiIndex, sushiIndex + 4).map(sushi => <Sushi sushi={ sushi } key={ sushi.id } buySushi={buySushi} eaten={eatenSushi[sushi.id]}/>)
        }
        <MoreButton moreSushi={moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer