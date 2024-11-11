import * as React from 'react'
import Layout from '../components/Layout'
import Origin, { background as OriginBackground } from '../subsections/Origin'
import Projects, {
  background as ProjectsBackground,
} from '../subsections/Projects'
import OpenSource, {
  background as OpenSourceBackground,
} from '../subsections/OpenSource'
import Art, { background as ArtBackground } from '../subsections/Art'
import Nav from '../components/Nav'

export type OptionKey = 'origin' | 'projects' | 'open-source' | 'art'
export type Option = {
  title: string
  href: OptionKey
  background: string
  component: React.ReactNode
}
export type Options = Record<OptionKey, Option>
const options: Options = {
  origin: {
    title: 'Origin',
    href: 'origin',
    background: OriginBackground,
    component: <Origin />,
  },
  projects: {
    title: 'Projects',
    href: 'projects',
    background: ProjectsBackground,
    component: <Projects />,
  },
  'open-source': {
    title: 'Open Source',
    href: 'open-source',
    background: OpenSourceBackground,
    component: <OpenSource />,
  },
  art: {
    title: 'Art',
    href: 'art',
    background: ArtBackground,
    component: <Art />,
  },
}
const order: OptionKey[] = ['origin', 'projects', 'open-source', 'art']

type Props = {
  option: OptionKey
}

function Home(props: Props) {
  const [option, setOption] = React.useState(props.option)

  return (
    <Layout background={options[option].background}>
      <div className="container">
        <div className="doubleSpacer" />
        <h1>Connor Davis</h1>
        <span className="subtitle">
          Web Applications Engineer with a passion in scalability,
          maintainability, and integration
        </span>
        <Nav
          options={options}
          order={order}
          option={option}
          setOption={setOption}
        />
        <div className="doubleSpacer" />
      </div>
      <style jsx>
        {`
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
        `}
      </style>
    </Layout>
  )
}

export default Home
