import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import styles from './SearchBar.module.css';

interface props {
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onSelectChange: ChangeEventHandler<HTMLSelectElement>;
  onSortClick: MouseEventHandler<HTMLButtonElement>;
}

const SearchBar = (props: props) => {

  return (
    <>
      <div className={styles.SearchBar}>
        <input type="text" onChange={props.onInputChange} className={styles.element} id={styles.input} placeholder="Search..."/>
        <select onChange={props.onSelectChange} className={styles.element} id={styles.select}>
          <option selected value="title">Title</option>
          <option value="author">Author</option>
          <option value="language">Language</option>
        </select>
        <button onClick={props.onSortClick} className={styles.element} id={styles.button}>Sort Alphabetically</button>
      </div>
      <hr id={styles.hr}/>
    </>
  )
}

export default SearchBar;
