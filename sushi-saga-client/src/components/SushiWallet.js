import React, {Component, Fragment} from 'react'

class SushiWallet extends Component {

  state = {
    money: ""
  }

  handleChange = (e) => {
    this.setState({money: parseInt(e.target.value, 10)})
  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.balanceMethod(this.state.money)
      this.setState({ money: "" })
  }
    

  render () {
    const { formType } = this.props
    return (
        <Fragment>
          <h4>{formType} Money</h4>
          <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} value={this.state.money} type="number" name="money" />
              <input type="submit" value={`${formType} Money`}/>
          </form>
        </Fragment>
    )
  }
}

export default SushiWallet