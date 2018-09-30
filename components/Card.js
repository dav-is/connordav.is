// @flow
import * as React from 'react'
import Router from 'next/router'

type Props = {
  expanded?: bool,
  header:(bool) => React.Node,
  children?: React.Node,
  location?: string
}

type State = {
  expanding: bool,
}

class Card extends React.Component<Props, State> {
  card: { current: null | HTMLDivElement }
  hiddenCard: { current: null | HTMLDivElement }
  boundingCard: { current: null | HTMLDivElement }

  constructor (props: Props) {
    super(props)

    this.card = React.createRef()
    this.hiddenCard = React.createRef()
    this.boundingCard = React.createRef()
    this.state = {
      expanding: this.props.expanded || false
    }
  }

  handleClick (location: string) {
    return (e: SyntheticEvent<HTMLAnchorElement>): void => {
      e.preventDefault()
      e.stopPropagation()

      if (!this.card.current) return
      this.card.current.style.transition = 'none'
      const card = this.card.current.getBoundingClientRect()

      if (!this.boundingCard.current) return
      const bounding = this.boundingCard.current.getBoundingClientRect()

      if (!this.hiddenCard.current) return
      this.hiddenCard.current.style.transitionDuration = '0s'
      this.hiddenCard.current.style.top = `${card.top}px`
      this.hiddenCard.current.style.height = `${card.height - (bounding.height)}px`
      this.hiddenCard.current.style.right = `${card.left}px`
      this.hiddenCard.current.style.left = `${card.left}px`
      this.hiddenCard.current.style.transitionDuration = '.7s'

      this.hiddenCard.current.style.display = 'flex'
      this.card.current && (this.card.current.style.opacity = '0')

      setTimeout(() => this.setState({ expanding: true }), 3)
      setTimeout(() => this.hiddenCard.current && this.hiddenCard.current.classList.add('expand'), 5)

      setTimeout(() => Router.push(location), 1000)
    }
  }

  render () {
    return <div>
      <div className={`card ${this.props.expanded ? 'expand' : ''}`} ref={this.card} onClick={this.props.location && this.handleClick(this.props.location)}>
        { this.props.header(this.props.expanded ? true : this.state.expanding) }
        { this.props.children }
      </div>
      { !this.props.expanded && <>
        <div className='card background-color hidden' ref={this.hiddenCard}>
          { this.props.header(this.state.expanding) }
        </div>
        <div className='card hidden bounding' ref={this.boundingCard} />
      </>}
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

        .card.expand {
          cursor: default;
          position: absolute;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 1vh 2vh 0px;
          top: 1.5vh !important;
          left: 1.5vh !important;
          right: 1.5vh !important;
          height: 93vh !important;
          padding: 2vh 4vh;
        }

        .card.hidden:hover {
          transform: none;
        }

        .card:not(.expand):hover {
          box-shadow: rgba(0, 0, 0, 0.2) 0px 1vh 2vh 0px;
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  }
}

export default Card
