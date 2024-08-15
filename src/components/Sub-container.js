import styles from "../components/Sub-container.module.css";
import Input from "../components/Sub-Input";
import Button from "../components/Sub-Button";
export default function Container(props) {
  const { title, text } = props;
  const inputdatas = ["First name", "Last name", "Email"];

  function mapper(inputdata, index) {
    return <Input placeholder={inputdata} key={index} />;
  }

  return (
    <div className={styles.container}>
      <h1> {props.title}</h1>
      <p>{props.text}</p>
      <div className={styles.input_holder}>
        {/* <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="Email" /> */}
        {inputdatas.map(mapper)}
      </div>
      <Button text="Subscribe" />
    </div>
  );
}
