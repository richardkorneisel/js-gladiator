//console.log("script loaded");
class Gladiator {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
}
//const max = new Gladiator("Maximus", "Trident")

class Arena {
constructor(name) {
  this.name = name
  }
gladiators = [];
addGladiator(gladiator) {           // make new parameter called gladiator
  if (this.gladiators.length === 2) {
    return;                              // return ends addGladiator function
  }
     
  this.gladiators.push(gladiator);  // push gladiator into gladiators array in arena
}
fight() {  // need to look for better method than this
  if (this.gladiators[0].weapon === "Trident" && this.gladiators[1].weapon === "Spear"){
    this.gladiators.pop();
  }
  else if (this.gladiators[0].weapon === "Spear" && this.gladiators[1].weapon === "Club"){
    this.gladiators.pop();
  }
  else if (this.gladiators[0].weapon === "Club" && this.gladiators[1].weapon === "Trident"){
    this.gladiators.pop();
  }
  else if (this.gladiators[1].weapon === "Trident" && this.gladiators[0].weapon === "Spear"){
    this.gladiators.shift();
  }
  else if (this.gladiators[1].weapon === "Spear" && this.gladiators[0].weapon === "Club"){
    this.gladiators.shift();
  }
  else if (this.gladiators[1].weapon === "Club" && this.gladiators[0].weapon === "Trident"){
    this.gladiators.shift();
  }
  else if (this.gladiators[0].weapon === this.gladiators[1].weapon) {
    this.gladiator.pop();
    this.gladiator.pop();
  }
}
}
//const colosseum = new Arena("Colosseum");


//const megalopolis = new Arena("Megalopolis");




//const max = new Gladiator("Maximus", "Trident");
//const colosseum = new Arena("Colosseum");
//colosseum.addGladiator(max);
//console.log(colosseum.gladiators);


/*const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Club");
const andronicus = new Gladiator("Andronicus", "Spear");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators.length);
*/
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();
console.log(colosseum.gladiators);
