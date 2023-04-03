async function getUser(userId, callback) {
    // NOTE: some SQL to DB
    // const result = {
    //   id: 1,
    // };
    // return result;
    return new Promise((resolve, reject) => resolve(1));
}
async function getProfile(user, callback) {
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
async function getAccount() {
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
