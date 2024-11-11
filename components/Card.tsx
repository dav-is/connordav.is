import * as React from 'react'
import { createPortal } from 'react-dom'
import Router from 'next/router'
import { BackgroundContext } from '../helpers/context'

type Animation = 'condensed' | 'cloned' | 'expanding' | 'expanded' | 'hidden'

type Props = {
  expanded?: boolean
  header: (arg1: boolean) => React.ReactElement
  children?: React.ReactNode
  location?: string
  initAnimation?: Animation
}

type State = {
  animation: Animation
}

class Card extends React.Component<Props, State> {
  card: {
    current: null | HTMLAnchorElement
  }

  clone: {
    current: null | HTMLDivElement
  }

  constructor(props: Props) {
    super(props)

    this.card = React.createRef()
    this.clone = React.createRef()
    this.state = {
      animation: props.expanded
        ? 'expanded'
        : props.initAnimation || 'condensed',
    }
  }

  handleClick(location: string) {
    return (e: React.SyntheticEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      e.stopPropagation()

      if (this.state.animation === 'condensed' && this.card.current) {
        this.setState({ animation: 'hidden' }, () => {
          if (!this.card.current) {
            return
          }

          const { height, top, left } =
            this.card.current.getBoundingClientRect()

          if (this.clone.current) {
            this.clone.current.style.height = `${height}px`
            this.clone.current.style.top = `${top + 5}px`
            this.clone.current.style.left = `${left}px`
            this.clone.current.style.right = `${left}px`

            this.setState({ animation: 'cloned' }, () => {
              setTimeout(
                () =>
                  this.setState({ animation: 'expanding' }, () => {
                    setTimeout(() => Router.push(location), 1000)
                  }),
                0
              )
            })
          }
        })
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.animation !== 'expanded' &&
          this.state.animation !== 'condensed' && (
            <BackgroundContext.Consumer>
              {(key) =>
                createPortal(
                  <div
                    className={`card clone ${
                      this.state.animation === 'expanding'
                        ? 'expanded'
                        : this.state.animation
                    } background-color-${key}`}
                    ref={this.clone}
                  >
                    {this.props.header(this.state.animation === 'expanding')}
                  </div>,
                  document.body
                )
              }
            </BackgroundContext.Consumer>
          )}
        <a
          className={`card${
            this.state.animation === 'expanded' ? ' expanded' : ''
          }${this.props.location ? ' linked' : ''}${
            this.state.animation === 'expanded' ||
            this.state.animation === 'condensed'
              ? ''
              : ' hidden'
          }`}
          onClick={
            this.props.location
              ? this.handleClick(this.props.location)
              : undefined
          }
          href={this.props.location || undefined}
          ref={this.card}
        >
          {this.props.header(this.props.expanded || false)}
          {this.props.children}
        </a>
        <style jsx>
          {`
            .card {
              box-sizing: border-box;
              color: white;
              border: 1px solid #fff;
              padding: 1vh 2vh;
              border-radius: 7px;
              transition: 0.2s ease;
              display: flex;
              flex-direction: column;
              margin: auto;
              text-decoration: none;
            }

            .card:not(.expanded) {
              width: 65%;
              transition: 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
            }

            @media only screen and (min-width: 1200px) {
              .card:not(.expanded) {
                width: 45%;
              }
            }

            @media only screen and (max-width: 800px) {
              .card:not(.expanded) {
                width: 85%;
              }
            }

            .card.linked {
              cursor: pointer;
            }

            .card.linked:not(.expanded):hover,
            .card.linked:not(.expanded):focus {
              box-shadow: rgba(0, 0, 0, 0.2) 0px 1vh 2vh 0px;
              transform: translateY(-5px);
            }

            .card.expanded {
              cursor: default;
              position: absolute;
              box-shadow: rgba(0, 0, 0, 0.2) 0px 1vh 2vh 0px;
              top: 1.5vh !important;
              left: 1.5vh !important;
              right: 1.5vh !important;
              height: 96vh !important;
              padding: 2vh 4vh;
            }

            .card.clone {
              cursor: default;
              display: none;
              position: absolute;
              z-index: 50;
              box-shadow: rgba(0, 0, 0, 0.2) 0px 1vh 2vh 0px;
            }

            .card.clone:not(.expanded):hover {
              transform: none;
              margin-top: -5px;
            }

            .card.clone.expanded,
            .card.clone.cloned {
              display: flex;
              transition: 0.7s cubic-bezier(0.65, 0.05, 0.36, 1);
            }

            .card.hidden {
              visibility: hidden;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Card
