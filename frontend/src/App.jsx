import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProtectedPage from './pages/ProtectedPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/protected" element={<ProtectedPage />} />
    </Routes>
  </Router>
);

export default App;
