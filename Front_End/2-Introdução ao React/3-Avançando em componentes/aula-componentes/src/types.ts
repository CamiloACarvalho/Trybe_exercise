export type Icons = 'cloudy' | 'sunny' | 'na' | 'rainy' | 'thunderstorm';

export type ForecastType = {
  weekday: string;
  date: string;
  temp: string;
  icon: Icons;
  weather: string;
};
