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
            <Link to={process.env.PUBLIC_URL + "/home"}><span className="Link">Home</span></Link>
            <Link to={process.env.PUBLIC_URL + "/ebooks"} className="Link">Ebooks</Link>
            <Link to={process.env.PUBLIC_URL + "/info"} className="Link">Info</Link>
            <Link to={process.env.PUBLIC_URL + "/socialmedia"} className="Link">Social Media</Link>
          </div>
        </header>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/home"} component={Home} />
          <Route path={process.env.PUBLIC_URL + "/ebooks"} component={Ebooks} />
          <Route path={process.env.PUBLIC_URL + "/info"} component={Info} />
          <Route path={process.env.PUBLIC_URL + "/socialmedia"} component={SocialMedia} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;