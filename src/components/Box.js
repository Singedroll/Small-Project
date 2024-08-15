import styles from "../Components/Box.module.css";

export default function Box(props) {
  const { text } = props;
  return <div className={styles.box}>{props.text}</div>;
}
