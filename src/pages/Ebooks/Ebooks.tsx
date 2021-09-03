// essentials
import { useState } from 'react';
import styles from './Ebooks.module.css';

// components
import Library from "../../components/Library/Library";
import SearchBar from '../../components/SearchBar/SearchBar';

const Ebooks = () => {
  // search options
  const [ filter, setFilter ] = useState("");
  const [ keyword, setKeyword ] = useState("title");
  const [ sort, setSort ] = useState(null);

  return (
    <>
      <div className={styles.ebooks}>
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
