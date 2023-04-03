class Burger {
    constructor(builder) {
        this.size = builder.size;
        this.cheeze = builder.cheeze || false;
        this.pepperoni = builder.pepperoni || false;
        this.lettuce = builder.lettuce || false;
        this.tomato = builder.tomato || false;
        this.kimchi = builder.kimchi || false;
    }
}
class AdvancedBurger {
    constructor(props) {
        this.size = props.size;
        this.cheeze = props.cheeze || false;
        this.pepperoni = props.pepperoni || false;
        this.lettuce = props.lettuce || false;
        this.tomato = props.tomato || false;
        this.kimchi = props.kimchi || false;
    }
}
new AdvancedBurger();
class BurgerBuilder {
    constructor(size) {
        this.size = size;
    }
    addPepperoni() {
        this.pepperoni = true;
        return this;
    }
    addLettuce() {
        this.lettuce = true;
        return this;
    }
    addCheeze() {
        this.cheeze = true;
        return this;
    }
    addTomato() {
        this.tomato = true;
        return this;
    }
    addKimchi() {
        this.kimchi = true;
        return this;
    }
    build() {
        return new Burger(this);
    }
}
const burger = (new BurgerBuilder(14))
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build();
function p() {
    console.log('p');
    return true;
}
function q() {
    console.log('q');
    return false;
}
// if (!(p() && q())) {
//   console.log('!(p&&q)');
// }
//
// if (!p() || !q()) {
//   console.log('!p || !q)');
// }
if (!(p() || q())) {
    console.log('-c');
}
if (!p() && !q()) {
    console.log('-d');
}
