
This console log works!

class CaptainChakaKhan {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }

    attack(target) {
        console.log("Captain Chaka Khan attacks with a couponers' vengeance!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`It's a slap! Gucci Glorilla takes level ${this.firepower} damage to its' iconic double G insignia!`);
            target.hull -= this.firepower;
        } else {
            console.log("The attack missed and now Gucci Glorilla's price has increased significantly making it more difficult to attain!");
        }
    }
}

class GucciGlorilla {
    constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = Math.random() * 0.2 + 0.6;
    }

    attack(target) {
        console.log("GucciGlorilla attacks with a sling shot fireball from its' strap!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log("It's a on target smack and Captain Chaka Khan takes level ${this.firepower} damage to the wallet!");
            target.hull -= this.firepower;
        } else {
            console.log("Gucci Glorilla misses! Captain Chaka Khan ramps up for another strategic cost cutting attack!");
        }
    }
}

const captainChakaKhan = new CaptainChakaKhan();
const gucciGlorilla = new GucciGlorilla();

while (captainChakaKhan.hull > 0 && gucciGlorilla.hull > 0) {
    captainChakaKhan.attack(gucciGlorilla);
    if (gucciGlorilla.hull > 0) {
        gucciGlorilla.attack(captainChakaKhan);
    }
}

if (captainChakaKhan.hull > 0) {
    console.log("Captain Chaka Khan wins and sent GucciGlorilla straight to a garage sale clearance table!");
} else {
    console.log("The Gucci Glorilla wins and Captain Chaka Khan has to pay with an arm and a leg!");
}



This console log works


class CardiBlast {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }

    attack(target) {
        console.log("Cardi Blast attacks by shooting fire ball from her flame throwing Red Bottom Heels!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`It's a hit! Latto Vuitton takes level ${this.firepower} damage to its'external Zipper exposing its' engine!`);
            target.hull -= this.firepower;
        } else {
            console.log("The attack failed! Latto Vuitton is lining up as many L's and V's as possible to create mega fireball!");
        }
    }
}

class LattoVuitton {
    constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = Math.random() * 0.2 + 0.6;
    }

    attack(target) {
        console.log("Latto Vuitton attacks with a MEGA fireball propelled by the force of its' top handles!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`It's not a miss! Cardi Blast takes level ${this.firepower} damage to her best weapon, the Red Bottom Heels!`);
            target.hull -= this.firepower;
        } else {
            console.log("Latto Vuitton misses! Cardi Blast swiftly clicks those red bootom heels building up energy for the next strike!");
        }
    }
}

const cardiBlast = new CardiBlast();
const lattoVuitton = new LattoVuitton();

while (cardiBlast.hull > 0 && lattoVuitton.hull > 0) {
    cardiBlast.attack(lattoVuitton);
    if (lattoVuitton.hull > 0) {
        lattoVuitton.attack(cardiBlast);
    }
}

if (cardiBlast.hull > 0) {
    console.log("Cardi Blast wins cutting Latto Vuitton and it's prices in half!");
} else {
    console.log("The Latto Vuitton wins and Cardi Blast pays the price!");
}

class Lattovuitton {
    constructor() {
        this.hull = Math.floor(Math.random() * 3) + 3;
        this.firepower = Math.floor(Math.random() * 2) + 2;
        this.accuracy = Math.random() * 0.2 + 0.6;
    }

    attack(target) {
        console.log("The Lattovuitton attacks with designer precision!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`It's a hit! The target takes level ${this.firepower} damage.`);
            target.hull -= this.firepower;
        } else {
            console.log("The attack missed!");
        }
    }
}

module.exports = { CardiBlast, Lattovuitton };
