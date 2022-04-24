import type IQuackBehavior from './IQuackBehavior';

class Quack implements IQuackBehavior {
  quack = () => {
    console.log('quack quack quack');
  };
}

export default Quack;
