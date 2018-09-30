// @flow
import * as React from 'react'

type Props = {
  children: React.Node
}

const Cards = (props: Props) => <div className='cards'>
  { props.children }
  <style jsx>{`
    .cards {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-evenly;
    }
  `}</style>
</div>

export default Cards
