import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp } from '../services/authService';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const history = useHistory(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = await signUp({ username, password, name });
    console.log('New user signed up:', newUser);

    // Redirect to the task list page after signing up
    history.push('/tasks');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
