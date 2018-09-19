import Card from './Card'

export default () => <div className='cards'>
  <Card title='Project 1' location='/test'>Here's some text.</Card>
  <Card title='Project 2' location='/test'>Here's some text.</Card>
  <Card title='Project 3' location='/test'>Here's some text.</Card>
  <style jsx>{`
    .cards {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
    }
  `}</style>
</div>