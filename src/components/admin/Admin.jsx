import Edit from "./edit/Edit";
import styles from "./Admin.module.css";
import { useState } from "react";

const Admin = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.p}>Змінити резюме</h1>
      <Edit />
    </div>
  );
};

export default Admin;
