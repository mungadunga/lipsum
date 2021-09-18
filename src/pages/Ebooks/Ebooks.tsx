// essentials
import { useState } from 'react';
import styles from './Ebooks.module.css';

// components
import Library from "../../components/Library/Library";
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadingWheel from '../../components/LoadingWheel/LoadingWheel';

const Ebooks = () => {
  // search options
  const [ filter, setFilter ] = useState("");
  const [ keyword, setKeyword ] = useState("title");
  const [ sort, setSort ] = useState(null);
  
  // loading
  const [ loading, setLoading ] = useState(true);
  const loadingScreen = (
    <div id={styles.fullPage}>
      <LoadingWheel size={50} mainColor="#eb4034" backColor="#f3f3f3" />
    </div>
  )

  return (
    <>
      {loading && loadingScreen}
      <div className={styles.ebooks} onLoad={() => setLoading(false)}>
        <h2 id={styles.title}>Ebooks</h2>
        <SearchBar
          onChange={{
            onInputChange: ({ target }) => setFilter(target.value),
            onSelectChange: ({ target }) => setKeyword(target.value),
            onSortClick: () => setSort(!sort),
          }}
          sort={sort}
        />
        <div id={styles.ebooksContainer}>
          <Library filter={filter} keyword={keyword} sort={sort} />
        </div>
      </div>
    </>
  )
}

export default Ebooks;
