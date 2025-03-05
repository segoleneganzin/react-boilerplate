import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import Settings from './pages/Settings';
import ProtectedRoute from './middlewares/ProtectedRoute';
import Auth from './pages/Auth';
import RedirectIfLoggedIn from './middlewares/RedirectIfLoggedIn';
import PrivateProfile from './pages/PrivateProfile';

const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <RedirectIfLoggedIn>
            <LandingPage />
          </RedirectIfLoggedIn>
        }
      />
      {/* auth routes */}
      <Route
        path='/sign-in'
        element={
          <RedirectIfLoggedIn>
            <Auth formType='signIn' />
          </RedirectIfLoggedIn>
        }
      />
      <Route
        path='/sign-up'
        element={
          <RedirectIfLoggedIn>
            <Auth formType='signUp' />
          </RedirectIfLoggedIn>
        }
      />
      {/* owner route */}
      <Route
        path='/profile'
        element={
          <ProtectedRoute authorizedStatus='all'>
            <PrivateProfile />
          </ProtectedRoute>
        }
      />
      {/* administration route */}
      <Route
        path='/settings'
        element={
          <ProtectedRoute authorizedStatus='all'>
            <Settings />
          </ProtectedRoute>
        }
      />
      {/* NotFound */}
      <Route path='*' element={<LandingPage />} />
    </Routes>
  );
};

export default Router;
