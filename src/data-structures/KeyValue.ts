export default class KeyValue<K, V> {
  constructor(public key: K, public value: V) {
    this.key = key;
    this.value = value;
  }
  
  toString() {
    return `[${this.key}: ${this.value}]`;
  }
}
