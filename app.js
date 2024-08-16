class CaptainChakaKhan {
    constructor() {
      this.hull = 20;
      this.firepower = 5
      this.accuracy = 0.7  
    }
}


attack(target); {
    console.log("Captain Chaka Khan attacks with a vengance!");
    let hitChance = Math.random();         
    if (hitChance < this.accuracy) {
        console.log(`It's a hit! The purse takes ${this.firepower} damage.`);
        target.hull -= this.firepower; // 
    } else {
        console.log("The attack missed!");
    }
}

Module.exports = CaptainChakaKhan



class EnemyPurse {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower; 
        this.accuracy = accuracy; 
    }


    attack(target) {
        console.log("Oh nooo! The alien purse attacks slingshotting fireballs with its strap!");
        let hitChance = Math.random();        
        if (hitChance < this.accuracy) {
            console.log(`It's a hit! Captain Chaka Khan takes the designer ${this.firepower} damage to the forehead.`);
            target.hull -= this.firepower;        
        } else {
            console.log("The attack missed! The designer purse ramps up for another cost paying attack");
        }
    }
}

module.exports = EnemyPurse;


const CaptainChakaKhan = require('./CaptainChakaKhan');
const EnemyPurse = require('./EnemyPurse');

const nubia = new CaptainChakaKhan();

const gucciRaider = new EnemyPurse(
    Math.floor(Math.random() * 4) + 3,  
    Math.floor(Math.random() * 3) + 2,      Math.random() * 0.2 + 0.6);


while (nubia.hull > 0 && gucciRaider.hull > 0) {
    nubia.attack(gucciRaider); 
    if (gucciRaider.hull > 0) { 
        gucciRaider.attack(nubia); 
    }
}


if (nubia.hull > 0) {
    console.log("Captain Chaka Khan wins and sent that Gucci bag straight to a garage sale clearance table!");
} else {
    console.log("The Gucci Raider wins and Captain Chaka Khan has to pay with an arm and a leg!");
}




