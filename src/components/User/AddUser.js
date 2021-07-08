import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

export const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const UsernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      //* the + insures the conversion of enteredAge into a number
      console.log("invalid input");
      return;
    }
    props.onAddUser({ name: enteredUsername.trim(), age: enteredAge });
    console.log(enteredUsername.trim(), enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
    //console.log("button clicked");
  };

  return (
    <div>
      <ErrorModal title="An Error" message="press okay" />
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
    </div>
  );
};
export default AddUser;
