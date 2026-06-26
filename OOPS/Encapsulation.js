class Mobile {
    
    #ipaddress
    #pin;

    constructor(ip,p){
        this.#ipaddress = ip;
        this.#pin = p;
    }

    getDetails()
    {
        //console.log(`IP Address: ${this.#ipaddress} and Pin: ${this.#pin}`);
        return this.#ipaddress,this.#pin;
    }

    show(){
        console.log(`IP Address: ${this.#ipaddress} and Pin: ${this.#pin}`);
    }

}

function showw(){
    console.log(`IP Address: ${this.#ipaddress} and Pin: ${this.#pin}`);
}

const m1 = new Mobile(123,22);
console.log(m1.getDetails());
m1.show();
m1.dis();
m1.showw(); // cant access right 


