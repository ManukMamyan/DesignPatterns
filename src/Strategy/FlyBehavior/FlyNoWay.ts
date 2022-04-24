import type IFlyBehavior from './IFlyBehavior';

class FlyNoWay implements IFlyBehavior {
  fly = () => {
    console.log('I can not fly :(');
  };
}

export default FlyNoWay;
