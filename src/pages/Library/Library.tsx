// essentials
import { useState } from 'react';
import styles from './Library.module.css';

// components
import DATA from '../../assets/data';
import Ebook from '../../components/Ebook/Ebook';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadingWheel from '../../components/LoadingWheel/LoadingWheel';

const Library = () => {
  // search options
  const [ filter, setFilter ] = useState("");
  const [ keyword, setKeyword ] = useState("title");
  const [ sort, setSort ] = useState(null);

  // loading screen + wheel
  const [ loading, setLoading ] = useState(true);
  const loadingScreen = (
    <div id={styles.fullPage}>
      <LoadingWheel size={50} mainColor="#eb4034" backColor="#f3f3f3" />
    </div>
  )

  return (
    <>
      {loading && loadingScreen}
      <div onLoad={() => setLoading(false)}>
        <h2 id={styles.title}>Library</h2>
        <SearchBar
          onChange={{
            onInputChange: ({ target }) => setFilter(target.value),
            onSelectChange: ({ target }) => setKeyword(target.value),
            onSortClick: () => setSort(!sort),
          }}
          sort={sort}
        />
        <div id={styles.libraryContainer}>
          {
            DATA
            .filter(elem => elem[keyword] && elem[keyword].toLowerCase()?.includes(filter.toLowerCase()))
            .sort((a, b) => sort ? ('' + a[keyword])
            .localeCompare(b[ keyword ]) : null)
            .map(elem => (
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
        </div>
      </div>
    </>
  )
}

export default Library;
