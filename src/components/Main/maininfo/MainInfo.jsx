import styles from "./MainInfo.module.css";
import { useEffect, useState } from "react";
import { getInfo, uploadToFb } from "../../../firebase/firebaseCalls";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../redux/actions";

const MainInfo = () => {
  const [store, setStore] = useState();
  const selector = useSelector((state => state.resumeReducer.resumeInfo))
  const dispatch = useDispatch()

  useEffect(() => {
      getInfo(setStore, "resumeData");
  }, [])

  useEffect(() => {
      console.log(store);
      if(store){
        dispatch(actions.SET_RESUME_INFO(store))
      }
  }, [store])

  const contactInfo =
    selector?.contactInfo &&
    selector.contactInfo.map((e) => {
      return (
        <>
          <p className={styles.point}>
            {e.header}: {e.data}
          </p>
        </>
      );
    });
  return (
    <>
      <h1 className={styles.point}>Резюме</h1>
      <div className={styles.wrapper}>
        {selector?.name && (
          <div className={styles.info}>
            <p className={styles.point}>{selector?.name}</p>
            <br></br>
            <p className={styles.point}>
              Бажана посада: <span>{selector?.desiredPosition}</span>
            </p>
            <p className={styles.point}>
              Бажаний рівень доходу: <span>{selector?.salary}</span>
            </p>
            <br></br>
            <p className={styles.point}>
              Дата народження: <span>{selector?.birthDate}</span>
            </p>
            <p className={styles.point}>
              Місце проживання: <span>{selector?.living}</span>
            </p>
            <br></br>
            <p className={styles.point}>Контактна інформація</p>
            <div>{contactInfo}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainInfo;
