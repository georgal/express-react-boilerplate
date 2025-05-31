import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const testApi = async () => {
    axios.get('/api/test')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  }

  const register = async () => {
    try {
      console.log('im submitting register')
      const res = await axios.post('/api/auth/register', form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.error || 'Registration failed');
    }
  };

  const login = async () => {
    try {
      const res = await axios.post('/api/auth/login', form, { withCredentials: true });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.error || 'Login failed');
    }
  };

  const logout = async () => {
    try {
      const res = await axios.post('/api/auth/logout', {}, { withCredentials: true });
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Logout failed');
    }
  };

  const getProtected = async () => {
    try {
      const res = await axios.get('/api/auth/protected', { withCredentials: true });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.error || 'Access denied');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Secure Auth Boilerplate Express JS - React - MongoDB -Tailwind
        </h1>
      </div>
      <h1>React + Express Auth with HttpOnly Cookies</h1>
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />
      <br />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <br />
      <button onClick={testApi} className="bg-blue-500 text-white px-4 py-2 rounded m-2">Test API</button>
      <button onClick={register} className="bg-blue-500 text-white px-4 py-2 rounded m-2">Register</button>
      <button onClick={login} className="bg-green-500 text-white px-4 py-2 rounded m-2">Login</button>
      <button onClick={logout} className="bg-yellow-500 text-white px-4 py-2 rounded m-2">Logout</button>
      <button onClick={getProtected} className="bg-purple-500 text-white px-4 py-2 rounded m-2">Protected</button>

      <p>{message}</p>
    </div>
  );
}

export default App;
