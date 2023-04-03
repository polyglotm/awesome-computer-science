class User {
}
function getCurrentUser() {
}
class Pet {
    getNickName() {
        return '123;';
    }
}
function getPet(user) {
    return new Pet();
}
function getPetNickName(pet) {
    return pet.getNickName();
}
function run(input, transform) {
    if (input === undefined) {
        return undefined;
    }
    return transform(input.value);
}
// NOTE: /users/1/pets/5/
// const compose = (...fs) => (x) => fs.reduceRight((acc, f) => f(acc), x);
const composeRight = (...fs) => (x) => fs.reduce((acc, f) => f(acc), x);
function getPetNickname() {
    return compose(getCurrentUser(), (x) => run(x, getPet), (x) => run(x, getPetNickName));
}
// function getPetNickname(): string | undefined {
//   return compose(
//     (x) => run(x, getPetNickName),
//     (x) => run(x, getPet),
//     getCurrentUser(),
//   );
// }
function getPetNickname() {
    return run(run(getCurrentUser(), getPet), getPetNickName);
}
function getPetNickname() {
    const user = getCurrentUser();
    const userPet = run(user, getPet);
    const userPetNickName = run(userPet, getPetNickName);
    return userPetNickName;
}
function getPetNickname() {
    const user = getCurrentUser();
    if (user === undefined) {
        return undefined;
    }
    const userPet = getPet(user);
    if (userPet === undefined) {
        return undefined;
    }
    const userPetNickName = getPetNickName(userPet);
    return userPetNickName;
}
