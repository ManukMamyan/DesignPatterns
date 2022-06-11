import Beverage from './Beverage';

class Decaf extends Beverage {
  constructor() {
    super();

    this.description = 'Decaf Coffee';
  }

  cost = (): number => {
    return 1.05;
  };
}

export default Decaf;
