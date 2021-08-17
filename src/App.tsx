import React, {useState} from "react";
import "./App.css";

// components 
import HeaderButton from "./components/HeaderButton/HeaderButton";

// pages
import Ebooks from "./pages/Ebooks/Ebooks";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import SocialMedia from "./pages/SocialMedia/SocialMedia"; // To add a new page, create a new component and import it here. Then add a new <HeaderButton /> in the header. "action" should always be equal to setPage(() => <YourComponent />)


function App() {

  const [page, setPage]: [JSX.Element, any] = useState(<Home />); // Current toggled page. Home'll be the default one.

  return (
    <div>
      <header id="Header">
        <h1>Lipsum Dosimet</h1>
        <div> 
          <HeaderButton title="Home" action={() => setPage(<Home />)}/>
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