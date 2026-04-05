import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Settings from './pages/Settings';
import NewVisitor from './pages/NewVisitor';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="membres" element={<Members />} />
          <Route path="parametres" element={<Settings />} />
          <Route path="nouveau-visiteur" element={<NewVisitor />} />
          <Route path="profil-eglise" element={<Profile />} />
        </Route>
        {/* Auth routes outside Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
