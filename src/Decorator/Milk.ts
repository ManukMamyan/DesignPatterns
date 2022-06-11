import CondimentDecorator from './CondimentDecorator';
import type Beverage from './Beverage';

class Milk extends CondimentDecorator {
  private beverage!: Beverage;

  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  getDescription = (): string => {
    return `${this.beverage.getDescription()}, Milk`;
  };

  cost = (): number => {
    return 0.1 + this.beverage.cost();
  };
}

export default Milk;
