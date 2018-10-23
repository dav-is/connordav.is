// @flow
import * as React from 'react'
import Cards from '../components/Cards'
import { backgrounds } from '../helpers/constants'
import Card from '../components/Card'
import CardHeader from '../components/CardHeader'

export const background = backgrounds.blue.key
export default () => <Cards background={background}>
  <Card header={(e: bool) => <CardHeader title='Placeholder' isLarge={e}>Placeholder text</CardHeader>} />
</Cards>
