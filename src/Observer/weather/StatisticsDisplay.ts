import type IObserver from './IObserver';
import type IDisplayElement from './IDisplayElement';
import type WeatherData from './WeatherData';

class StatisticsDisplay implements IObserver, IDisplayElement {
  private maxTemp: number = 0;
  private minTemp: number = 200;
  private tempSum: number = 0;
  private numReadings: number = 0;
  private weatherData!: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update = ({
    temp,
  }: {
    temp: number;
    humidity: number;
    pressure: number;
  }) => {
    this.tempSum += temp;
    this.numReadings++;

    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    if (temp < this.minTemp) {
      this.minTemp = temp;
    }

    this.display();
  };

  public display = () => {
    console.log(
      `Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${
        this.maxTemp
      }/${this.minTemp}`,
    );
  };
}

export default StatisticsDisplay;
