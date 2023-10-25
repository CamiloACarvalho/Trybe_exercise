import icons from '../data/icons';

import { Icons } from '../types';
import styles from './Card.module.css';

type CardProps = {
  weekday: string,
  icon: Icons,
  weather: string,
  onClick: () => void
};

function Card({
  weekday,
  icon,
  weather,
  onClick,
} : CardProps) {
  return (
    <div className={ styles.card__item }>
      <h2 className={ styles.weekday }>{weekday}</h2>
      <img src={ icons[icon] } alt={ `${weather} icon` } />

      <button
        type="button"
        onClick={ onClick }
      >
        Ver mais
      </button>
    </div>
  );
}

export default Card;
