import { Route, Routes } from 'react-router-dom'; // Tive que instalar npm install react-router-dom

import HomePage from './pages/HomePage';
import UserProfile from './pages/UserProfile';
import Notfound from './pages/Notfound';
import Layout from './components/Layout';
import UserRepos from './pages/UserRepos';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/user/:username" element={ <UserProfile /> } />
        <Route path="/user/:username/repos" element={ <UserRepos /> } />
      </Route>

      <Route path="*" element={ <Notfound /> } />
    </Routes>
  );
}

export default App;
