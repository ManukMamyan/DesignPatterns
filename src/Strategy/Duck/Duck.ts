import type IFlyBehavior from '../FlyBehavior/IFlyBehavior';
import type IQuackBehavior from '../QuackBehavior/IQuackBehavior';

abstract class Duck {
  flyBehavior: IFlyBehavior;
  quackBehavior: IQuackBehavior;

  constructor(fly: IFlyBehavior, quack: IQuackBehavior) {
    this.flyBehavior = fly;
    this.quackBehavior = quack;
  }

  public setFlyBehavior = (fly: IFlyBehavior) => {
    this.flyBehavior = fly;
  };

  public setQuackBehavior = (quack: IQuackBehavior) => {
    this.quackBehavior = quack;
  };

  performFly = () => {
    this.flyBehavior.fly();
  };

  performQuack = () => {
    this.quackBehavior.quack();
  };

  abstract display: () => void;

  public swim = () => {
    console.log('All ducks float, even decoys');
  };
}

export default Duck;
