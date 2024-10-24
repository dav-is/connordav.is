import * as React from 'react';
import Card from '../components/Card'

type Props = {
  header: (arg1: boolean) => React.ReactElement,
  children: React.ReactNode
};

const ExpandedCard = (props: Props) => (
  <Card header={props.header} expanded>
    {props.children}
  </Card>
)

export default ExpandedCard
