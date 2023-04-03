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

function run<T>(input: Maybe<T>, transform: (_: T) => Maybe<T>): Maybe<T> {
  if (input === undefined) {
    return undefined;
  }

  return transform(input.value);
}

class User {

}

function getCurrentUser(): User | undefined {
  return new User();
}

class Pet {

}

function getPet(user: User): Pet | undefined {
  return new Pet();
}

function getNickName(pet: Pet): string {
  return '123';
}

function getPetNickname(): string | undefined {
  const user: Maybe<User> = getCurrentUser();
  const userPet: Maybe<Pet> = run(user, getPet);
  const userPetNickName: Maybe<string> = run(userPet, getNickName);

  return userPetNickName;
}
