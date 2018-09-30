// @flow
import * as React from 'react'
import Layout from '../components/Layout'
import Origin from '../subsections/Origin'
import Projects from '../subsections/Projects'
import OpenSource from '../subsections/OpenSource'
import Art from '../subsections/Art'
import Nav from '../components/Nav'
import { backgrounds } from '../helpers/constants'

const defaultOption = 'projects'
const options= [
  {
    title: 'Origin',
    href: 'origin',
    background: backgrounds.red.key,
    component: <Origin />
  },
  {
    title: 'Projects',
    href: 'projects',
    background: backgrounds.purple.key,
    component: <Projects />
  },
  {
    title: 'Open Source',
    href: 'open-source',
    background: backgrounds.blue.key,
    component: <OpenSource />
  },
  {
    title: 'Art',
    href: 'art',
    background: backgrounds.green.key,
    component: <Art />
  }
]

type Props = {
  selectedOption?: string
}

type State = {
  background: string
}

type InitialProps = {
  query: {
    selectedOption?: string
  }
}

class Index extends React.Component<Props, State> {
  initialOption: string

  constructor (props: Props) {
    super(props)

    this.initialOption = this.props.selectedOption || defaultOption
    this.state = {
      background: (options.find(option => option.href === this.initialOption) || options[0]).background
    }
  }

  getInitialProps = async ({ query }: InitialProps): Props => {
    return { selectedOption: query.selectedOption }
  }

  changeBackground = (color: string) => {
    this.setState({
      background: color
    })
  }

  render () {
    return <Layout background={this.state.background}>
      <div className='container'>
        <div className='doubleSpacer' />
        <h1>Connor Davis</h1>
        <span className='subtitle'>
          Web Applications Engineer with a passion in scalability, maintainability, and integration.
        </span>
        <div className='spacer' />
        <Nav initialOption={this.initialOption} options={options} changeBackground={this.changeBackground} />
        <div className='doubleSpacer' />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .spacer {
          flex: 1;
        }

        .doubleSpacer {
          flex: 2;
        }

        @media only screen and (max-width: 800px) {
          .doubleSpacer {
            flex: 1;
          }
        }

        h1 {
          text-align: center;
          color: white;
          font-size: 8vh;
          font-family: 'Kanit', sans-serif;
          margin: 0px;
          line-height: 1;
        }

        .subtitle {
          color: white;
          text-align: center;
          font-family: 'Open Sans', sans-serif;
          margin: 0 25px;
          font-size: 3vh;
          max-width: 700px;
        }
      `}</style>
    </Layout>
  }
}

export default Index
