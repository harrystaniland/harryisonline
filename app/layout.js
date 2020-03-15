const Layout = ({ pageTitle, children, ...props }) => (
  <Fragment>
    <header>
      <h1>{pageTitle}</h1>
      <nav>
        <a href="/">Overview</a>
        <a href="/api">Api</a>
        <a href="/examples">Examples</a>
      </nav>
    </header>
    <main className={css.main}>
      <article>{children}</article>
    </main>
    <footer>
      <a href="/api/preview-on">Preview On</a>
      <a href="/api/preview-off">Preview Off</a>
    </footer>
  </Fragment>
);

export default Layout;
