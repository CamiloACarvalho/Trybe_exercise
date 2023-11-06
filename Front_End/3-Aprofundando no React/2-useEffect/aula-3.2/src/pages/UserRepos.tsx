import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserRepos() {
  const { username } = useParams();

  const [repos, setRepos] = useState<{ name: string }[]>();

  useEffect(
    () => {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => {
          setRepos(data);
        });
    },
    [username],
  );

  return (
    <div className="wrapper">
      <h2>{`Repositórios de ${username}`}</h2>

      {repos
        ? (
          <ul>
            {repos.map((repo) => (
              <li key={ repo.name }>{repo.name}</li>
            ))}
          </ul>
        )
        : (<p>Carregando...</p>)}

    </div>
  );
}

export default UserRepos;
