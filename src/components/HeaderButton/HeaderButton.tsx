import styles from "./HeaderButton.module.css";

interface props {
   title: string;
   action: any;
}

const HeaderButton = (props: props) => {
   return (
      <p className={styles.HeaderButton} onClick={props.action}>{props.title}</p>
   )
}

export default HeaderButton;