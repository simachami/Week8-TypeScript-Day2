import Duck from './Duck'

export default class RedHeadedDuck extends Duck{ 

  constructor(public color:string, age: number){
    super(age, color)
    this.color = color
  }
  
  get age():number{
    return this.wrappedAge - 1
  }

  override quack(): void {
    console.log('Redheaded Duck Quack')
  }

  swim():void{
    console.log('Swimming Like a readHeaded Duck')
  }

  fly() : void{
    console.log('Flying like Like RedHead4')
  }
}

// const redHeadDuck = new RedHeadedDuck('red',1)