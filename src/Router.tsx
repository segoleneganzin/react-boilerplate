import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      {/* NotFound */}
      <Route path='*' element={<Home />} />
    </Routes>
  );
};

export default Router;
