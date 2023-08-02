class Tv{
    constructor(protected serialNumber:string){
        this.serialNumber = serialNumber
    }
}


class Roku extends Tv {
    displaySerialNumber():void {
        console.log(this.serialNumber)
    }
}

const roku = new Roku('125478565')

roku.displaySerialNumber()