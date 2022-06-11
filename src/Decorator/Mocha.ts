import CondimentDecorator from './CondimentDecorator';
import type Beverage from './Beverage';

class Mocha extends CondimentDecorator {
  private beverage!: Beverage;

  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  getDescription = (): string => {
    return `${this.beverage.getDescription()}, Mocha`;
  };

  cost = (): number => {
    return 0.2 + this.beverage.cost();
  };
}

export default Mocha;
