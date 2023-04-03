function getUser(userId, callback) {
    // NOTE: some SQL to DB
    const result = {
        id: 1,
    };
    return callback(result);
}
function getProfile(user, callback) {
    // NOTE: some SQL to DB
    const result = {
        id: 123,
        nickname: 'test nickname',
    };
    return callback(result);
}
function getAccount() {
    // NOTE: some SQL to DB
    return {
        id: 1213,
        balance: 123,
    };
}
getUser(123, (user) => {
    getProfile(user, (profile) => {
        getAccount(profile);
    });
});
