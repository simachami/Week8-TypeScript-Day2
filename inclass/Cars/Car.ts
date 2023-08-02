// Create a class `Car` and then create 2 car subclasses `SmartCar`, `Truck`.
// All Cars should be able to `brake` `drive` and `honk`
// - When a SmartCar drives it makes `hummmm` sound and when it honks it makes a `MMmeep` sound
// - When a Truck drives it makes a `vrooom` sound and when it honks it makes `BWaaaaaahp`
// - When a Truck or a SmartCar brakes it makes `squeeel` sound

    abstract class Car{
        brake(): void {
            console.log('squeeeel');
        }
        abstract drive(): void
        abstract honk(): void
    }
    class SmartCar extends Car{
        drive(): void {
            console.log("hummmmmmmmmm..");
        }
        honk(): void {
            console.log("MMmeep!");
        }
    }
    class Truck extends Car{
        drive(): void {
            console.log('vrooooommmm..');
        }
        honk(): void {
            console.log("BWaaaaaaahp!");
        }
    }
    const smart = new SmartCar();
    smart.drive();
    smart.honk();
    smart.brake();
    const KW = new Truck();
    KW.drive();
    KW.honk();
    KW.brake();





