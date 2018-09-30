// @flow
import * as React from 'react'
import Card from '../components/Card'

type Props = {
  location: string,
  header:(bool) => React.Node
}

const CondensedCard = (props: Props) => <Card
  location={props.location}
  header={props.header}
/>

export default CondensedCard
