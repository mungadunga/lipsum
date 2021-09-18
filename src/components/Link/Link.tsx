import React from 'react';
import styles from './Link.module.css';

interface props {
  className?: string;
  children: any;
  switchPageHandler: Function;
  to: any;
}

const Link = (props: props) => (
  <div className={`${styles.Link} ${props.className ? props.className : ''}`} onClick={() => props.switchPageHandler(props.to)}>
    {props.children}
  </div>
);

export default Link;
