import { useState } from 'react';
import {
  register,
  login,
  logout,
  checkAccess,
  testApi,
} from '../services/authService';
import AuthForm from '../components/authForm';
import MessageBox from '../components/messageBox';

const HomePage = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handle = async (actionFn) => {
    try {
      const res = await actionFn(form);
      setMessage(res.data.message);
    } catch (err) {
      const errMsg =
        err?.response?.data?.error ||
        err?.response?.data?.errors?.[0]?.msg ||
        'Action failed';
      setMessage(errMsg);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">
        Secure Auth Boilerplate (React + Express)
      </h1>

      <AuthForm form={form} onChange={handleChange} />

      <div className="flex flex-wrap gap-2 mt-4">
        <button onClick={() => handle(testApi)} className="btn-blue">
          Test API
        </button>
        <button onClick={() => handle(register)} className="btn-blue">
          Register
        </button>
        <button onClick={() => handle(login)} className="btn-green">
          Login
        </button>
        <button onClick={() => handle(() => logout())} className="btn-yellow">
          Logout
        </button>
        <button onClick={() => handle(() => checkAccess())} className="btn-purple">
          Check Access
        </button>
      </div>

      <MessageBox message={message} />
    </div>
  );
};

export default HomePage;
