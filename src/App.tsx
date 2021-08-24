import React, {useState, useEffect, useRef} from "react";
import styles from "./App.module.css";

// components 
import HeaderButton from "./components/HeaderButton/HeaderButton";

// pages
import Ebooks from "./pages/Ebooks/Ebooks";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import SocialMedia from "./pages/SocialMedia/SocialMedia"; // To add a new page, create a new component and import it here. Then add a new <HeaderButton /> in the header. "action" should always be equal to setPage(() => <YourComponent />)


function App() {
  const switchPageHandler = (newValue: JSX.Element) => setPage(newValue); // This allows the child component <Home /> to modify it's parent's page state. In short, the get started button will switch to the ebooks tab.
  const [page, setPage]: [JSX.Element, any] = useState(<Home switchToEbooksHandler={switchPageHandler} />); // Current toggled page. Home'll be the default one.
  
  return (
    <div>
      <header id={styles.Header}>
        <h1>Lipsum Dosimet</h1>
        <div id={styles.HeaderContainer}> 
          <HeaderButton title="Home" action={() => setPage(<Home switchToEbooksHandler={switchPageHandler}/>)}/>
          <HeaderButton title="Ebooks" action={() => setPage(<Ebooks />)}/>
          <HeaderButton title="Info" action={() => setPage(<Info />)} />
          <HeaderButton title="Social Media" action={() => setPage(<SocialMedia />)} />
        </div>
      </header>
      <div>
        {page}
      </div>
    </div>
  )
}

export default App;