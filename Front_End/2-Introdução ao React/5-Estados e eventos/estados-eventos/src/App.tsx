import { useState } from 'react';
import Swal from 'sweetalert2';

import { cities as citiesList } from './data/cities';

function App() {
  const [cities, setCities] = useState(citiesList);
  const [visitedCities, setVisitedCities] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  function handleAddCity(cityName: string) {
    if (!visitedCities.some((city) => city === cityName)) {
      setVisitedCities([...visitedCities, cityName]);
    } else {
      Swal.fire({
        text: `Você já visitou ${cityName}`,
        icon: 'error',
      });
    }
  }

  function handleRemoveCity(cityName: string) {
    // cityName = "são paulo"

    // ["são paulo", "rio de janeiro"]
    const newCities = visitedCities.filter((city) => city !== cityName);

    // ["rio de janeiro"]
    setVisitedCities(newCities);
  }

  return (
    <>

      <div>
        <h2>Pesquise uma cidade</h2>
        <input
          type="text"
          placeholder="Digite o nome de uma cidade"
          value={ search }
          onChange={ (e) => setSearch(e.target.value) }
        />
      </div>

      <div>

        <h2>Cidades que ainda não visitei</h2>
        <ul>
          {
          cities
            .filter((city) => (
              city.name.toLowerCase()
                .includes(search.toLocaleLowerCase())))
            .filter((city) => !visitedCities
              .some((visited) => visited === city.name))
            .map((city) => (
              <li key={ city.id }>
                {city.name}
                <button
                  type="button"
                  onClick={ () => handleAddCity(city.name) }
                >
                  Já visitei
                </button>
              </li>
            ))
          }
        </ul>
      </div>

      <div>
        <h2>Cidades visitadas</h2>
        <ul>
          {
          visitedCities.map((city) => (
            <li key={ city }>
              {city}
              <button
                type="button"
                onClick={ () => handleRemoveCity(city) }
              >
                Remover
              </button>
            </li>
          ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
