import Title from './components/Title';
import Card from './components/Card';

import { forecastList } from './data/forecast';

function App() {
  return (
    <>
      {/* <Title
        title="Previsão do tempo"
      /> */}
      <Title>
        Previsão do tempo semanal!
      </Title>
      {
        forecastList.map((forecastInfo) => (
          <Card
            key={ forecastInfo.weekday }
            weekday={ forecastInfo.weekday }
            date={ forecastInfo.date }
            temp={ forecastInfo.temp }
            image={ forecastInfo.image }
            weather={ forecastInfo.weather }
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
