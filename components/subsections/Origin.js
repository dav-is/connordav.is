import Card from '../Card'

export default () => <div className='cards'>
  <Card title='Project 1' location='/projects/project1'>Here's some text.</Card>
  <Card title='Project 2' location='/projects/project1'>Here's some text.</Card>
  <Card title='Project 3' location='/projects/project1'>Here's some text.</Card>
  <style jsx>{`
    .cards {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-evenly;
    }
  `}</style>
</div>