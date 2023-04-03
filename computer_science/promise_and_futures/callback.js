function someA(func) {
    func();
    console.log('hello');
}
let count = 0;
class SomeStaticClass {
    static callback() {
        count += 1;
        console.log('callback');
        callback2();
    }
    static callback2() {
    }
    static callback3() {
    }
}
someA(SomeStaticClass.callback);
count;
someA(SomeStaticClass.callback);
someA(SomeStaticClass.callback);
count;
