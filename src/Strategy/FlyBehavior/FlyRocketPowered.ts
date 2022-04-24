import type IFlyBehavior from './IFlyBehavior';

class FlyRocketPowered implements IFlyBehavior {
  fly = () => {
    console.log("I'm flying with a rocket!");
  };
}

export default FlyRocketPowered;
