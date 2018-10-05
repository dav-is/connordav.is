// @flow
import * as React from 'react'
import Cards from '../components/Cards'
import CondensedCard from '../components/CondensedCard'
import { header as AuthenticyPlatform } from '../pages/projects/authenticity-platform'
import { backgrounds } from '../helpers/constants'

export const background = backgrounds.blue.key
export default () => <Cards background={background}>
  <CondensedCard header={AuthenticyPlatform} location='/projects/authenticity-platform' />
</Cards>
