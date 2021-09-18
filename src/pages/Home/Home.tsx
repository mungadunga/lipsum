import styles from './Home.module.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.home}>
      <div id={styles.HomeGreeting}>
        <h1>Welcome to Lipsum!</h1>
        <h2><i> The <span>free</span>, <span>simple</span> and <span>secure</span> way to get eBooks online.</i></h2>
        <Link to={process.env.PUBLIC_URL + "/ebooks"}><button>Get started</button></Link>
      </div>
    </div>
  )
}