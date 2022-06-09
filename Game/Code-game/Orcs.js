// Juego Heroes of MiddleAge  //
//clases
class Hero {
    constructor(range, health, damage, equipment) {
        this.range = range;
        this.health = health;
        this.damage = damage;
        this.equipment = equipment;
        
    }
    //Rehacer función de daño para que necesite parámetros 'Rango','Daño','Equipo'
    attack(Range,Damage, Equipment) {
        this.range = Range;
        this.damage = Damage;
        this.equipment = Equipment;
        if ((this.equipment) === '2Hands'){
            return this.damage,
        }
        return this.damage;
    }
    receiveDamage(damage) {
        switch (equipment) {
            case shield:
                damage = damage / 2;
                break;

            case twoHanded = 
        
            default:
                break;
        }
        this.health = this.health - damage;
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        else return `Ripperino Maccarronni`
    }
}
// Ranged
class Ranged extends Hero {
    attack() {
        if (range === 'Melee') return this.damage / 2;
        else {
            return this.damage * 2;
        }
    }
}
let GibbsNixilis = new Hero('Ranged', 100, 30);
let JaceBeleren = new Hero('Ranged', 100, 30);
let FarahNalaar = new Ranged('Ranged', 100, 30);

//Cuando un personaje cambia de 'Ranged' a 'Melee', justify-content: space-around; >> justify-content: center//

