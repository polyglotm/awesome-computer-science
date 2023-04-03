type User = {
  id: number,
};

function getUser(userId: number, callback: function): User {
  // NOTE: some SQL to DB
  const result = {
    id: 1,
  };
  return callback(result);
}

type Profile = {
  id: number,
  nickname: string,
}

function getProfile(user: User, callback: function): Profile {
  // NOTE: some SQL to DB
  const result = {
    id: 123,
    nickname: 'test nickname',
  };

  return callback(result);
}

type Account = {
  id: number,
  balance: number,
}

function getAccount(): Account {
  // NOTE: some SQL to DB
  return {
    id: 1213,
    balance: 123,
  };
}

getUser(123, (user: User) => {
  getProfile(user, (profile: Profile) => {
    getAccount(profile);
  });
});
