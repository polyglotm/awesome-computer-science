class SomeClass {
  private _name: string;

  private constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
}

class SingletoneWrapper {
  private static instance: SomeClass;

  private constructor() {
  }

  public static getInstance(name: string): SomeClass {
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
