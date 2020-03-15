import NextApp from "next/app";
import "./_app.css";

const App = ({ Component, pageProps }) => (
  <main className="container-fluid">
    <Component {...pageProps} />
  </main>
);

export default App;
