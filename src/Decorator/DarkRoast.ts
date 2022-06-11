import Beverage from './Beverage';

class DarkRoast extends Beverage {
  constructor() {
    super();

    this.description = 'Dark Roast Coffee';
  }

  cost = (): number => {
    return 0.99;
  };
}

export default DarkRoast;
