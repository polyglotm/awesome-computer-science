// type Maybe<T> = T | undefined;
function run(input, transform) {
    if (input === undefined) {
        return undefined;
    }
    return transform(input.value);
}
class User {
}
function getCurrentUser() {
    return Maybe();
}
class Pet {
}
function getPet(user) {
}
function getPetNickName(pet) {
    return '123';
}
const compose = (...fs) => (x) => fs.reduceRight((acc, f) => f(acc), x);
const composeLeft = (...fs) => (Maybe());
fs.reduce((acc, f) => f(acc), x);
function getPetNickname() {
    return compose(getCurrentUser(), run(user, getPet), run(userPet, getPetNickName));
}
