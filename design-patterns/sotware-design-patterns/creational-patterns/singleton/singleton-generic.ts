// public abstract class GenericSingleton<T> where T : GenericSingleton<T>
// {
//   protected GenericSingleton(){}
//
// public static T Instance { get; } = Create();
//
// private static T Create()
// {
//   Type t = typeof(T);
//   var flags = System.Reflection.BindingFlags.Instance |
//     System.Reflection.BindingFlags.NonPublic;
//   var constructor = t.GetConstructor(flags, null, Type.EmptyTypes,
//     null);
//   var instance = constructor.Invoke(null);
//   return instance as T;
// }
// ...
// }

public abstract class AbstractSingleton<T> {
  private static _instance: T;

  protected AbstractSingleton() {
  }

  public static get instance= this.getInstance();

  getInstance(): T {
    return this._instance;
  }
}

class SomeClass extends AbstractSingleton<SomeClass> {
  private _name: string;

  private constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
}

const singleton = SingletoneWrapper.getInstance('name-1');
console.log(singleton.name);
// name-1

const singleton2 = SingletoneWrapper.getInstance('name-2');
console.log(singleton2.name);
// name-1
