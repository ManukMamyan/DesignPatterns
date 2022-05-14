import MallardDuck from './Strategy/Duck/MallardDuck';
import ModelDuck from './Strategy/Duck/ModelDuck';
import FlyRocketPowered from './Strategy/FlyBehavior/FlyRocketPowered';
import WeatherData from './Observer/weather/WeatherData';
import CurrentConditionsDisplay from './Observer/weather/CurrentConditionsDisplay';
import StatisticsDisplay from './Observer/weather/StatisticsDisplay';
import ForecastDisplay from './Observer/weather/ForecastDisplay';
import HeatIndexDisplay from './Observer/weather/HeatIndexDisplay';

const mallardDuck = new MallardDuck();
const modelDuck = new ModelDuck();

console.log('> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >');

mallardDuck.display();
mallardDuck.performQuack();
mallardDuck.performFly();

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');

modelDuck.display();
modelDuck.performQuack();
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyRocketPowered());
modelDuck.performFly();

console.log('> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >');

console.log('> > > > > > > > > > > > Weather Data > > > > > > > > > > > > >');

const weatherData = new WeatherData();
const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);
const heatIndexDisplay = new HeatIndexDisplay(weatherData);

weatherData.setMeasurements({ temperature: 80, humidity: 65, pressure: 30.4 });
weatherData.setMeasurements({ temperature: 82, humidity: 70, pressure: 29.2 });
weatherData.setMeasurements({ temperature: 78, humidity: 90, pressure: 29.2 });
