// @flow
import * as React from 'react'
import Cards from '../components/Cards'
import { backgrounds } from '../helpers/constants'

export const background = backgrounds.grey.key
const Art = () => (
  <Cards background={background}>
    <div className='container'>
      <h2>Coming soon...</h2>
    </div>
    <style jsx>{`
      .container {
        display: grid;
        width: 80%;
        margin: auto;
      }

      .container > h2 {
        font-size: 10vh;
        margin: auto;
        color: white;
        text-align: center;
        font-family: 'Kanit', sans-serif;
      }
    `}
    </style>
  </Cards>
)

export default Art
