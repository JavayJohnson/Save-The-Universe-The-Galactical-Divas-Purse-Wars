
// This console log works!

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
            console.log(`It's a slap! GucciGlorilla takes level ${this.firepower} damage to its' metal logo.`);
            target.hull -= this.firepower;
        } else {
            console.log("The attack missed!");
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
        console.log("GucciGlorilla attacks with a slingshotting fireball!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log("Oh nooo! The GucciGlorilla strikes by slingshotting fireballs with its strap!");
            target.hull -= this.firepower;
        } else {
            console.log("Gucci Glorilla misses! Captain Chaka Khan ramps up for another strategic attack.");
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
    console.log("Captain Chaka Khan wins and sent that Gucci bag straight to a garage sale clearance table!");
} else {
    console.log("The Gucci Glorilla wins and Captain Chaka Khan has to pay with an arm and a leg!");
}

// class CardiBlast {
//     constructor() {
//         this.hull = 20;
//         this.firepower = 5;
//         this.accuracy = 0.7;
//     }

//     attack(target) {
//         console.log("Cardi Blast attacks!");
//         let hitChance = Math.random();
//         if (hitChance < this.accuracy) {
//             console.log(`It's a hit! The purse takes level ${this.firepower} damage to the inner pocket.`);
//             target.hull -= this.firepower;
//         } else {
//             console.log("The attack missed!");
//         }
//     }
// }

// class LouisVuittonLatto {
//     constructor() {
//         this.hull = Math.floor(Math.random() * 3) + 3;
//         this.firepower = Math.floor(Math.random() * 2) + 2;
//         this.accuracy = Math.random() * 0.2 + 0.6;
//     }

//     attack(target) {
//         console.log("The Louis Vuitton Latto attacks with designer precision!");
//         let hitChance = Math.random();
//         if (hitChance < this.accuracy) {
//             console.log(`It's a hit! The target takes level ${this.firepower} damage.`);
//             target.hull -= this.firepower;
//         } else {
//             console.log("The attack missed!");
//         }
//     }
// }

// module.exports = { CaptainChakaKhan, GucciGlorilla, CardiBlast, LouisVuittonLatto };
