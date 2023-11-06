import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const navigate = useNavigate();

  const onSearch = (username: string) => {
    navigate(`user/${username}`);
  };

  return (
    <SearchBar
      onSearch={ onSearch }
    />
  );
}

export default HomePage;
