import React, { Fragment } from 'react'
const Sushi = ({ sushi, buySushi, eaten }) => {

  return (
    <Fragment>
      <div className="sushi">
        <div className="plate" 
            onClick={() => buySushi(sushi)}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            eaten ?
              null
            :
              <img src={ sushi.img_url } alt= { sushi.name } width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          { sushi.name } - ${ sushi.price }
        </h4>
      </div>
    </Fragment>
  )
}

export default Sushi