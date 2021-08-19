import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" lang="en" />
          <meta
            name="description"
            content="Software Engineer, MERN, Fullstack."
          ></meta>
          <meta name="description" content="Looking for a job."></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Carme&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/pine.ico" />
        </Head>
        <body className="font-carme">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
