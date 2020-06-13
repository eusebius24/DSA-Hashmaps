const HashMap = require('./HashMap');

function main() {
    const lotr = new HashMap(initialCapacity = 12);
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;
    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");
    console.log(lotr);
    console.log(lotr.get("Maiar"));
}

function removeDuplicates(string) {
    const ht = new HashMap(initialCapacity = string.length);
    const strArray = string.split('');
    for(let i = 0; i < strArray.length; i++) {
        ht.set(i, strArray[i])
    }
    console.log(ht);
    const array2 = [];
    for(let i=0; i<ht.length; i++) {
        let temp = ht.get(i);
        if(temp && !array2.includes(temp)) {
            array2.push(temp);
        }
    }
    const str2 = array2.join('');
    console.log(str2);
}

console.log(main());
console.log(removeDuplicates("google"));
console.log(removeDuplicates("google anything you think you can think of"));