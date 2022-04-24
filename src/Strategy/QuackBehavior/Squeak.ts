import type IQuackBehavior from './IQuackBehavior';

class Squeak implements IQuackBehavior {
  quack = () => {
    console.log('squeak squeak squeak');
  };
}

export default Squeak;
