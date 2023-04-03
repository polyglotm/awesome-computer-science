/*
NOTE:
  1. list
  2. hash func
  3. collision case
    key hash
    module operation -> index
    key compare
 */
class Hash {
    constructor() {
    }
    static generateHashIndex(key) {
        return key.length % this.tableSize;
    }
    static getValue(key) {
        const row = this.hashTable[this.generateHashIndex(key)];
        if (row.key === key) {
            return row.value;
        }
        return;
    }
}
Hash.tableSize = 8;
