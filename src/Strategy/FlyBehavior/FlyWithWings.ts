import type IFlyBehavior from './IFlyBehavior';

class FlyWithWings implements IFlyBehavior {
  fly = () => {
    console.log('I am flying!');
  };
}

export default FlyWithWings;
