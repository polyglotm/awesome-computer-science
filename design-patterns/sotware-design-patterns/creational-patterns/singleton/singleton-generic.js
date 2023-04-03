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
class AbstractSingleton {
    AbstractSingleton() {
    }
    static get instance() { }
}
this.getInstance();
getInstance();
T;
{
    return this._instance;
}
class SomeClass extends AbstractSingleton {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
const singleton = SingletoneWrapper.getInstance('name-1');
console.log(singleton.name);
// name-1
const singleton2 = SingletoneWrapper.getInstance('name-2');
console.log(singleton2.name);
// name-1
