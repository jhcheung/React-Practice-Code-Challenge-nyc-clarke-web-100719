import React, {Fragment} from 'react'
const SushiWallet = ({ formType, balanceMethod }) => {


    const handleSubmit = (e) => {
        e.preventDefault()
        balanceMethod(e.target.money.value)
        e.target.reset()
    }
    

  return (
      <Fragment>
        <h4>{formType} Money</h4>
        <form onSubmit={handleSubmit}>
            <input defaultValue={null} type="number" name="money" />
            <input type="submit" value={`${formType} Money`}/>
        </form>
      </Fragment>
  )
}

export default SushiWallet