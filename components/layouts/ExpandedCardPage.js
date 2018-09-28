import Layout from "../../components/layouts/LandingPage"
import CardController, { CardTemplate } from "../../components/Card"

const link = '/projects/authenticy-platform'

export default class ExpandedCardPage {
  static Header({ isLarge }) {
    return <CardTemplate
      title={Self.title}
      body={Self.body}
      isLarge={isLarge}
    />
  }

  static Card() {
    return <CardController location={ link } body={ Header } />
  }

  render() {
    return <Layout>
      <div className='border'>
        <Self.Header isLarge={props.isExpanded}/>
        { props.children }
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
      `}</style>
    </Layout>
  }
}