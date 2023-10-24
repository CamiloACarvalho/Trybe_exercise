import { ForecastType } from '../types';

import './Card.css';

function Card({ weekday, date, temp, image, weather } : ForecastType) {
  // const { weekday, date, temp, image, weather } = props;

  return (
    <div className="card__item">
      <h2 className="weekday">{weekday}</h2>
      <p className="date">{date}</p>
      {/* { image && (<img src={image} alt={`${weather} icon`} />) } */}
      {
        image
          ? (<img src={ image } alt={ `${weather} icon` } />)
          : <span>🚫</span>
      }
      <p className="temperature">{temp}</p>
      <p className="weather">{weather}</p>
    </div>
  );
}

export default Card;
