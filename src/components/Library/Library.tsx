import { useEffect } from 'react';
// import styles from './Library.module.css';

// components 
import LIBRARY from '../../assets/library'; // ebook data
import Ebook from '../Ebook/Ebook'; // ebook component

interface props {
  filter: string;
  keyword: string;
  sort: boolean | null;
}

const Library = (props: props) => {

  return (
    <>
      {
        LIBRARY.filter(elem => elem[props.keyword].toLowerCase()?.includes(props.filter.toLowerCase())).sort((a, b) => props.sort ? ('' + a[props.keyword]).localeCompare(b[props.keyword]) : null).map(elem => (
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
        ))
      }
    </>
  )
}

export default Library;
