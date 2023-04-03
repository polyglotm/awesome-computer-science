class User {

}

function getCurrentUser(): User | undefined {

}

class Pet {

  getNickName() {
    return '123;';
  }
}

function getPet(user: User): Pet | undefined {
  return new Pet();
}

function getPetNickName(pet: Pet): string {
  return pet.getNickName();
}

type Maybe<T> = T | undefined;

function run<T>(input: Maybe<T>, transform: (_: T) => Maybe<T>): Maybe<T> {
  if (input === undefined) {
    return undefined;
  }

  return transform(input.value);
}

// NOTE: /users/1/pets/5/
// const compose = (...fs) => (x) => fs.reduceRight((acc, f) => f(acc), x);
const composeRight = (...fs) => (x) => fs.reduce((acc, f) => f(acc), x);

function getPetNickname(): string | undefined {
  return compose(
    getCurrentUser(),
    (x) => run(x, getPet),
    (x) => run(x, getPetNickName),
  );
}

// function getPetNickname(): string | undefined {
//   return compose(
//     (x) => run(x, getPetNickName),
//     (x) => run(x, getPet),
//     getCurrentUser(),
//   );
// }


function getPetNickname(): string | undefined {
  return run(run(getCurrentUser(), getPet), getPetNickName);
}

function getPetNickname(): string | undefined {
  const user: Maybe<User> = getCurrentUser();
  const userPet: Maybe<Pet> = run(user, getPet);
  const userPetNickName: Maybe<string> = run(userPet, getPetNickName);

  return userPetNickName;
}

function getPetNickname(): string | undefined {
  const user: User | undefined = getCurrentUser();
  if (user === undefined) {
    return undefined;
  }

  const userPet: Pet | undefined = getPet(user);
  if (userPet === undefined) {
    return undefined;
  }

  const userPetNickName: string | undefined = getPetNickName(userPet);

  return userPetNickName;
}
