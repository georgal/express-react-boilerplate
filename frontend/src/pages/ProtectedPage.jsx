import { useEffect, useState } from 'react';
import { checkAccess } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccess = async () => {
      try {
        await checkAccess();
        setAuthorized(true);
      } catch (err) {
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    verifyAccess();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (!authorized) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">🔒 Protected Page</h2>
      <p>Only visible if you’re authenticated.</p>
    </div>
  );
};

export default ProtectedPage;
