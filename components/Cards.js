// @flow
import * as React from 'react'
import { BackgroundContext } from '../helpers/context'

type Props = {
  children: React.Node,
  background: string
}

const Cards = (props: Props) => (
  <BackgroundContext.Provider value={props.background}>
    <div className='cards'>
      {props.children}
      <style jsx>{`
        .cards {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          justify-content: space-evenly;
        }
      `}
      </style>
    </div>
  </BackgroundContext.Provider>
)

export default Cards
