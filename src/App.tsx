// essentials
import styles from "./styles/App.module.css";
import "./styles/global.css";

// pages
import Ebooks from "./pages/Ebooks/Ebooks";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import SocialMedia from "./pages/SocialMedia/SocialMedia";

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header id={styles.Header}>
          <h1>Lipsum Dosimet</h1>
          <div id={styles.HeaderContainer}>
            <Link to="/"><span className="Link">Home</span></Link>
            <Link to="/ebooks" className="Link">Ebooks</Link>
            <Link to="/info" className="Link">Info</Link>
            <Link to="/socialmedia" className="Link">Social Media</Link>
          </div>
        </header>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/ebooks" component={Ebooks} />
          <Route path="/info" component={Info} />
          <Route path="/socialmedia" component={SocialMedia} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;