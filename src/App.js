import React from 'react';

import { AddUser } from './User/AddUser';

function App() {
  const usernameChangeHandler = () => {

  }
  return (
    <div>
      <AddUser onUsernameChange={usernameChangeHandler}/>
    </div>
  );
}

export default App;
