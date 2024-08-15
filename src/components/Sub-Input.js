import styles from "../components/Sub-input.module.css";
export default function Input(props) {
  const { placeholder, value } = props;
  return (
    <input className={styles.input} placeholder={placeholder} value={value} />
  );
}
