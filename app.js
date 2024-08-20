
// // This console log works!

class CaptainChakaKhan {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }

    attack(target) {
        console.log("Captain Chaka Khan attacks with a couponer's vengeance!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`It's a slap! Gucci Glorilla takes level ${this.firepower} damage to its iconic double G insignia!`);
            target.hull -= this.firepower;
        } else {
            console.log("The attack missed and now Gucci Glorilla's price has increased significantly, making it more difficult to attain!");
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
        console.log("Gucci Glorilla attacks with a slingshot fireball from its strap!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`It's an on-target smack, and Captain Chaka Khan takes level ${this.firepower} damage to the wallet!`);
            target.hull -= this.firepower;
        } else {
            console.log("Gucci Glorilla misses! Captain Chaka Khan ramps up for another strategic cost-cutting attack!");
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
    console.log("Captain Chaka Khan wins and sent Gucci Glorilla straight to a garage sale clearance table!");
} else {
    console.log("The Gucci Glorilla wins, and Captain Chaka Khan has to pay with an arm and a leg!");
}



// // This console log works


class ColonelCardiBlast {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }

    attack(target) {
        console.log("Colonel Cardi Blast attacks by shooting fireball from her flame-throwing Red Bottom Heels!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`It's a hit! Latto Vuitton takes level ${this.firepower} damage to its external zipper, exposing its engine!`);
            target.hull -= this.firepower;
        } else {
            console.log("The attack failed! Latto Vuitton is lining up as many L's and V's as possible to create a mega fireball!");
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
        console.log("Latto Vuitton attacks with a MEGA fireball propelled by the force of its top handles!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`It's not a miss! Colonel Cardi Blast takes level ${this.firepower} damage to her best weapon, the Red Bottom Heels!`);
            target.hull -= this.firepower;
        } else {
            console.log("Latto Vuitton misses! Colonel Cardi Blast swiftly clicks those red bottom heels, building up energy for the next strike!");
        }
    }
}

const colonelCardiBlast = new ColonelCardiBlast();
const lattoVuitton = new LattoVuitton();

while (colonelCardiBlast.hull > 0 && lattoVuitton.hull > 0) {
    colonelCardiBlast.attack(lattoVuitton);
    if (lattoVuitton.hull > 0) {
        lattoVuitton.attack(colonelCardiBlast);
    }
}

if (colonelCardiBlast.hull > 0) {
    console.log("Colonel Cardi Blast wins, cutting Latto Vuitton and its prices in half!");
} else {
    console.log("The Latto Vuitton wins, and Colonel Cardi Blast pays the price!");
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






// // This Console log works

class SoldierSade {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }

    attack(target) {
        console.log("Soldier Sade strikes with the power of a flash sale frenzy!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`Boom! Beyonce Birkin Bag takes level ${this.firepower} damage, and that iconic B just lost its shine!`);
            target.hull -= this.firepower;
        } else {
            console.log("Missed! And now Beyonce Birkin Bag's rarity just skyrocketed, making it even harder to snag!");
        }
    }
}

class BeyonceBirkinBag {
    constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = Math.random() * 0.2 + 0.6;
    }

    attack(target) {
        console.log("Beyonce Birkin Bag fires back with a designer whip from its golden chain strap!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`Direct hit! Soldier Sade takes level ${this.firepower} damage, and her budget just took a hit too!`);
            target.hull -= this.firepower;
        } else {
            console.log("Swing and a miss! Soldier Sade dodges and prepares to cut those designer dreams down to size!");
        }
    }
}

const soldierSade = new SoldierSade();
const beyonceBirkinBag = new BeyonceBirkinBag();

while (soldierSade.hull > 0 && beyonceBirkinBag.hull > 0) {
    soldierSade.attack(beyonceBirkinBag);
    if (beyonceBirkinBag.hull > 0) {
        beyonceBirkinBag.attack(soldierSade);
    }
}

if (soldierSade.hull > 0) {
    console.log("Soldier Sade wins! That Birkin bag is headed straight to the discount bin, defeated and dethroned!");
} else {
    console.log("The Beyonce Birkin Bag wins! Soldier Sade's wallet just got served an eviction notice!");
}





// This console log works

class LieutenantLilKim {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }

    attack(target) {
        console.log("Lieutenant Lil Kim unleashes a lyrical barrage of legendary rhymes and fireballs!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`Bang! Fendi Foxy Brown takes ${this.firepower} damage, and that F logo just got scuffed up!`);
            target.hull -= this.firepower;
        } else {
            console.log("Missed! Fired-up Fendi Foxy Brown dodges with the finesse of a fashion icon, making it even harder to touch!");
        }
    }
}

