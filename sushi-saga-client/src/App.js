import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiIndex: 0,
    balance: 100,
    eatenSushi: {}
  }

  fetchSushi = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ sushis: data })
      })
  }

  buySushi = (boughtSushi) => {
    this.setState(prevState => {
      if (prevState.balance < boughtSushi.price) {
        alert("You can't afford this sushi!")
      } else if (prevState.eatenSushi[boughtSushi.id]) {
        alert("You already bought this!")
      } else {
        return {
          balance: prevState.balance - boughtSushi.price,
          eatenSushi: {...prevState.eatenSushi, [boughtSushi.id]: true}
        }
      }
      }
    )
  }

  moreSushi = () => {
    this.setState(prevState => {
      if (prevState.sushiIndex + 4 >= prevState.sushis.length) {
        return {
          sushiIndex: 0
        }
      } else {
        return {
          sushiIndex: prevState.sushiIndex + 4
        }
      }
    })
  }

  componentDidMount() {
    this.fetchSushi()
  }

  depositBalance = (amount) => {
    this.setState(prevState => {
      return {
        balance: prevState.balance + parseInt(amount, 10)
      }
    })
  }

  withdrawBalance = (amount) => {
    this.setState(prevState => {
      if (prevState.balance >= amount) {
        return {
          balance: prevState.balance - parseInt(amount, 10)
        }
      } else {
        alert("You can't withdraw more money than you have!")
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} sushiIndex={this.state.sushiIndex} moreSushi={this.moreSushi} buySushi={this.buySushi} eatenSushi={this.state.eatenSushi}/>
        <Table eatenSushi={this.state.eatenSushi} balance={this.state.balance}/>
        <SushiWallet formType="Deposit" balanceMethod={this.depositBalance} /><br />
        <SushiWallet formType="Withdraw" balanceMethod={this.withdrawBalance} />
      </div>
    );
  }
}

export default App;