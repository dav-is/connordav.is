// @flow
import * as React from 'react'
import Card from '../components/Card'

type Props = {
  header:(bool) => React.Node,
  children: React.Node
}

const ExpandedCard = (props: Props) => <Card
  expanded
  header={props.header}
>
  { props.children }
</Card>

export default ExpandedCard
