// @flow
import * as React from 'react'
import Cards from '../components/Cards'
import CondensedCard from '../components/CondensedCard'
import { backgrounds } from '../helpers/constants'
import { header as Childhood } from '../pages/origin/childhood'
import { header as CommunityDev } from '../pages/origin/community-dev'
import { header as ServiceIndustry } from '../pages/origin/service-industry'

export const background = backgrounds.blue.key
const Origin = () => (
  <Cards background={background}>
    <CondensedCard header={Childhood} location='/origin/childhood' />
    <CondensedCard header={CommunityDev} location='/origin/community-dev' />
    <CondensedCard header={ServiceIndustry} location='/origin/service-industry' />
  </Cards>
)

export default Origin
