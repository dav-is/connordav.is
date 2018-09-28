import React from 'react'
import Router from 'next/router'

export const CardTemplate = (props) => <>
  <h3 className={props.isLarge ? 'large' : ''}>{ props.title }</h3>
  <p className={props.isLarge ? 'large' : ''}>{ props.body }</p>
  <style jsx>{`
    h3 {
      font-weight: normal;
      font-family: 'Kanit', sans-serif;
      font-size: 3vh;
      margin-top: 5px;
      margin-bottom: 0;
      transition: .7s;
    }

    h3.large {
      font-size: 6vh;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    p {
      margin-top: 0;
      font-family: 'Open Sans', sans-serif;
      font-size: 2vh;
      transition: .7s;
    }

    p.large {
      font-size: 2.5vh;
    }
  `}</style>
</>

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.card = React.createRef();
    this.hiddenCard = React.createRef();
    this.boundingCard = React.createRef();
  }

  handleClick(location) {
    return e => {
      e.preventDefault()
      e.stopPropagation()

      this.card.current.style.transition = 'none'
      const card = this.card.current.getBoundingClientRect()
      const bounding = this.boundingCard.current.getBoundingClientRect()

      this.hiddenCard.current.style.transitionDuration = '0s'
      this.hiddenCard.current.style.top = `${card.y}px`
      this.hiddenCard.current.style.height = `${card.height - (bounding.height)}px`
      this.hiddenCard.current.style.right = `${card.x}px`
      this.hiddenCard.current.style.left = `${card.x}px`
      this.hiddenCard.current.style.transitionDuration = '.7s'

      this.hiddenCard.current.style.display = 'flex'
      this.card.current.style.opacity = '0'

      setTimeout(() => this.hiddenCard.current.classList.add("explode"), 5)

      setTimeout(() => Router.push(location), 1000);
    }
  }

  render() {
    return <div>
      <div className='card' ref={this.card} onClick={this.handleClick(this.props.location)}>
        <this.props.body />
      </div>
      <div className='card background-color hidden' ref={this.hiddenCard}>
        <this.props.body />
      </div>
      <div className='card hidden bounding' ref={this.boundingCard}>
      </div>
      <style jsx>{`
        .card {
          color: white;
          border: 1px solid #FFF;
          padding: 1vh 2vh;
          border-radius: 7px;
          transition: .2s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .card.hidden {
          cursor: default;
          display: none;
          position: absolute;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 1vh 2vh 0px;
          transition: .7s cubic-bezier(0.65, 0.05, 0.36, 1);
        }

        .card.bounding {
          display: block;
          opacity: 0;
        }

        .card.hidden.explode {
          top: 1.5vh !important;
          left: 1.5vh !important;
          right: 1.5vh !important;
          height: 93vh !important;
          padding: 2vh 4vh;
        }

        .card.hidden:hover {
          transform: none;
        }

        .card:hover {
          box-shadow: rgba(0, 0, 0, 0.2) 0px 1vh 2vh 0px;
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  }
}
