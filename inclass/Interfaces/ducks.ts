abstract class Duck {
    static className: string = 'Duck'
  
    constructor(protected wrappedAge: number) {
      this.wrappedAge = wrappedAge
    }
  
    get age(): number {
      return this.wrappedAge;
    }
  
    set age(value: number) {
      this.wrappedAge = value > 0 ? value : this.wrappedAge;
    }
  }
  
  interface Flyable {
    wings:string
    fly(): void
  }
  
  interface Swimmable {
    swim(): void
  }
  
  interface Quackable {
    quack(): void
  }
  
  class MallardDuck extends Duck implements Flyable, Swimmable, Quackable{
    static className = 'MallardDuck';
    wings:string = 'mallard wings'
  
    constructor(duckAge: number) {
      super(duckAge);
    }
  
    get age():number {
      return this.wrappedAge
    }
  
    set age(newAge: number) {
      if (newAge >= 2) {
        this.wrappedAge = newAge;
      } else console.log("invalid age")
    }
  
    quack(): void {
      console.log("Mallard Duck Quack")
    }
    
    swim(): void {
      console.log('Swimming Like a Mallard')
    }
  
    fly(): void {
      console.log('Flying lie a Mallard')
    }
  }
  
  
  class RedHeadedDuck extends Duck implements Flyable, Swimmable, Quackable{ 
    wings:string = 'RHDuck Wings'
  
    constructor(age: number){
      super(age)
    }
    
    get age():number{
      return this.wrappedAge - 1
    }
  
    quack(): void {
      console.log('Redheaded Duck Quack')
    }
  
    swim():void{
      console.log('Swimming Like a readHeaded Duck')
    }
  
    fly() : void{
      console.log('Flying like Like RedHead4')
    }
  }
  
  class DecoyDuck extends Duck implements Swimmable{
  
    constructor(age: number){
      super(age)
    }
  
    swim(): void{
      console.log("floating")
    }
  }
  
  const quackers : Quackable[] = [new MallardDuck(2), new RedHeadedDuck(1) ] 
  const flyers : Flyable[] = [new MallardDuck(2), new RedHeadedDuck(1) ] 
  const swimmer : Swimmable[] = [new MallardDuck(2), new RedHeadedDuck(1), new DecoyDuck(2) ] 
  
  for (let i=0; i<quackers.length; i++) quackers[i].quack()
  
  for (let i=0; i<flyers.length; i++) console.log(flyers[i].wings)


  