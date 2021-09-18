import { useState } from "react";
import styles from "./styles/App.module.css";
import "./styles/global.css";

// pages
import Ebooks from "./pages/Ebooks/Ebooks";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import SocialMedia from "./pages/SocialMedia/SocialMedia";

// components
import Link from "./components/Link/Link";

function App() {
  const switchPageHandler = (newValue: JSX.Element) => setPage(newValue); // This allows the child component <Home /> to modify it's parent's page state. In short, the 'get started' button will switch to the ebooks tab.
  const [page, setPage] = useState(<Home />);

  return (
    <>
      <header id={styles.Header}>
        <h1>Lipsum Dosimet</h1>
        <div id={styles.HeaderContainer}>
          <Link className="Link" switchPageHandler={switchPageHandler} to={<Home />}>Home</Link>
          <Link className="Link" switchPageHandler={switchPageHandler} to={<Ebooks />}>Ebooks</Link>
          <Link className="Link" switchPageHandler={switchPageHandler} to={<Info />}>Info</Link>
          <Link className="Link" switchPageHandler={switchPageHandler} to={<SocialMedia />}>Social Media</Link>
        </div>
      </header>
      <div>
        {page}
      </div>
    </>
  );
}

export default App;