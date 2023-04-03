async function getUser(userId, callback) {
    // NOTE: some SQL to DB
    // const result = {
    //   id: 1,
    // };
    // return result;
    return 1;
}
async function getProfile(user, callback) {
    // NOTE: some SQL to DB
    const result = {
        id: 123,
        nickname: 'test nickname',
    };
    return result;
}
async function getAccount() {
    const user = await getUser(123);
    const profile = await getProfile(user);
    // NOTE: some SQL to DB
    return {
        id: 1213,
        balance: 123,
    };
}
