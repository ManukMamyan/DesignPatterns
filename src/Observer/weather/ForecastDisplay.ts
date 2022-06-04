import type IObserver from './IObserver';
import type IDisplayElement from './IDisplayElement';
import type WeatherData from './WeatherData';

class ForecastDisplay implements IObserver, IDisplayElement {
  private currentPressure: number = 29.92;
  private lastPressure!: number;
  private weatherData!: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update = () => {
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.getPressure();

    this.display();
  };

  public display = () => {
    console.log('Forecast: ');
    if (this.currentPressure > this.lastPressure) {
      console.log('Improving weather on the way!');
    } else if (this.currentPressure < this.lastPressure) {
      console.log('Watch out for cooler, rainy weather');
    } else {
      console.log('More of the same');
    }
  };
}

export default ForecastDisplay;
