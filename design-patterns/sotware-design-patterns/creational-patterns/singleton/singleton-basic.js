class Singletone {
    constructor() {
    }
    static getInstance() {
        if (!Singletone.instance) {
            Singletone.instance = new Singletone();
        }
        return Singletone.instance;
    }
}
