// essentials
import styles from './HomePage.module.css';

// pages 
import EbooksPage from "../EbooksPage/EbooksPage";

interface IProps {
  switchToEbooksHandler: Function;
}

const HomePage = (props: IProps) => {

  const switchToEbooksHandler = (): void => props.switchToEbooksHandler(<EbooksPage />);

  return (
    <div className={styles.home}>
      <div id={styles.HomeGreeting}>
        <h1>Welcome to Lipsum!</h1>
        <h2><i> The <span>free</span>, <span>simple</span> and <span>secure</span> way to get eBooks online.</i></h2>
        <button onClick={switchToEbooksHandler}>Get started</button>
      </div>
    </div>
  )
}

export default HomePage;
