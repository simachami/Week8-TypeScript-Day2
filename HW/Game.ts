abstract class Character {

    private name:string
    private gold:number
    protected attackType:string
    protected defendType:string


    constructor(name:string){
        this.name = name
        this.gold = 0
        this.attackType = "No Attack Type defined"
        this.defendType = "No Defend Type defined"
    }

    collectGold(amount:number ){
        this.gold += amount
        console.log(`${this.name} collected: ${amount}. The total gold is = ${this.gold} `)
    }

    setAttackType(type:string) {
        this.attackType = type
    }
    
    setDefendType(type:string) {
        this.defendType = type
    }

    getName(){
        return this.name
    }

    abstract defend(): void
    abstract attack(): void

}

class Orge extends Character { 
   
    constructor(name:string) {
        super(name)
        this.attackType = Attacks.CLUB
        this.defendType = Defends.SHIELD
    }

    defend(): void{
        console.log(this.defendType)
    }

    attack(): void {
        console.log(this.attackType)
    }
    
}

class Peon extends Character {

    constructor(name:string) {
        super(name)
        this.attackType = Attacks.CLUB
        this.defendType = Defends.SHIELD
    }
    defend(): void {
        console.log(this.defendType)
    }

    attack(): void {
        console.log(this.attackType)
    }
}

class Knight extends Character {
    
    constructor(name:string) {
        super(name)
        this.attackType = Attacks.SWORD
        this.defendType = Defends.ARMOR
    }

    defend(): void {
        console.log(this.defendType)
    }

    attack(): void {
        console.log(this.attackType)
    }
}


class Archer extends Character {

    constructor(name:string) {
        super(name)
        this.attackType = Attacks.BOW
        this.defendType = Defends.TUNIC
    }

    defend(): void {
        console.log(this.defendType)
    }

    attack(): void {
        console.log(this.attackType)
    }
}

enum Attacks {
    CLUB = "Attacks with club",
    SWORD = "Attacks with sword",
    BOW = "Attacks with bow and arrow"
}

enum Defends {
    SHIELD = "Defends with shield",
    ARMOR = "Defends with armor",
    TUNIC = "Defends with tunic"
}

const ogre1 = new Orge("Baldy")

console.log(ogre1.getName())
ogre1.attack()
ogre1.defend()
ogre1.collectGold(15)

ogre1.setAttackType(Attacks.BOW)
//ogre1.name = "Jeff" // This probably shouldn't be accessible here. I need to make it private
ogre1.setDefendType(Defends.TUNIC)
console.log('=========')
console.log(ogre1.getName())
ogre1.attack()
ogre1.defend()
ogre1.collectGold(50)
console.log('=========')
const knight = new Knight("Gregor")
console.log(knight.getName())
knight.defend()
knight.attack()
knight.collectGold(20)
knight.setDefendType(Defends.ARMOR)
knight.collectGold(30)