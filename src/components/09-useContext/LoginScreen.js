import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const userLogin = {
    id: 1,
    name: 'Fernando'
  };

  return (
    <div>
      <h1>Login Screen</h1>
      <hr/>
      <button
        onClick={() => setUser(userLogin)}
        className="btn btn-outline-primary">
        Agregar
      </button>
    </div>
  )
}
