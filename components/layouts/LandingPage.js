import Head from 'next/head'

export default (props) => <div className='background background-color'>
  { props.children }
  <Head>
    <title>Connor Davis</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link href="https://fonts.googleapis.com/css?family=Kanit:600|Open+Sans" rel="stylesheet" />
  </Head>
  <style jsx global>{`
    ::-moz-selection {
      color: white;
      background: #8E54E9;
    }

    ::selection {
        color: white; 
        background: #8E54E9;
    }
    .background-color {
      background: #8E54E9;
    }
  `}</style>
  <style jsx>{`
    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      overflow: hidden;
      transition: 1s;
    }
  `}</style>
</div>