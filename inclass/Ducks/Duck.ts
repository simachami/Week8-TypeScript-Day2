export default abstract class Duck {
  static className: string = 'Duck';
  color: string;

  constructor(protected wrappedAge: number, color: string) {
    this.wrappedAge = wrappedAge;
    this.color = color;
  }

  get age(): number {
    return this.wrappedAge;
  }

  set age(value: number) {
    this.wrappedAge = value > 0 ? value : this.wrappedAge;

    // if(value > 0){
    //   this.wrappedAge = value
    // }
  }

  abstract quack(): void;
  abstract swim(): void;
  abstract fly(): void;
}

// const duck = new Duck(3, 'blue')

// console.log(duck.age)

// duck.age = 4

// console.log(duck.age)

// console.log(Duck.className)

// duck.quack()