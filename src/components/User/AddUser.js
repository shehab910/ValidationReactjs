import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

export const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setErorr] = useState();

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
      enteredAge.trim().length === 0
    ) {
      setErorr({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      });
      return;
    }
    
    if(+enteredAge < 1){ //* the + insures the conversion of enteredAge into a number
      setErorr({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)."
      });
      return;
    }
    props.onAddUser({ name: enteredUsername.trim(), age: enteredAge });
    console.log(enteredUsername.trim(), enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
    //console.log("button clicked");
  };
  const errorHandler = () => {
    setErorr(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
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
    </>
  );
};
export default AddUser;
