import {useState} from 'react';

import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const[users, setUsers] = useState([{name: 'shehab', age: '20', id: Math.random().toString()}]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => { //* this fucntion auto gets the prevUsers from react
      user = {...user, id: Math.random().toString()}
      return [...prevUsers, user];
    });
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </>
  );
}

export default App;
