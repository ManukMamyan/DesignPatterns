import type IObserver from './IObserver';

interface ISubject {
  registerObserver: (observer: IObserver) => void;
  removeObserver: (observer: IObserver) => void;
  notifyObservers: () => void;
}

export default ISubject;
