import Card from './components/Card';
import Title from './components/Title';

import { forecastList } from './data/forecast';

function App() {
  // eventHandler
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    const day = forecastList.find(
      (forecast) => forecast.weekday === value,
    );

    if (day) {
      alert(`${day.weekday} | ${day.temp} - ${day.weather}`);
    } else {
      alert('Dia não encontrado');
    }
  }

  function handleClick(weekday: string) {
    const day = forecastList.find(
      (forecast) => forecast.weekday === weekday,
    );

    if (day) {
      const { date, temp, weather } = day;
      alert(`${date} | ${temp} - ${weather}`);
    } else {
      alert('Dia não encontrado');
    }
  }

  return (
    <>
      <Title>
        Previsão do tempo semanal!
      </Title>

      <select
        onChange={ handleChange }
      >
        <option disabled selected>Selecione o dia</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Sunday">Sunday</option>
      </select>
      {
        forecastList.map((forecastInfo) => (
          <Card
            key={ forecastInfo.weekday }
            weekday={ forecastInfo.weekday }
            icon={ forecastInfo.icon }
            weather={ forecastInfo.weather }
            onClick={ () => { handleClick(forecastInfo.weekday); } }
          />
        ))
      }

      <Title>
        Noticias da semana
      </Title>

    </>
  );
}

export default App;
