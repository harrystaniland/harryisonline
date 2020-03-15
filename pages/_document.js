import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@4.4.1/dist/darkly/bootstrap.min.css"
          />
          {/*
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
