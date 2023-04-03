/*
NOTE:
  1. list
  2. hash func
  3. collision case
    key hash
    module operation -> index
    key compare
 */

type HashRow = {
  key: string,
  value: string,
  reference: any,
}

type HashTable = {
  row: HashRow[]
}

class Hash {
  static tableSize = 8;
  static hashTable: HashTable;

  constructor() {
  }

  static generateHashIndex(key: string) {
    return key.length % this.tableSize;
  }

  static getValue(key: string) {
    const row = this.hashTable[this.generateHashIndex(key)];

    if (row.key === key) {
      return row.value;
    }

    return
  }
}
