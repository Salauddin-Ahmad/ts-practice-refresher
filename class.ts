// A simple class representing an Animal
class Animal {

    // ✔ Constructor parameter properties:
    // TypeScript automatically creates class properties (name, species, sound)
    // and assigns them, so we don't need to manually declare or set them.
    constructor(
        public name: string,      // property: name
        public species: string,   // property: species
        public sound: string      // property: sound
    ) {
        // In normal JS/TS classes, we would need:
        // this.name = name
        // this.species = species
        // this.sound = sound
        //
        // But since we used "public" inside constructor parameters,
        // TypeScript auto-generates the properties + assignment.
    }

    // ✔ Class method
    makeSound() {
        console.log(`${this.name} is making sound`);
    }
}

// Creating class instances
const dog = new Animal('dog', "doggo", 'Ghew ghew');
const cat = new Animal('cat', "Cat", 'Meu meu');

// Calling a method on an instance
cat.makeSound();  // Output: "cat is making sound"
