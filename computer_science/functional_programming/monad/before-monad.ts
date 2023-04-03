
class User {

}

function getCurrentUser(): User | undefined {

}

class Pet {

}

function getPet(user: User): Pet | undefined {

}

function getPetNickName(pet: Pet): string {
  return '123';
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
