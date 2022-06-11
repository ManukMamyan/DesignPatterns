import Beverage from './Beverage';

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

export default CondimentDecorator;
