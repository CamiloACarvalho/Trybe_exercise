import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GithubUser } from '../types/github';

function UserProfile() {
  const { username } = useParams();

  const [user, setUser] = useState<GithubUser>();

  useEffect(
    () => {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        });
    },
    [username],
  );

  console.count('Render');

  return (
    <div className="wrapper user-profile">
      {user
        ? (
          <>
            <h2>{`Perfil de ${user.name}`}</h2>
            <img src={ user.avatar_url } alt={ `Imagem de ${user.name}` } />
            <p>{user.location}</p>
            <Link to={ `/user/${username}/repos` }>Ver repositórios</Link>
          </>
        )
        : (
          <p>Carregando...</p>
        )}

      <Link to="/">Voltar para home</Link>

    </div>
  );
}

export default UserProfile;

// 👇 O código abaixo foi usado na primeira parte da aula
// 👇 para explicar o useEffect:

// const [counter, setCounter] = useState(0);
// const [counter2, setCounter2] = useState(0);

// // useEffect(
// //   () => {
// //     console.log('useEffect1');
// //     // setCounter((prevState) => prevState + 1);
// //   },
// //   // [] -> ele vai executar SOMENTE na primeira vez que o componente for montado
// //   // [counter] -> ele vai executar na primeira que o componente for montado e toda vez que o counter for atualizado
// //   // X -> ele vai executar toda vez que o componente for renderizado
// //   [counter, counter2],
// // );

// useEffect(
//   () => {
//     const interval = setInterval(
//       () => { console.count('interval'); },
//       1000,
//     );

//     return () => {
//       console.log('Bye bye UserProfile');
//       clearInterval(interval);
//     };
//   },
//   [],
// );

// console.count('Render');
