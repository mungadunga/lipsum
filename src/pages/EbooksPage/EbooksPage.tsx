import { useState } from 'react';

// essentials
import styles from './EbooksPage.module.css';

// components
import Library from "../../components/Library/Library";
import SearchBar from '../../components/SearchBar/SearchBar';

const EbooksPage = () => {

  // search options
  const [filter, setFilter] = useState("");
  const [keyword, setKeyword] = useState("title");
  const [sort, setSort] = useState(null);

  const [loading, setLoading] = useState(true);
  
  const LoadingScreen = () => {
    let loadingScreen = <p className={styles.loading}>Loading...</p>;
    return (
      <>
        {loading ? loadingScreen : null}
      </>
    )
  }

  return (
    <div className={styles.ebooksPage} onLoad={() => setLoading(false)}>
      <LoadingScreen />
      <h2 id={styles.title}>Ebooks</h2>
      <SearchBar 
        onChange={{
          onInputChange: ({target}) => setFilter(target.value),
          onSelectChange: ({target}) => setKeyword(target.value),
          onSortClick: () => setSort(!sort),
        }}
        sort={sort}
      />
      <div id={styles.ebooksPageContainer}>
        <Library filter={filter} keyword={keyword} sort={sort}/>
      </div>
    </div>
  )
}

export default EbooksPage;
