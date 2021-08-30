// essentials
import { ChangeEventHandler, MouseEventHandler } from 'react';
import styles from './SearchBar.module.css';

interface props {
  onChange: {
    onInputChange: ChangeEventHandler<HTMLInputElement>;
    onSelectChange: ChangeEventHandler<HTMLSelectElement>;
    onSortClick: MouseEventHandler<HTMLButtonElement>;
  }
  sort: boolean | null;
}

const SearchBar = (props: props) => {

  return (
    <>
      <div className={styles.SearchBar}>
        {/* search bar */}
        <input type="text" onChange={props.onChange.onInputChange} className={styles.element} id={styles.input} placeholder="Search..."/>
        {/* dropdown menu  */}
        <select onChange={props.onChange.onSelectChange} defaultValue={"title"} className={styles.element} id={styles.select}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="language">Language</option>
        </select>
        {/* sorting button  */}
        <button onClick={props.onChange.onSortClick} className={styles.element} id={styles.button}>{props.sort ? "Alphabetical Sort Enabled" : "Alphabetical Sort Disabled"}</button>
      </div>
      <hr id={styles.hr}/>
    </>
  )
}

export default SearchBar;
