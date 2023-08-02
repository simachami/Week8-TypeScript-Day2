import MoveableObjects from "./MoveableObjects"

class Car {
    private readonly vin: string
    readonly make: string
    readonly model: string
    readonly year: number
    position: MoveableObjects
    nickname?:string

    constructor(vin:string, make:string, model:string, year:number){
        this.vin = vin
        this.make = make
        this.model = model
        this.year = year
        this.position = new MoveableObjects()
    }

    drive(miles:number) {
        this.position.moveSideways(miles)
        console.log(`You drove ${miles} miles and you are at mile ${this.position.x}`)
        
        
    }
    printInfo():void{
        console.log(`The car vin: ${this.vin}
                                ${this.make}
                                ${this.model}
                                ${this.year}`
                    )
    }
}


const car = new Car('12547854125', 'Honda', 'fit', 2010)

console.table(car)
console.log(car.model)

car.drive(10)
car.drive(-25)

//vin is private and can only access private property in class
//console.log(car.vin)

car.printInfo()


class Car2 {
    position: MoveableObjects
    nickname?:string

    constructor(private readonly vin:string, 
        public readonly make:string, 
        public readonly model:string, 
        public readonly year:number){
        this.vin = vin
        this.make = make
        this.model = model
        this.year = year
        this.position = new MoveableObjects()
    }

    drive(miles:number) {
        this.position.moveSideways(miles)
        console.log(`You drove ${miles} miles and you are at mile ${this.position.x}`)
        
        
    }
    printInfo():void{
        console.log(`The car vin: ${this.vin}
                                ${this.make}
                                ${this.model}
                                ${this.year}`
                    )
    }
}

//error color property unavailable
// car.color = 'white'