class FendiFoxyBrown {
    constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = Math.random() * 0.2 + 0.6;
    }

    attack(target) {
        console.log("Fendi Foxy Brown retaliates with a fierce fashion fireball strike, dripping in designer style!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`Direct hit! Lieutenant Lil Kim takes ${this.firepower} damage, and her reputation just took a hit too!`);
            target.hull -= this.firepower;
        } else {
            console.log("Fendi Foxy Brown misses! Lieutenant Lil Kim readies her German Reuger fire thrower to bring the heat!");
        }
    }
}

const lieutenantLilKim = new LieutenantLilKim();
const fendiFoxyBrown = new FendiFoxyBrown();

while (lieutenantLilKim.hull > 0 && fendiFoxyBrown.hull > 0) {
    lieutenantLilKim.attack(fendiFoxyBrown);
    if (fendiFoxyBrown.hull > 0) {
        fendiFoxyBrown.attack(lieutenantLilKim);
    }
}

if (lieutenantLilKim.hull > 0) {
    console.log("Lieutenant Lil Kim wins! That Fendi Foxy Brown is headed straight to the clearance rack, dethroned and defeated!");
} else {
    console.log("Fendi Foxy Brown wins! Lieutenant Lil Kim's verses just got silenced, and her fireballs dimmed!");
}



class MajorMaryJBlige {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }

    attack(target) {
        console.log("Major Mary J Blige belts out a soulful attack, sending waves of R&B energy and blinged fireballs!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`Boom! Rihanna Balenciaga takes level ${this.firepower} damage, and that Balenciaga logo just fell off!`);
            target.hull -= this.firepower;
        } else {
            console.log("Missed! Rihanna Balenciaga dodges with the grace of a runway queen, making it harder for Major Mary J Blige to land a hit!");
        }
    }
}

class RihannaBalenciaga {
    constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = Math.random() * 0.2 + 0.6;
    }

    attack(target) {
        console.log("Rihanna Balenciaga strikes back with a high-fashion fireball, laced with couture-level precision!");
        let hitChance = Math.random();
        if (hitChance < this.accuracy) {
            console.log(`Direct hit! Major Mary J Blige takes level ${this.firepower} damage, and her rhythm just hit a sour note!`);
            target.hull -= this.firepower;
        } else {
            console.log("Rihanna Balenciaga misses! Major Mary J Blige prepares to drop another chart-topping attack on the suede!");
        }
    }
}

const majorMaryJBlige = new MajorMaryJBlige();
const rihannaBalenciaga = new RihannaBalenciaga();

while (majorMaryJBlige.hull > 0 && rihannaBalenciaga.hull > 0) {
    majorMaryJBlige.attack(rihannaBalenciaga);
    if (rihannaBalenciaga.hull > 0) {
        rihannaBalenciaga.attack(majorMaryJBlige);
    }
}

if (majorMaryJBlige.hull > 0) {
    console.log("Major Mary J Blige wins! Rihanna Balenciaga is off the runway and into the discount bin, outstyled and outplayed!");
} else {
    console.log("Rihanna Balenciaga wins! Major Mary J Blige's melodies are muted, and her blinged fireballs fizzled out!");
}



