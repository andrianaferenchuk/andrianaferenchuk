import React from "react";
import Resume from "./components/Resume";
import styles from "./App.module.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.wrapper}>
        <div className={styles.App}>
          <Resume />
        </div>
      </div>
    </Provider>
  );
};

export default App;
