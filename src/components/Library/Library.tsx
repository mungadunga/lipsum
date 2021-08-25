import React, {useState} from 'react';
import styles from './Library.module.css';

import Ebook from '../Ebook/Ebook';
import LIBRARY from '../../assets/library';
import { useEffect } from 'react';

interface props {
  filter: string;
  filterKeyword: string;
  sort: true | false | null;
}

const Library = (props: props) => {

  return (
    <>
      {
        LIBRARY.filter(elem => elem[props.filterKeyword].toLowerCase()?.includes(props.filter.toLowerCase())).sort((a, b) => props.sort ? ('' + a[props.filterKeyword]).localeCompare(b[props.filterKeyword]) : null).map(elem => (
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
          />
        ))
      }
    </>
  )
}

export default Library;
