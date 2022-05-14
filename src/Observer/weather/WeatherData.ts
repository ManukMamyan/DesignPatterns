import type ISubject from './ISubject';
import type IObserver from './IObserver';

class WeatherData implements ISubject {
  private observers: IObserver[] = [];
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  registerObserver = (observer: IObserver) => {
    this.observers.push(observer);
  };

  removeObserver = (observer: IObserver) => {
    this.observers.filter((observerObj) => {
      return observerObj !== observer;
    });
  };

  notifyObservers = () => {
    this.observers.forEach((observer) => {
      observer.update({
        temp: this.temperature,
        humidity: this.humidity,
        pressure: this.pressure,
      });
    });
  };

  public measurementsChanged = () => {
    this.notifyObservers();
  };

  public setMeasurements = ({
    temperature,
    humidity,
    pressure,
  }: {
    temperature: number;
    humidity: number;
    pressure: number;
  }) => {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  };
}

export default WeatherData;
