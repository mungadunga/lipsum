import styles from './Home.module.css';
import LIBRARY from '../../assets/library';
import Ebook from '../../components/Ebook/Ebook';

const Home = () => {

  const newestReleases = LIBRARY.slice(-2);

  return (
    <div className={styles.home}>
      <div id={styles.HomeGreeting}>
        <br />
        <h1>Welcome to Lipsum!</h1>
        <h2><i> The <span>free</span>, <span>simple</span> and <span>secure</span> way to get eBooks online.</i></h2>

        <br />
        <h1>Newest Releases!</h1>
        <div id={styles.newestReleases}>
          {newestReleases.map(elem => (
            <Ebook
              title={elem.title}
              author={elem.author}
              category={elem.category}
              language={elem.language}
              description={elem.description}
              summary={elem.summary}
              cover={elem.cover}
              downloadPDF={elem.downloadPDF}
              downloadKindle={elem.downloadKindle}
              downloadEPUB={elem.downloadEPUB}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home;