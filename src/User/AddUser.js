import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import styles from "./AddUser.module.css";

export const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
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
          onChange={props.onUsernameChange}
        />
        <label>Age</label>
        <input
          id="age"
          htmlFor="age"
          type="number"
          onChange={props.onAgeChange}
        />
        {/* <button type="submit">Add User</button> */}
        <Button onClick={addUserHandler}>Add User</Button>
      </form>
    </Card>
  );
};
