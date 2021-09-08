import styles from './Info.module.css';

// extra material 
import useMarkdown from '../../utils/hooks/useMarkdown'; // my own custom hook!
import md from "./README_copy.md";

const Info = () => {

  const README = useMarkdown(md);

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className={styles.Info}>
      {README}
      <p onClick={scrollToTop} id={styles.goBackToTop}>Go back to top</p>
    </div>
  )
}

export default Info;
