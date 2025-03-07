import * as React from 'react';
import Head from 'next/head'
import { backgrounds } from '../helpers/constants'

type Props = {
  children: React.ReactNode,
  background: string
};

const Layout = (props: Props) => (
  <div className={`background background-color-${props.background}`}>
    <Head>
      <title>Connor Davis</title>
      <meta name='description' content='Web Applications Engineer with a passion in scalability, maintainability, and integration' />
      <meta name='keywords' content='HTML, CSS, JavaScript, Web, Applications, HTTP' />
      <meta name='author' content='Connor Davis' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link href='https://fonts.gstatic.com' rel='preconnect' crossOrigin='anonymous' />
      <link href='https://fonts.gstatic.com' rel='dns-prefetch' />
      <link href='https://fonts.googleapis.com/css?family=Kanit:600|Open+Sans' rel='stylesheet' />
    </Head>
    {props.children}
    <style jsx global>{`
      ::-moz-selection {
        color: white;
        background: #8E54E9;
      }

      ::selection {
          color: white; 
          background: #8E54E9;
      }
      
      .background-color-red {
        background: ${backgrounds.red.hex};
      }

      .background-color-grey {
        background: ${backgrounds.grey.hex};
      }

      .background-color-blue {
        background: ${backgrounds.blue.hex};
      }

      .background-color-green {
        background: ${backgrounds.green.hex};
      }

      .background-color-purple {
        background: ${backgrounds.purple.hex};
      }
    `}
    </style>
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
    `}
    </style>
  </div>
)

export default Layout
