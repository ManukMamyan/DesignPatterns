import CondimentDecorator from './CondimentDecorator';
import type Beverage from './Beverage';

class Soy extends CondimentDecorator {
  private beverage!: Beverage;

  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  getDescription = (): string => {
    return `${this.beverage.getDescription()}, Soy`;
  };

  cost = (): number => {
    return 0.2 + this.beverage.cost();
  };
}

export default Soy;
