// essentials
import styles from './InfoPage.module.css';

// extra material 
import ReactEmbedGist from "react-embed-gist";


const InfoPage = () => {

  function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }

  return (
    <div className={styles.InfoPage}>
      <h1>Here's how this website was built</h1>

      <h2>App component</h2>
      <ReactEmbedGist className={styles.ReactEmbedGist} gist="mungadunga/d236ff022c96484bb217bf76b20a4144"/>
      <p>Here is a simplified version of the <code>{"<App />"}</code> component. As you can see, we have a header element with four <code>HeaderButton</code>s. The current page is saved in the <code>page</code> state and is being displayed under the header. After clicking on a <code>HeaderButton</code>, <code>page</code> is being modified.</p>

      <h2>Ebooks page</h2>
      <ReactEmbedGist className={styles.ReactEmbedGist} gist="mungadunga/189a0969d512b35f2fa4c7abdbb76d8a"/>
      <p>This is also oversimplified, but you get the idea. We have a title, a <code>{"<SearchBar />"}</code>, and a <code>{"<Library />"}</code>. The Library itself is made out of <code>{"<Ebook />"}</code> components. <code>LIBARY</code> is a constant which includes all of the eBooks' details. Then, I used javascript's <code>map()</code> function to loop over it. So to add a new eBook, you just have to enter it's details and add them to <code>LIBRARY</code>!</p>

      <h2>One last thing</h2>
      <p>Thanks for reading this far! To view the source code, or if you want to contribute, visit my github repo or click <a href="https://github.com/mungadunga/lipsum">here</a>.</p>

      <p onClick={scrollToTop} id={styles.goBackToTop}>Go back to top</p>
    </div>
  )
}

export default InfoPage;
