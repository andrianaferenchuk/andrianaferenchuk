import { Input } from "rsuite";
import Message from "./message/Message";
import List from "./list/List";
import React, { useState } from "react";
import ButtonSignUp from "../../Main/button/ButtonSignUp";
import { addInfo, deleteInfo, getInfo } from "../../../firebase/firebaseCalls";
import styles from "./Edit.module.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";

const Edit = () => {
  const data = useSelector((state => state.resumeReducer))
  const newObj = data.resumeInfo
  console.log(newObj);
  const navigate = useNavigate()
  const [newData, setNewData] = useState(newObj);
  const dispatch = useDispatch()

  const contactInfo =
    newData?.contactInfo &&
    newData.contactInfo.map((e, index) => {
      return (
        <Message
          header={e.header}
          data={e.data}
          onChange={(data) => {
            let contactInfo = [...newData.contactInfo];
            contactInfo.splice(index, 1, { header: e.header, data })
            setNewData({
              ...newData,
              contactInfo: [
                ...contactInfo
              ],
            });
          }}
        />
      );
    });

  const knowledgesSkills =
    newData?.skills &&
    newData.skills.map((e, index) => {
      return (
        <Input
          as="textarea"
          value={e.data}
          rows={4}
          style={{ resize: "none", marginBottom: "15px", marginTop: "7.5px", backgroundColor: "inherit", border: "0", borderBottom: "2px solid gray", borderRadius: "0", color: "rgb(172, 180, 180)", height: "70px", overflow: "hidden"}}
          onChange={(data) => {
            let knowledge = [...newData.skills];
            knowledge.splice(index, 1, { data })
            setNewData({
              ...newData,
              skills: [
                ...knowledge,
              ],
            });
          }}
        />
      );
    });

  const education =
    newData?.education &&
    newData.education.map((e, index) => {
      return (
        <Input
          as="textarea"
          value={e.data}
          rows={1}
          style={{ resize: "none", marginBottom: "15px", marginTop: "0", backgroundColor: "inherit", border: "0", borderBottom: "2px solid gray", borderRadius: "0", color: "rgb(172, 180, 180)", height: "60px"}}
          onChange={(data) => {
            let education = [...newData.education];
            education.splice(index, 1, { data })
            setNewData({
              ...newData,
              education: [
                ...education
              ],
            });
          }}
        />
      );
    });

  const anotherInfo =
    newData?.others &&
    newData.others.map((e, index) => {
      return (
        <Message
          header={e.header}
          data={e.data}
          onChange={(data) => {
            let others = [...newData.others];
            others.splice(index, 1, { header: e.header, data })
            setNewData({
              ...newData,
              others: [
                ...others,
              ],
            });
          }}
        />
      );
    });

  return (
    <div className={styles.wrapper}>
      <Message
        header="Ім'я та прізвище:"
        data={newData?.name}
        onChange={(e) => {
          setNewData({
            ...newData,
            name: e,
          });
        }}
      />
      <Message
        header="Бажана посада:"
        data={newData?.desiredPosition}
        onChange={(e) => {
          setNewData({
            ...newData,
            desiredPosition: e,
          });
        }}
      />
      <Message
        header="Бажана ЗП:"
        data={newData?.salary}
        onChange={(e) => {
          setNewData({
            ...newData,
            salary: e,
          });
        }}
      />
      <Message
        header="Дата народження:"
        data={newData?.birthDate}
        onChange={(e) => {
          setNewData({
            ...newData,
            birthDate: e,
          });
        }}
      />
      <Message
        header="Місце проживання:"
        data={newData?.living}
        onChange={(e) => {
          setNewData({
            ...newData,
            living: e,
          });
        }}
      />
      {contactInfo}
      {anotherInfo}
      <Message
        header="Досвід роботи:"
        data={newData?.experience}
        onChange={(e) => {
          setNewData({
            ...newData,
            experience: e,
          });
        }}
      />
      <List header={"Знання та навички:"} data={knowledgesSkills} />
      <List header={"Освіта:"} data={education} />
      <ButtonSignUp
        func={() => {
          addInfo(newData, "resumeData");
          deleteInfo("resumeData", newData.id);
          navigate("/", { replace: true });
        }}
        text="Зберегти зміни"
      />
    </div>
  );
};

export default Edit;
