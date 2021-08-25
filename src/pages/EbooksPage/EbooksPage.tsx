import { useRef, useState } from 'react';
import styles from './EbooksPage.module.css';

import Library from "../../components/Library/Library";
import SearchBar from '../../components/SearchBar/SearchBar';

const EbooksPage = () => {

  const [filter, setFilter] = useState("");
  const [filterKeyword, setFilterKeyword] = useState("title");
  const [sort, setSort] = useState(null);

  const handleInputChange = ({target}) => setFilter(target.value);
  const handleSelectChange = ({target}) => setFilterKeyword(target.value);
  const handleSortClick = () => setSort(!sort);

  return (
    <div className={styles.ebooksPage}>
      <h2 id={styles.title}>Ebooks</h2>
      <SearchBar onInputChange={handleInputChange} onSelectChange={handleSelectChange} onSortClick={handleSortClick}/>
      <div id={styles.ebooksPageContainer}>
        <Library filter={filter} filterKeyword={filterKeyword} sort={sort}/>
      </div>
    </div>
  )
}

export default EbooksPage;
