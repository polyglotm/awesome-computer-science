class SomeClass {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
class SingletoneWrapper {
    constructor() {
    }
    static getInstance(name) {
        if (!this.instance) {
            this.instance = new SomeClass(name);
        }
        return this.instance;
    }
}
const singleton = SingletoneWrapper.getInstance('name-1');
console.log(singleton.name);
// name-1
const singleton2 = SingletoneWrapper.getInstance('name-2');
console.log(singleton2.name);
// name-1
