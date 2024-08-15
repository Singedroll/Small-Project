import styles from "../Components/Box.module.css";
import styles from "../components/Sub-input.module.css";

export default function Box(props) {
  const { text } = props;
  return <div className={styles.round}>{props.text}</div>;
}
