abstract class Beverage {
  public description: string = 'Unknown Beverage';

  public getDescription() {
    return this.description;
  }

  abstract cost(): number;
}

export default Beverage;
