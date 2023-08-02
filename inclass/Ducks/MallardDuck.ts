import Duck from './Duck';

export default class MallardDuck extends Duck {
  static className = 'MallardDuck';

  constructor(public color: string, duckAge: number) {
    super(duckAge, color);
    this.color = color;
  }

  get age():number {
    return this.wrappedAge
  }

  set age(newAge: number) {
    if (newAge >= 2) {
      this.wrappedAge = newAge;
    } else console.log("invalid age")
  }

  override quack(): void {
    console.log("Mallard Duck Quack")
  }
  
  swim(): void {
    console.log('Swimming Like a Mallard')
  }

  fly(): void {
    console.log('Flying lie a Mallard')
  }
}


const mallardDuck = new MallardDuck('brown', 4)
console.log(MallardDuck.className);

console.log(mallardDuck.age = 1);
console.log(mallardDuck.age,'age=========')
mallardDuck.quack()