import type IObserver from './IObserver';
import type IDisplayElement from './IDisplayElement';
import type WeatherData from './WeatherData';

class CurrentConditionsDisplay implements IObserver, IDisplayElement {
  private temperature!: number;
  private humidity!: number;
  private weatherData!: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update = ({
    temp,
    humidity,
  }: {
    temp: number;
    humidity: number;
    pressure: number;
  }) => {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  };

  public display = () => {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`,
    );
  };
}

export default CurrentConditionsDisplay;
