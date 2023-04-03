class User {
}
function getCurrentUser() {
    return new User();
}
class Pet {
}
function getPet(user) {
}
function getPetNickName(pet) {
    return '123';
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
