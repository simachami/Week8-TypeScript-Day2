export default class MoveableObjects {
    private wrappedX:number;
    private wrappedY:number;

    constructor(wrappedX:number = 0, wrappedY:number=0) {
        this.wrappedX = wrappedX
        this.wrappedY = wrappedY
    }

    get y():number {
        return this.wrappedY
    }
    set y(newY: number) {
        if(newY >= 0) this.wrappedY = newY
        else console.log("Invalid Y")
    }
    get x():number {
        return this.wrappedX
    }
    set x(newX: number) {
        newX >= 0 ? this.wrappedX = newX : console.log("invalid X")
    }

    moveUp(distance: number) {
        this.wrappedY += distance
    }
    moveDown(distance: number) {
        this.wrappedY -= distance
    }
    moveSideways(distance: number) {
        this.wrappedX += distance
    }
}

const mo = new MoveableObjects()

mo.y += 10

console.log(mo.x)

