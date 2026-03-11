class Animal {
  constructor(name, type, age, size) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }

  eat(input) {
    if (this.type === "herbivore") {
      console.log(
        `The animal ${this.name} is a herbivore and does not eat other animals.`,
      );
      return;
    }

    if (!(input instanceof Animal)) {
      console.log(`The animal ${this.name} is eating ${input}.`);
      return;
    }

    if (input.size >= this.size * 2) {
      console.log(
        `The animal ${this.name} tried to eat the ${input.name} but it was too large.`,
      );
      return;
    }

    input.isEaten = true;
    console.log(`The animal ${this.name} ate the ${input.name}.`);
  }
}
