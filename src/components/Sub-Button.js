import styles from "../components/Sub-Button.module.css";

export default function Button(props) {
  const { text } = props;
  const logger = () => {
    console.log("click");
  };
  return (
    <button className={styles.button} onClick={logger}>
      {text}
    </button>
  );
}
