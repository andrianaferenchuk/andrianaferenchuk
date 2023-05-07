import styles from "./Message.module.css";
import { Input } from "rsuite";
const Message = ({ header, data, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.p}>{header}</p>
      <Input className={styles.input} value={data} onChange={onChange} style={{borderRadius: 0}}/>
    </div>
  );
};

export default Message;
