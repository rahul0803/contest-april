import React, { useState } from 'react';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Invalid username or password.');
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        window.location.href = '/profile';
        // console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  
  return (
    <div className='login'>
      <h1 className='heading'>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className='btn'>Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;