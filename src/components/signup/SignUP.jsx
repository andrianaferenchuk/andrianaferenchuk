import { Form, ButtonToolbar, Button, Schema } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useDispatch } from "react-redux";
import { forwardRef, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUP.module.css"
import { actions } from "../../redux/actions";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  age: NumberType("Please enter a valid number.").range(
    18,
    120,
    "Please enter a number from 18 to 120"
  ),
  password: StringType().isRequired("This field is required."),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, "The two passwords do not match")
    .isRequired("This field is required."),
});

const TextField = forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <>
      <Form.Group controlId={{ name } - 4} ref={ref}>
        <Form.ControlLabel style={{color: "rgb(172, 180, 180)"}}>{label} </Form.ControlLabel>
        <Form.Control name={name} accepter={accepter} {...rest}></Form.Control>
      </Form.Group>
    </>
  );
});

const SignUP = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    verifyPassword: "",
  });
  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    } else {
      dispatch(actions.SET_USER_DATA(formValue));
      console.log(formValue, "Form Value");
      navigate("/admin", { replace: true });
      setIsAuth(true)
    }
  };

  return (
    <div className={ styles.wrapperMain}>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={formRef}
        onChange={setFormValue}
        formValue={formValue}
        model={model}
      >
        <TextField name="name" label="Username" />
        <TextField name="email" label="Email" />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="off"
        />
        <TextField
          name="verifyPassword"
          label="Verify password"
          type="password"
          autoComplete="off"
        />
        <ButtonToolbar className={styles.wrapper}>
          <Button appearance="primary" onClick={handleSubmit} className={styles.button}>
            Sign up
          </Button>

        </ButtonToolbar>
      </Form>
    </div>
  );
};

export default SignUP;

