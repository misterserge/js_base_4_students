import { useState } from 'react';

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userData = {
      // username: event.target.username.value,
      // password: event.target.password.value,
      username,
      password,
    };
    console.log(userData);
    alert(JSON.stringify(userData));
  };
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
