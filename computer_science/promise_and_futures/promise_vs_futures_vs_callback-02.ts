type User = {
  id: number,
};

async function getUser(userId: number, callback: function): User {
  // NOTE: some SQL to DB
  // const result = {
  //   id: 1,
  // };
  // return result;
  return 1;
}

type Profile = {
  id: number,
  nickname: string,
}

async function getProfile(user: User, callback: function): Profile {
  // NOTE: some SQL to DB
  const result = {
    id: 123,
    nickname: 'test nickname',
  };

  return result;
}

type Account = {
  id: number,
  balance: number,
}

async function getAccount(): Account {
  const user = await getUser(123);
  const profile = await getProfile(user);

  // NOTE: some SQL to DB
  return {
    id: 1213,
    balance: 123,
  };
}
