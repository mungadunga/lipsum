import styles from './Info.module.css';
import useMarkdown from '../../utils/hooks/useMarkdown'; // my own custom hook!
import ReactEmbedGist from 'react-embed-gist';
// markdown parts ( useMarkdown can't add syntax highlighting )
import partOneMD from "./parts/part1.md";
import partTwoMD from "./parts/part2.md";

const Info = () => {
  const partOne = useMarkdown(partOneMD);
  const partTwo = useMarkdown(partTwoMD);

  function scrollToTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className={styles.Info}>
      {/* markdown */}
      {partOne}
      <ReactEmbedGist gist="mungadunga/1ef492a07ba2fa46f5cc6f0b4e8ceeaa"/>
      <p>Add four imports at the top of <code>HarryPotter.ts</code></p>
      <ReactEmbedGist gist="mungadunga/0c6037d34c9f47b5cbf1b2c2034eb591"/>
      <p>And now, create a `HarryPotter` object and fill it with details about your book</p>
      <ReactEmbedGist gist="mungadunga/eb2ea95882b80c3e286fb519c35c3486"/>
      {partTwo}
      <ReactEmbedGist gist="mungadunga/886ffdd32fa9fd97863d572c610ab909"/>
      {/* scroll to top */}
      <p onClick={scrollToTop} id={styles.goBackToTop}>Go back to top</p>
    </div>
  )

}

export default Info;
