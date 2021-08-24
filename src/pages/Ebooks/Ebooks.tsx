import styles from './Ebooks.module.css';
import Ebook from "../../components/Ebook/Ebook";

// eBooks
import NewYork2140_PDF from "./assets/NewYork2140/NewYork2140_PDF.pdf";
import NewYork2140_Kindle from "./assets/NewYork2140/NewYork2140_Kindle.mobi";
import NewYork2140_Cover from "./assets/NewYork2140/NewYork2140_Cover.jpg";

const Ebooks = () => {
  return (
    <div className={styles.ebooks}>
      <h2>Ebooks:</h2>
      <div id={styles.ebooksContainer}>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
        <Ebook title="New York 2140" author="John Doe" lang="english" /* pdf={NewYork2140} */ img={NewYork2140_Cover} shortDescription="Nice book" longDescription="well, to be honest this book has been a pleasure to read" downloadPDF={NewYork2140_PDF} downloadKindle={NewYork2140_Kindle}/>
      </div>
    </div>
  )
}

export default Ebooks;
