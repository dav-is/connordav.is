import Layout from "../../components/Layout";

export default () => <Layout>
  <div className='border'>
    <h3>Project 1</h3>
    <p>Here's some text.</p>
    <p className='animate'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus sapien mi, dignissim vel condimentum eu, auctor id erat.
      Donec id ornare lectus, sagittis mattis dolor. Vivamus nec dapibus nisl.
      Nam sed molestie arcu. Pellentesque sed porttitor ante.
    </p>
    <p className='animate d-1'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus sapien mi, dignissim vel condimentum eu, auctor id erat.
      Donec id ornare lectus, sagittis mattis dolor. Vivamus nec dapibus nisl.
      Nam sed molestie arcu. Pellentesque sed porttitor ante.
    </p>
    <p className='animate d-2'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
  <style jsx>{`
    .border {
      position: absolute;
      left: 1.5vh;
      top: 1.5vh;
      right: 1.5vh;
      height: 93vh;
      color: white;
      border: 1px solid #FFF;
      padding: 2vh 4vh;
      border-radius: 10px;
      transition: .2s ease;
      display: flex;
      flex-direction: column;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1vh 2vh 0px;
    }

    .border h3 {
      font-weight: normal;
      font-family: 'Kanit', sans-serif;
      font-size: 6vh;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .border p {
      font-family: 'Open Sans', sans-serif;
      font-size: 2.5vh;
      margin-top: 0;
    }

    .border p.animate {
      margin-top: 10px;
      opacity: 0;
      transform: translateY(80px) scale(0.95);
      animation: .7s slideIn cubic-bezier(0.65, 0.05, 0.36, 1) 0s forwards;
    }

    .border p.d-1 {
      animation-delay: .2s;
    }

    .border p.d-2 {
      animation-delay: .4s;
    }

    .border p.d-3 {
      animation-delay: .6s;
    }

    .border p.d-4 {
      animation-delay: .8s;
    }

    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateY(80px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
  `}</style>
</Layout>