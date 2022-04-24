import type IQuackBehavior from './IQuackBehavior';

class MuteQuack implements IQuackBehavior {
  quack = () => {
    console.log('... ... ...');
  };
}

export default MuteQuack;
