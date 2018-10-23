// @flow
import * as React from 'react'
import Cards from '../components/Cards'
import { backgrounds } from '../helpers/constants'
import Card from '../components/Card'
import CardHeader from '../components/CardHeader'

export const background = backgrounds.green.key
export default () => <Cards background={background}>
  <Card header={(e: bool) => <CardHeader title='Test' isLarge={e}>Test2</CardHeader>} />
</Cards>
