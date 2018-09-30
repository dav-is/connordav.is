import * as React from 'react'
import Cards from '../components/Cards'
import { backgrounds } from '../helpers/constants'

export const background = backgrounds.red.key
export default () => <Cards background={background}>
  <div>Coming soon...</div>
</Cards>
