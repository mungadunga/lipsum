import styles from './Home.module.css';
import Ebooks from '../Ebooks/Ebooks';
import Link from "../../components/Link/Link";

const Home = () => (
  <div className={styles.home}>
    <div id={styles.HomeGreeting}>
      <h1>Welcome to Lipsum!</h1>
      <h2><i> The <span>free</span>, <span>simple</span> and <span>secure</span> way to get eBooks online.</i></h2>
    </div>
  </div>
)

export default Home;