import * as React from 'react';
import Card from '../components/Card'

type Props = {
  location: string,
  header: (arg1: boolean) => React.ReactElement
};

const CondensedCard = (props: Props) => (
  <Card
    location={props.location}
    header={props.header}
  />
)

export default CondensedCard
