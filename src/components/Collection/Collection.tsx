import React from 'react';
import styles from './Collection.module.css';

interface iProps {
  title: string;
}

const Collection = (props: iProps) => (
  <div className={styles.Collection}>
    <p>{props.title}</p>
  </div>
);

export default Collection;
