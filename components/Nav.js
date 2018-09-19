import Router from 'next/router'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)

    const currentOption = this.props.options.find(option => option.href === props.selectedOption)

    this.state = {
      swipe: 'up-in delay',
      currentOption,
      currentComponent: currentOption
    }
  }

  static growValues(optionsLength, currentIndex) {
    const offsetCount = optionsLength - 1
    const pseudoCount = 2
    const right = Math.round(optionsLength * (currentIndex / offsetCount)) + pseudoCount

    return {
      right,
      left: optionsLength - right + (2 * pseudoCount)
    }
  }

  getIndex(href) {
    return this.props.options.findIndex(option => option.href === href)
  }

  handleClick(name) {
    return e => {
      e.preventDefault()
      e.stopPropagation()

      const currentOption = this.props.options.find(option => option.href === name)
      const movingLeft = this.getIndex(currentOption.href) > this.getIndex(this.state.currentOption.href) ? true : false

      Router.push({
        pathname: '/',
        query: { selectedOption: currentOption.href }
      }, `/${currentOption.href}`, { shallow: true })

      this.setState({
        swipe: `${movingLeft ? 'left' : 'right'}-out`,
        currentOption
      })

      setTimeout(() => {
        this.setState({
          currentComponent: currentOption,
          swipe: `${movingLeft ? 'right' : 'left'}-in`
        })
      }, 500)
    }
  }

  render() {
    const growValues = Nav.growValues(this.props.options.length, this.getIndex(this.state.currentOption.href))

    return <div className='container'>
      <ul className='nav' role='tablist'>
        <li key={0} className={`pseudo grow-${growValues.left}`} />
        { this.props.options.map((option, index) => 
          <li
            key={ index + 1 }
            index={ index }
            className={`option ${this.state.currentOption.href === option.href ? 'active' : ''}`}
          >
              <a
                href={`/${option.href}`}
                onClick={this.handleClick(option.href)}
                aria-controls={ option.href }
                role='tab'
                data-toggle='tab'
              >
                { option.title }
              </a>
          </li>
        ) }
        <li key={this.props.options.length + 1} className={`pseudo grow-${growValues.right}`} />
      </ul>
      <div id={this.state.currentComponent.href} className={`component ${`swipe-${this.state.swipe}`}`}>
        { this.state.currentComponent.component() }
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          flex: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: 1s;
        }

        .component {
          transition: .5s;
          width: 65%;
          flex: 1;
          display: flex;
          justify-content: center;
          transform: none;
          opacity: 1;
        }

        @media only screen and (min-width: 1200px) {
          .component {
            width: 45%;
          }
        }

        @media only screen and (max-width: 800px) {
          .component {
            width: 95%;
          }
        }

        .component.swipe-left-in {
          animation: swipe-left .5s ease 0s forwards;
        }

        .component.swipe-left-in.delay {
          animation-delay: .7s;
          transform: translateX(-4vw) scale(0.95);
            opacity: 0;
        }

        @keyframes swipe-left {
          0% {
            transform: translateX(-4vw) scale(0.95);
            opacity: 0;
          }
          100% {
            transform: none;
            opacity: 1;
          }
        }

        .component.swipe-right-in {
          animation: swipe-right .5s ease 0s forwards;
        }

        .component.swipe-right-in.delay {
          animation-delay: .7s;
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
          animation: swipe-up .5s ease 0s forwards;
        }

        .component.swipe-up-in.delay {
          animation-delay: .7s;
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
          animation: swipe-left-out .5s ease 0s forwards;
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
          animation: swipe-right-out .5s ease 0s forwards;
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

        .nav {
          width: 100%;
          height: 7.5vh;
          padding: 0;
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
      
        .option {
          transition: 1s;
          padding: 0 10px;
          -webkit-flex: 1 1 50%;
          flex: 1 1 auto;
          text-align: center;
        }

        a {
          transition: 1s;
        }

        .option > a {
          cursor: pointer;
          text-decoration: none;
          color: rgba(255,255,255,0.6);
          font-family: 'Kanit', sans-serif;
          font-size: 3vh;
        }
      
        .option > a:link {
          background: none;
        }

        .option > a:hover, .option > a:active, .option > a:focus {
          color: rgba(255,255,255,0.3);
        }

        .option.active > a {
          font-size: 5vh;
          color: white;
        }

        /* Allow Pseudo Elements to grow to the proper size */
        .grow-0 {flex-grow: 0;}.grow-1 {flex-grow: 1;}.grow-2 {flex-grow: 2;}.grow-3 {flex-grow: 3;}.grow-4 {flex-grow: 4;}.grow-5 {flex-grow: 5;}.grow-6 {flex-grow: 6;}.grow-7 {flex-grow: 7;}.grow-8 {flex-grow: 8;}.grow-9 {flex-grow: 9;}.grow-10 {flex-grow: 10;}      `}</style>
    </div>
  }
}