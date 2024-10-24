import * as React from 'react';
import Cards from '../components/Cards'
import CondensedCard from '../components/CondensedCard'
import { backgrounds } from '../helpers/constants'
import { header as ContentSecurityPolicy } from '../pages/open-source/csp'
import { header as Flarum } from '../pages/open-source/flarum'
import { header as ReactPWA } from '../pages/open-source/react-pwa'

export const background = backgrounds.green.key
const OpenSource = () => (
  <Cards background={background}>
    <CondensedCard header={Flarum} location='/open-source/flarum' />
    <CondensedCard header={ContentSecurityPolicy} location='/open-source/csp' />
    <CondensedCard header={ReactPWA} location='/open-source/react-pwa' />
  </Cards>
)

export default OpenSource
