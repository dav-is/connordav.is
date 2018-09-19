import React from 'react'
import Router from 'next/router'
import getElementAbsolutePos from '../helpers/getElementAbsolutePos'

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.card = React.createRef();
    this.hiddenCard = React.createRef();
  }

  handleClick(location) {
    return e => {
      e.preventDefault()
      e.stopPropagation()

      this.card.current.style.transition = 'none'
      const card = this.card.current.getBoundingClientRect()

      this.hiddenCard.current.style.top = `${card.y}px`
      this.hiddenCard.current.style.bottom = `${card.y}px`
      this.hiddenCard.current.style.right = `${card.x}px`
      this.hiddenCard.current.style.left = `${card.x}px`

      this.hiddenCard.current.style.display = 'flex'
      this.card.current.style.opacity = '0'

      setTimeout(() => this.hiddenCard.current.classList.add("explode"), 5)

      setTimeout(() => Router.push(location), 750);
    }
  }

  render() {
    return <div>
      <div className='card' ref={this.card} onClick={this.handleClick(this.props.location)}>
        <h3>{ this.props.title }</h3>
        <p>{ this.props.children }</p>
      </div>
      <div className='card background-color hidden' ref={this.hiddenCard}>
        <h3>{ this.props.title }</h3>
        <p>{ this.props.children }</p>
      </div>
      <style jsx>{`
        .card {
          color: white;
          border: 1px solid #FFF;
          padding: 1vh 2vh;
          border-radius: 10px;
          transition: .2s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .card.hidden {
          cursor: default;
          display: none;
          position: absolute;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px 0px;
          transition: .7s cubic-bezier(0.65, 0.05, 0.36, 1);
        }

        .card.hidden.explode {
          top: 20px !important;
          bottom: 20px !important;
          left: 20px !important;
          right: 20px !important;
        }

        .card.hidden.explode h3 {
          font-size: 6vh;
          margin: 10px 20px;
        }

        .card.hidden.explode p {
          font-size: 2.5vh;
          margin: 0 20px;
        }

        .card.hidden:hover {
          transform: none;
        }

        .card:hover {
          box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px 0px;
          transform: translateY(-5px);
        }

        .card > h3 {
          font-weight: normal;
          font-family: 'Kanit', sans-serif;
          font-size: 3vh;
          margin-top: 5px;
          margin-bottom: 0;
          transition: .7s cubic-bezier(0.65, 0.05, 0.36, 1);
        }

        .card > p {
          margin-top: 0;
          font-family: 'Open Sans', sans-serif;
          font-size: 2vh;
          transition: .7s cubic-bezier(0.65, 0.05, 0.36, 1);
        }
      `}</style>
    </div>
  }
}
