import { useState } from "react";

import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import styles from "./AddUser.module.css";

export const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState();

  const UsernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername,enteredAge);
    //console.log("button clicked");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input
          id="username"
          htmlFor="username"
          type="text"
          value={enteredUsername} //* when changing state from devtools its reflected in the app by doing this
          onChange={UsernameChangeHandler}
        />
        <label>Age</label>
        <input
          id="age"
          htmlFor="age"
          type="number"
          value={enteredAge}
          onChange={AgeChangeHandler}
        />
        <Button onClick={addUserHandler}>Add User</Button>
      </form>
    </Card>
  );
};
