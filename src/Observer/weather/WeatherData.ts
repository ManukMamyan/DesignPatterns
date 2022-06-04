import type ISubject from './ISubject';
import type IObserver from './IObserver';

class WeatherData implements ISubject {
  private observers: IObserver[] = [];
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  public registerObserver = (observer: IObserver) => {
    this.observers.push(observer);
  };

  public removeObserver = (observer: IObserver) => {
    this.observers.filter((observerObj) => {
      return observerObj !== observer;
    });
  };

  public notifyObservers = () => {
    this.observers.forEach((observer) => {
      observer.update();
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

  public getTemperature() {
    return this.temperature;
  }

  public getHumidity() {
    return this.humidity;
  }

  public getPressure() {
    return this.pressure;
  }
}

export default WeatherData;
