import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang='zh'>
          <link href='/fonts/font.css' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <div id='__modal'></div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument