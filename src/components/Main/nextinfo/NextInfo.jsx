import ButtonSignUp from "../button/ButtonSignUp";
import styles from "./NextInfo.module.css";
import { getInfo } from "../../../firebase/firebaseCalls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { actions } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const NextInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const selector = useSelector((state => state.resumeReducer.resumeInfo))
  const [store, setStore] = useState({});
  // useEffect(() => {
  //   getInfo(setStore, "resumeData");
  // }, []);

  // useEffect(() => {
  //   if (store) {
  //     dispatch(actions.SET_RESUME_INFO(store))
  //   }
  //   console.log(store);
  // }, [store])

  const skills =
    selector?.skills &&
    selector?.skills.map((e) => {
      return (
        <>
          <li className={styles.point}>{e.data}</li>
        </>
      );
    });

  const education =
    selector?.education &&
    selector?.education.map((e) => {
      return (
        <>
          <li className={styles.point}>{e.data}</li>
        </>
      );
    });

  const anotherInfo =
    selector?.others &&
    selector?.others.map((e) => {
      return (
        <>
          <li className={styles.point}>
            {e.header}
            {e.data}
          </li>
        </>
      );
    });
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.point}>Знання та навички:</p>
        <ul>{skills}</ul>
        <br />
        <p className={styles.point}>
          Досвід роботи: <span>{selector?.experience}</span>
        </p>
        <br></br>
        <p className={styles.point}>Освіта:</p>
        <ul style={{ listStyleType: "none", margin: "0" }}>{education}</ul>
        <br></br>
        <p className={styles.point}>Додаткова інформація:</p>
        <ul>{anotherInfo}</ul>
      </div>
      <div className={styles.buttonWrapper}>
        <ButtonSignUp
          text={"Змінити резюме"}
          func={() => {
            navigate("/login", { replace: true });
          }}
        />
      </div>
    </>
  );
};

export default NextInfo;
