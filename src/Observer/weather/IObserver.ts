interface IObserver {
  update: ({
    temp,
    humidity,
    pressure,
  }: {
    temp: number;
    humidity: number;
    pressure: number;
  }) => void;
}

export default IObserver;
