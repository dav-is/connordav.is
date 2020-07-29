// @flow
import * as React from 'react'
import Card from '../components/Card'

type Props = {
  header:(bool) => React.Node,
  children: React.Node
}

const ExpandedCard = (props: Props) => (
  <Card header={props.header} expanded>
    {props.children}
  </Card>
)

export default ExpandedCard
