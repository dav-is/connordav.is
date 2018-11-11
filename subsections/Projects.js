// @flow
import * as React from 'react'
import Cards from '../components/Cards'
import CondensedCard from '../components/CondensedCard'
import { backgrounds } from '../helpers/constants'
import { header as AuthenticyPlatform } from '../pages/projects/authenticity-platform'
import { header as HostingPlatform } from '../pages/projects/hosting-platform'
import { header as PersonalSite } from '../pages/projects/personal-site'

export const background = backgrounds.purple.key
export default () => <Cards background={background}>
  <CondensedCard header={HostingPlatform} location='/projects/hosting-platform' />
  <CondensedCard header={AuthenticyPlatform} location='/projects/authenticity-platform' />
  <CondensedCard header={PersonalSite} location='/projects/personal-site' />
</Cards>
