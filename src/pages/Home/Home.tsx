import './Home.css';
import Ebooks from "../Ebooks/Ebooks";

interface IProps {
  switchToEbooksHandler: Function;
}

const Home = (props: IProps) => {

  const switchToEbooksHandler = (): void => props.switchToEbooksHandler(<Ebooks />);

  return (
    <div className="Home">
      <div id="Home-greeting">
        <h1>Welcome to Lipsum!</h1>
        <h2><i> The <span>free</span>, <span>simple</span> and <span>secure</span> way to get eBooks online.</i></h2>
        <button onClick={switchToEbooksHandler}>Get started</button>
      </div>
    </div>
  )
}

export default Home;
