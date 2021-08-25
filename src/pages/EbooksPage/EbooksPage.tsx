import styles from './EbooksPage.module.css';
import Ebook from "../../components/Ebook/Ebook";

import LIBRARY from "../../assets/library";

const EbooksPage = () => {
  return (
    <div className={styles.ebooksPage}>
      <h2>Ebooks:</h2>
      <div id={styles.ebooksPageContainer}>
        {LIBRARY.map(elem => (
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
          />
        ))}
      </div>
    </div>
  )
}

export default EbooksPage;
