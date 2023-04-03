type User = {
  id: number,
};

async function getUser(userId: number, callback: function): User {
  // NOTE: some SQL to DB
  // const result = {
  //   id: 1,
  // };
  // return result;
  return new Promise((resolve, reject) => resolve(1));
}

type Profile = {
  id: number,
  nickname: string,
}

async function getProfile(user: User, callback: function): Profile {
  // NOTE: some SQL to DB
  if (false) {
    return new Promise((resolve, reject) => reject('something wrong'));
  }


  const result = {
    id: 123,
    nickname: 'test nickname',
  };

  return new Promise((resolve, reject) => resolve(result));
}

type Account = {
  id: number,
  balance: number,
}

async function getAccount(): Account {
  await getUser(123)
    .then(getProfile)
    .then((result) => {
      // do something
      // NOTE: some SQL to DB
      return {
        id: 1213,
        balance: 123,
      };
    })
    .catch((error) => {
      return;

    });
}
