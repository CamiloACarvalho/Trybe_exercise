import { HiMagnifyingGlass } from 'react-icons/hi2'; // tive que instalar npm install react-icons
import './SearchBar.css';
import { useState } from 'react';

type SearchBarProps = {
  onSearch: (username: string) => void;
  loading?: boolean;
};

function SearchBar({ onSearch, loading = false }: SearchBarProps) {
  const [search, setSearch] = useState<string>('');

  return (
    <div className="search-bar">
      <div className="wrapper">
        <HiMagnifyingGlass />
        <input
          type="text"
          placeholder="Search"
          onChange={ (e) => setSearch(e.target.value) }
        />
        <button onClick={ () => onSearch(search) }>
          <span>Search </span>
          { loading && <span className="spinner" />}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
