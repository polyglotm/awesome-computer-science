// type Maybe<T> = T | undefined;

function run<T>(input: Maybe<T>, transform: (_: T) => Maybe<T>): Maybe<T> {
  if (input === undefined) {
    return undefined;
  }

  return transform(input.value);
}

class User {

}

function getCurrentUser(): User | undefined {

  return Maybe<User>;
}

class Pet {

}

function getPet(user: User): Pet | undefined {

}

function getPetNickName(pet: Pet): string {
  return '123';
}

const compose = (...fs) => (x) => fs.reduceRight((acc, f) => f(acc), x);
const composeLeft = (...fs) => (Maybe<x>) => fs.reduce((acc, f) => f(acc), x);

function getPetNickname(): string | undefined {
  return compose(
    getCurrentUser(),
    run(user, getPet),
    run(userPet, getPetNickName),
  );
}
