import React, {useState, useEffect, useRef} from "react";
import styles from "./App.module.css";

// components 
import HeaderButton from "./components/HeaderButton/HeaderButton";

// pages
import EbooksPage from "./pages/EbooksPage/EbooksPage";
import HomePage from "./pages/HomePage/HomePage";
import InfoPage from "./pages/InfoPage/InfoPage";
import SocialMediaPage from "./pages/SocialMediaPage/SocialMediaPage"; // To add a new page, create a new component and import it here. Then add a new <HeaderButton /> in the header. "action" should always be equal to setPage(() => <YourComponent />)


function App() {
  const switchPageHandler = (newValue: JSX.Element) => setPage(newValue); // This allows the child component <HomePage /> to modify it's parent's page state. In short, the get started button will switch to the ebooks tab.
  const [page, setPage]: [JSX.Element, any] = useState(<HomePage switchToEbooksHandler={switchPageHandler} />); // Current toggled page. HomePage'll be the default one.
  
  return (
    <div>
      <header id={styles.Header}>
        <h1>Lipsum Dosimet</h1>
        <div id={styles.HeaderContainer}> 
          <HeaderButton title="Home" action={() => setPage(<HomePage switchToEbooksHandler={switchPageHandler}/>)}/>
          <HeaderButton title="Ebooks" action={() => setPage(<EbooksPage />)}/>
          <HeaderButton title="Info" action={() => setPage(<InfoPage />)} />
          <HeaderButton title="Social Media" action={() => setPage(<SocialMediaPage />)} />
        </div>
      </header>
      <div>
        {page}
      </div>
    </div>
  )
}

export default App;