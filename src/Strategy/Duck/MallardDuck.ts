import type IFlyBehavior from '../FlyBehavior/IFlyBehavior';
import FlyWithWings from '../FlyBehavior/FlyWithWings';
import type IQuackBehavior from '../QuackBehavior/IQuackBehavior';
import Quack from '../QuackBehavior/Quack';
import Duck from './Duck';

class MallardDuck extends Duck {
  constructor(fly?: IFlyBehavior, quack?: IQuackBehavior) {
    const flyBehavior = fly || new FlyWithWings();
    const quackBehavior = quack || new Quack();

    super(flyBehavior, quackBehavior);
  }

  display = () => {
    console.log("I'm a real Mallard duck");
  };
}

export default MallardDuck;
