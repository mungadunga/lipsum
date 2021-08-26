/* eslint-disable */
// essentials
import { useState } from 'react';
import eS from './Ebook.module.css';
import mS from './Modal.module.css';

interface props {
  title: string;
  author: string;
  category: string;
  language: string;
  description: string;
  summary: string;
  cover: any;
  downloadPDF: any;
  downloadKindle: any;
}

const Ebook = (props: props) => {

  const [modalState, setModalState] = useState(false);

  const Modal = (
    <div id={mS.modal}>
      <div id={mS.modalContent}>
        <span className={mS.close} onClick={() => setModalState(false)}>&times;</span>
        <>
          <h1>{props.title}</h1>
          <em><h2>{props.author}</h2></em>
          <br /><hr /><br />
        </>
        <>
          <h3>{props.category ? "Category" : null}</h3>
          <p>{null || props.category}</p>
          {props.category && <br />}

          <h3>Description</h3>
          <p>{props.description}</p>
          <br />

          <h3>Summary</h3>
          {/* <p>category: {props.category || "..."}</p> */}
          <p>{props.summary}</p>
          <br />

          <h3>Language:</h3>
          <p>{props.language[0].toUpperCase() + [...props.language].slice(1).join("")}</p>
          <br />
          
          <hr /><br />
        </>
        <>
          <h1>Download</h1>
          <br />

          PDF: <a href={props.downloadPDF} download={props.downloadPDF}><button>Download</button></a>
          <br />

          Kindle: <a href={props.downloadKindle} download={props.downloadKindle}><button>Download</button></a>
        </>
      </div>
    </div>
  )



  return (
    <div id={eS.ebook} onClick={() => modalState ? null : setModalState(true)}>
      <h5 id={eS.ebookLang}>{[...props.language].slice(0, 2).join("").toUpperCase()}</h5>
      <h3 id={eS.ebookTitle}>{props.title}</h3>
      <em><h4 id={eS.ebookAuthor}>{props.author}</h4></em>
      <img src={props.cover} alt={props.title} />
      <h4 id={eS.ebookDescription}>{props.description.substring(0, 50) + "..."}</h4>
      {modalState && Modal}
    </div>
  )
}

export default Ebook;
