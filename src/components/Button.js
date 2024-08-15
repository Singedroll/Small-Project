import styles from "../Components/Button.module.css";
export default function Button(props) {
  const { text, disabled } = props;
  return (
    <button disabled={disabled} className={styles.error}>
      {props.number}
    </button>
  );
}
