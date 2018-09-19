import Layout from "../components/Layout";

export default () => <Layout>
  <div className='border'>
    <h3>Project 1</h3>
    <p>Here's some text.</p>
  </div>
  <style jsx>{`
    .border {
      position: absolute;
      left: 20px;
      top: 20px;
      right: 20px;
      bottom: 20px;
      color: white;
      border: 1px solid #FFF;
      padding: 1vh 2vh;
      border-radius: 10px;
      transition: .2s ease;
      display: flex;
      flex-direction: column;
    }

    .border > h3 {
      font-weight: normal;
      font-family: 'Kanit', sans-serif;
      font-size: 6vh;
      margin: 10px 20px;
    }

    .border > p {
      font-family: 'Open Sans', sans-serif;
      font-size: 2.5vh;
      margin: 0 20px;
    }
  `}</style>
</Layout>