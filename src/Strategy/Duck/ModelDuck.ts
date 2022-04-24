import type IFlyBehavior from '../FlyBehavior/IFlyBehavior';
import FlyNoWay from '../FlyBehavior/FlyNoWay';
import type IQuackBehavior from '../QuackBehavior/IQuackBehavior';
import Quack from '../QuackBehavior/Quack';
import Duck from './Duck';

class ModelDuck extends Duck {
  constructor(fly?: IFlyBehavior, quack?: IQuackBehavior) {
    const flyBehavior = fly || new FlyNoWay();
    const quackBehavior = quack || new Quack();

    super(flyBehavior, quackBehavior);
  }

  display = () => {
    console.log("I'm a model duck");
  };
}

export default ModelDuck;
