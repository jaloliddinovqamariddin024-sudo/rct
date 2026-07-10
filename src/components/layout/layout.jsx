import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <a href="/"></a>
        <a href="/obrende">obrende</a>
        <a href="/preimushestvo">preimushestvo</a>
        <a href="/otkritiklub">otcriritiklub</a>
        <a href="/contact">contact</a>
      </nav>
      <Outlet />
      <footer>
        <h5> this is a footer</h5>
      </footer>
    </div>
  );
}

export default Layout;
