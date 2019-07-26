import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no,  shrink-to-fit=no"
          />
          <link rel="shortcut icon" href="//assets.unubo.com/unubo-cloud-examples/favicon.ico" />
          <link rel="stylesheet" href="//assets.unubo.com/unubo-cloud-examples/style.css" />
      
          <title>Node.js - Unubo Cloud</title>
        </Head>

        <body class="build-next-js">
          <Main />
          <NextScript />
        </body>
      </html>      
    )
  }
}
