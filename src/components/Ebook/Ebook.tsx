/* eslint-disable */
import React, { useState } from 'react';
import './Ebook.css';
import './EbookModal.css';

interface props {
  title: string;
  author: string;
  lang: string;
  img: any;
  shortDescription: string;
  longDescription: string;
  subject?: string;
  releaseDate?: string
  downloadPDF?: any;
  downloadKindle?: any;
}

const Ebook = (props: props) => {

  const [modalState, setModalState] = useState(false);

  const Modal = (
    <div id="Modal">
      <div id="Modal-content">
        <span className="close" onClick={() => setModalState(false)}>&times;</span>
        <>
          <h1>{props.title}</h1>
          <em><h2>{props.author}</h2></em>
          <br />
        </>
        <>
          <h3>Short Description:</h3>
          <p>{props.shortDescription}</p>
          <br />
          <h3>Long Description:</h3>
          {/* <p>Subject: {props.subject || "..."}</p> */}
          <p>{props.longDescription}</p>
          <br />
        </>
        <>
          <h1>Download</h1>
          PDF:
          <br />
          <a href={props.downloadPDF} download><button>Download</button></a>
          <br />
          Kindle: 
          <br />
          <a href={props.downloadKindle} download><button>Download</button></a>
        </>
      </div>
    </div>
  )



  return (
    <div id="Ebook" onClick={() => modalState ? null : setModalState(true)}>
      <h5 id="Ebook-lang">{[...props.lang].slice(0, 2).join("").toUpperCase()}</h5>
      <h3 id="Ebook-title">{props.title}</h3>
      <em><h4 id="Ebook-author">{props.author}</h4></em>
      <h6 id="Ebook-releaseDate">{props.releaseDate ? props.releaseDate : null}</h6>
      <img src={props.img} alt={props.title} />
      <h4 id="Ebook-shortDescription">{props.shortDescription}</h4>
      {modalState && Modal}
    </div>
  )
}

export default Ebook;
