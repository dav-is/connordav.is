import * as React from 'react'
import Router from 'next/router'
import type { Options, OptionKey } from './Home'

type Props = {
  options: Options
  option: OptionKey
  order: OptionKey[]
  setOption: (arg1: ((arg1: OptionKey) => OptionKey) | OptionKey) => void
}

type State = {
  swipe: string
  option: OptionKey
  earlyOption?: OptionKey
}

class Nav extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      swipe: 'up-in delay',
      option: props.option,
    }
  }

  static growValues(
    optionsLength: number,
    currentIndex: number
  ): {
    right: number
    left: number
  } {
    const offsetCount = optionsLength - 1
    const pseudoCount = 2
    const right =
      Math.round(optionsLength * (currentIndex / offsetCount)) + pseudoCount

    return {
      right,
      left: optionsLength - right + 2 * pseudoCount,
    }
  }

  getIndex(key: string) {
    return this.props.order.findIndex((option) => option === key)
  }

  handleClick(name: OptionKey) {
    return (e: React.SyntheticEvent<HTMLAnchorElement>): void => {
      e.preventDefault()
      e.stopPropagation()

      const option = this.props.options[name]
      if (!option) {
        console.error(`Option with name ${name} does not exist.`)
        return
      }

      const proposedIndex = this.getIndex(name)
      const currentIndex = this.getIndex(this.props.option)

      if (proposedIndex === currentIndex) {
        this.setState({
          swipe: 'attract',
        })
        setTimeout(() => {
          this.setState({
            swipe: 'none',
          })
        }, 720)
        return
      }

      const movingLeft = proposedIndex > currentIndex || false

      this.props.setOption(name)

      Router.push(
        {
          pathname: '/',
          query: { option: name },
        },
        `/${name === 'projects' ? '' : name}`,
        { shallow: true }
      )

      this.setState({
        swipe: `${movingLeft ? 'left' : 'right'}-out`,
        earlyOption: name,
      })

      setTimeout(() => {
        this.setState({
          swipe: `${movingLeft ? 'right' : 'left'}-in`,
          earlyOption: undefined,
          option: name,
        })
      }, 500)
    }
  }

  // TODO: Figure out ARIA roles - use role='menu'
  render() {
    const optionsCount = this.props.order.length
    const growValues = Nav.growValues(
      optionsCount,
      this.getIndex(this.state.earlyOption || this.state.option)
    )

    return (
      <div className="container">
        <div id="nav" role="tablist" aria-label="Section">
          <div
            key={0}
            aria-hidden="true"
            className={`pseudo grow-${growValues.left}`}
          />
          {this.props.order.map((option, index) => (
            <a
              key={index + 1}
              id={`${option}-tab`}
              className={`option${
                this.props.options[option].title.length > 8 ? ' long' : ''
              }${
                (this.state.earlyOption || this.state.option) === option
                  ? ' active'
                  : ''
              }`}
              aria-selected={
                (this.state.earlyOption || this.state.option) === option
                  ? 'true'
                  : 'false'
              }
              href={`/${option}`}
              onClick={this.handleClick(option)}
              aria-controls={option}
              role="tab"
              data-toggle="tab"
            >
              {this.props.options[option].title}
            </a>
          ))}
          <div
            key={optionsCount + 1}
            className={`pseudo grow-${growValues.right}`}
          />
        </div>
        {this.props.order.map((option, i) => (
          <div
            key={i}
            id={option}
            role="tabpanel"
            aria-labelledby={`${option}-tab`}
            className={`component ${
              this.state.option === option
                ? `show swipe-${this.state.swipe}`
                : ''
            }`}
            hidden={this.state.option === option ? undefined : true}
          >
            {this.props.options[option].component}
          </div>
        ))}
        <style jsx>
          {`
            .container {
              width: 100%;
              flex: 10;
              display: flex;
              flex-direction: column;
              align-items: center;
              transition: 1s;
            }

            .component {
              transition: 0.5s;
              transform: none;
              opacity: 1;
              width: 100%;
              height: 100%;
              display: none;
            }

            .component.show {
              display: block;
            }

            .component.swipe-left-in {
              animation: swipe-left 0.5s ease 0s forwards;
            }

            .component.swipe-left-in.delay {
              animation-delay: 0.7s;
              transform: translateX(-80px) scale(0.95);
              opacity: 0;
            }

            @keyframes swipe-left {
              0% {
                transform: translateX(-80px) scale(0.95);
                opacity: 0;
              }
              100% {
                transform: none;
                opacity: 1;
              }
            }

            .component.swipe-right-in {
              animation: swipe-right 0.5s ease 0s forwards;
            }

            .component.swipe-right-in.delay {
              animation-delay: 0.7s;
              transform: translateX(80px) scale(0.95);
              opacity: 0;
            }

            @keyframes swipe-right {
              0% {
                transform: translateX(80px) scale(0.95);
                opacity: 0;
              }
              100% {
                transform: none;
                opacity: 1;
              }
            }

            .component.swipe-up-in {
              animation: swipe-up 0.5s ease 0s forwards;
            }

            .component.swipe-up-in.delay {
              animation-delay: 0.7s;
              transform: translateY(80px) scale(0.95);
              opacity: 0;
            }

            @keyframes swipe-up {
              0% {
                transform: translateY(80px) scale(0.95);
                opacity: 0;
              }
              100% {
                transform: none;
                opacity: 1;
              }
            }

            .component.swipe-left-out {
              animation: swipe-left-out 0.5s ease 0s forwards;
            }

            @keyframes swipe-left-out {
              0% {
                transform: none;
                opacity: 1;
              }
              100% {
                transform: translateX(-80px) scale(0.95);
                opacity: 0;
              }
            }

            .component.swipe-right-out {
              animation: swipe-right-out 0.5s ease 0s forwards;
            }

            @keyframes swipe-right-out {
              0% {
                transform: none;
                opacity: 1;
              }
              100% {
                transform: translateX(80px) scale(0.95);
                opacity: 0;
              }
            }

            .component.swipe-attract {
              animation: swipe-attract 0.7s cubic-bezier(0.65, 0.05, 0.36, 1) 0s
                forwards;
            }

            @keyframes swipe-attract {
              0% {
                transform: none;
              }
              50% {
                transform: translateY(-15px) scale(1.02);
              }
              100% {
                transform: none;
              }
            }

            #nav {
              width: 100%;
              padding: 0;
              margin-top: 15px;
              list-style: none;
              display: flex;
              flex-wrap: wrap;
              color: white;
              justify-content: center;
              align-items: center;
              transition: 1s;
            }

            .pseudo {
              transition: 1s;
              -webkit-flex: 1 1 50%;
              flex: 1 1 0%;
            }

            @media screen and (max-width: 800px) {
              #nav > .pseudo {
                flex-grow: 1; /* Mobile devices are not very good at rendering the flexbox nav when tightly packed */
              }
            }

            .option {
              transition: 1s;
              padding: 0 20px;
              -webkit-flex: 1 1 50%;
              flex: 1 1 auto;
              text-align: center;
              cursor: pointer;
              text-decoration: none;
              color: white;
              font-family: 'Kanit', sans-serif;
              font-size: 3.5vh;
              opacity: 0.95;
            }

            @media screen and (max-width: 350px) {
              .option {
                padding: 0;
              }
            }

            a {
              transition: 1s;
            }

            .option:link {
              background: none;
            }

            .option:hover,
            .option:active,
            .option:focus {
              font-size: 4vh;
            }

            .option.active {
              font-size: 6vh;
              color: white;
              opacity: 1;
            }

            .option.long.active {
              font-size: 5.2vh;
            }

            /* Allow Pseudo Elements to grow to the proper size */
            .grow-0 {
              flex-grow: 0;
            }
            .grow-1 {
              flex-grow: 1;
            }
            .grow-2 {
              flex-grow: 2;
            }
            .grow-3 {
              flex-grow: 3;
            }
            .grow-4 {
              flex-grow: 4;
            }
            .grow-5 {
              flex-grow: 5;
            }
            .grow-6 {
              flex-grow: 6;
            }
            .grow-7 {
              flex-grow: 7;
            }
            .grow-8 {
              flex-grow: 8;
            }
            .grow-9 {
              flex-grow: 9;
            }
            .grow-10 {
              flex-grow: 10;
            }
          `}
        </style>
        <style jsx global>
          {`
            .component.swipe-attract .card.linked {
              animation: swipe-attract-card 0.7s
                cubic-bezier(0.65, 0.05, 0.36, 1) 0s forwards;
            }

            @keyframes swipe-attract-card {
              0% {
                box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 0;
              }
              50% {
                box-shadow: rgba(0, 0, 0, 0.2) 0px 2vh 2vh 0px;
              }
              100% {
                box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 0;
              }
            }
          `}
        </style>
      </div>
    )
  }
}

export default Nav
