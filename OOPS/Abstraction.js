
class Payment {

    pay(){

        throw new Error("pay method is mandatory");
        
    }
}

class Upi extends Payment {
    pay(){
        console.log("Paying with UPI");
    }
}

class Card extends Payment {
    pay(){
        console.log("Paying with Card");
    }
}

let u1  = new Upi();
u1.pay();



class CoffeeMachine {

    boilWater() {
        console.log("Boiling water...");
    }

    addCoffee() {
        console.log("Adding coffee powder...");
    }

    addMilk() {
        console.log("Adding milk...");
    }

    makeCoffee() {

        this.boilWater();
        this.addCoffee();
        this.addMilk();

        console.log("Coffee Ready!");
    }
}

const machine = new CoffeeMachine();

machine.makeCoffee();