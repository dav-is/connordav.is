// @flow
import * as React from 'react'

type Props = {
  isLarge?: bool,
  title: string,
  children: React.Node
}

const CardHeader = (props: Props) => <div>
  <h3 className={props.isLarge ? 'large' : ''}>{ props.title }</h3>
  <p className={props.isLarge ? 'large' : ''}>{ props.children }</p>
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
    }

    p {
      margin-top: 0;
      font-family: 'Open Sans', sans-serif;
      font-size: 2vh;
      transition: .7s;
    }

    p.large {
      font-size: 2.5vh;
      margin: 0;
    }

    .link {
      border-bottom: 1px solid white;
    }
  `}</style>
</div>

export default CardHeader
