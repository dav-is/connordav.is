// @flow
import * as React from 'react'
import Cards from '../components/Cards'
import { backgrounds } from '../helpers/constants'

export const background = backgrounds.blue.key
export default () => <Cards background={background}>
  <div>Coming soon...</div>
</Cards>
