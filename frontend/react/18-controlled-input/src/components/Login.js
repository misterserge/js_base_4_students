import { useState } from 'react';

export default function Login() {
  // const [username, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  const [data, setData] = useState({username: '', password: ''})
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userData = {
      // username: event.target.username.value,
      // password: event.target.password.value,
      username,
      password,
    };
    console.log(data);
    alert(JSON.stringify(data));
  };
  const handleInputChange = (e, name) => {
    setData({...data, [name]: e.target.value})
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username
          <input
            type="text"
            onChange={(e) => handleInputChange(e, 'username')}
            value={data.username}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            onChange={(e) => handleInputChange(e, 'password')}
            value={data.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
