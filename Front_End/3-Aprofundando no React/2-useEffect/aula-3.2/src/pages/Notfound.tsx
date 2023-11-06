import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para home</Link>
    </>
  );
}

export default Notfound;
