import './Info.css';
import styles from './Info.module.css';
console.log(styles);

const Info = () => {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>heading in the Info component</h2>
      <button className="my-button">Click me in the Info component</button>
      <button className="{styles.myOtherButton}">Click me in the Info component</button>
    </div>
  );
};

export default Info;
