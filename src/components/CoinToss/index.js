// Write your code here

import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state

    const toss = Math.floor(Math.random() * 2)

    let TossImage = ''

    let lastestHeadCount = headsCount

    let latestTailCount = tailsCount

    if (toss === 0) {
      TossImage = HEADS_IMG_URL
      lastestHeadCount += 1
    } else {
      TossImage = TAILS_IMG_URL
      latestTailCount += 1
    }

    this.setState({
      tossResultImage: TossImage,
      headsCount: lastestHeadCount,
      tailsCount: latestTailCount,
    })
  }

  getTotalTosses = () => {
    const {headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return totalCount
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = this.getTotalTosses()

    return (
      <div className="coin-toss-container">
        <div className="coin-toss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="toss-image" src={tossResultImage} alt="toss result" />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>

          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
