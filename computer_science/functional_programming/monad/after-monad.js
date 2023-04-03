// abstract class Maybe<T> {
//   abstract isSome(): this is Some<T>;
//   abstract isNone(): this is None;
//   abstract and<U>(other: Maybe<U>): Maybe<U>;
//   abstract unwrapOr(defaultValue: T): T;
// }
//
// class Some<T> extends Maybe<T> {
//   private value: T
//   constructor(value: T) { super(); this.value = value; }
//   isSome(): this is Some<T> { return true; }
//   isNone(): this is None { return false; }
//   and<U>(other: Maybe<U>) {
//     return other;
//   }
//   unwrap() { return this.value }
//   unwrapOr(defaultValue: T) { return this.value }
// }
//
// class None extends Maybe<never> {
//   isSome<T>(): this is Some<T> { return false }
//   isNone(): this is None { return true }
//   and<U>(other: Maybe<U>) {
//     return this;
//   }
//   unwrapOr<T>(defaultValue: T) { return defaultValue }
// }
// T | undefined;
// //
// function some<T>(x: T): Maybe<T> {
//   // return { kind: 'some', value };
// }
function run(input, transform) {
    if (input === undefined) {
        return undefined;
    }
    return transform(input.value);
}
class User {
}
function getCurrentUser() {
    return new User();
}
class Pet {
}
function getPet(user) {
    return new Pet();
}
function getNickName(pet) {
    return '123';
}
function getPetNickname() {
    const user = getCurrentUser();
    const userPet = run(user, getPet);
    const userPetNickName = run(userPet, getNickName);
    return userPetNickName;
}
