import MallardDuck from './Strategy/Duck/MallardDuck';
import ModelDuck from './Strategy/Duck/ModelDuck';
import FlyRocketPowered from './Strategy/FlyBehavior/FlyRocketPowered';

const mallardDuck = new MallardDuck();
const modelDuck = new ModelDuck();

console.log('> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >');

mallardDuck.display();
mallardDuck.performQuack();
mallardDuck.performFly();

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');

modelDuck.display();
modelDuck.performQuack();
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyRocketPowered());
modelDuck.performFly();

console.log('> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >');
