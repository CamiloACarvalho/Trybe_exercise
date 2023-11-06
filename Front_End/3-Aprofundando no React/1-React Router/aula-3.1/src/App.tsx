import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

/*
  instalou a lib react-router-dom
  englobou a nossa aplicação com a BrowserRouter
  criou a primeira rota com os componentes Routes e Route
  criou a navegação entre as páginas com o componente Link
  criou a página NotFound com a rota * <Route path="*" element={ <NotFound /> } />
  criou uma rota dinâmica usando <Route path="/user/:username" element={ <UserProfile /> } />
  recuperou o parametro da rota com o hook useParams
  fez uma navegação dinâmica com o hook useNavigate
  criou uma rota aninhada para ter um layout específico para um grupo de rotas
  usou o componente Outlet para renderizar as rotas filhas
*/

function App() {
  /*
    <Layout>
      <HomePage />
    </Layout>
  */
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/user/:username" element={ <UserProfile /> } />
      </Route>

      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;