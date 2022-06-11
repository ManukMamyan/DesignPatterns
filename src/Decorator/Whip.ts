import CondimentDecorator from './CondimentDecorator';
import type Beverage from './Beverage';

class Whip extends CondimentDecorator {
  private beverage!: Beverage;

  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  getDescription = (): string => {
    return `${this.beverage.getDescription()}, Whip`;
  };

  cost = (): number => {
    return 0.1 + this.beverage.cost();
  };
}

export default Whip;
