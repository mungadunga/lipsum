import styles from './LoadingWheel.module.css';

interface props {
  size: number;
  mainColor: string;
  backColor: string;
}

const LoadingWheel = (props: props) => (
  <div className={styles.spin} style={{
    margin: props.size / 2,
    height: props.size,
    width: props.size,
    border: `${props.size / 7.5}px solid ${props.backColor}`,
    borderTop: `${props.size / 7.5}px solid ${props.mainColor}`,
  }}></div>
);

export default LoadingWheel;