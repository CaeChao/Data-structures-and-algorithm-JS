import { defaultToString } from '../utils';
import KeyValue from './KeyValue';

export default class Dictionary<K, V> {
  private table: { [key: string]: KeyValue<K, V>};

  constructor(private toStrFn: (key: K) => string = defaultToString) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  set(key: K, value: V) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new KeyValue(key, value);
      return true;
    }
    return false;
  }

  get(key: K): V {
    const keyValue = this.table[this.toStrFn(key)];
    return keyValue == null ? undefined : keyValue.value;

  }

  hasKey(key: K) {
    return this.table[this.toStrFn(key)] != null;
  }


  remove(key: K) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  keyValues(): KeyValue<K, V>[] {
    return Object.values(this.table);
  }

  values(): V[] {
    return this.keyValues().map((keyValue: KeyValue<K, V>) => keyValue.value);
  }

  keys() : K[] {
    return this.keyValues().map((keyValue: KeyValue<K, V>) => keyValue.key);
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keyValuePairs = this.keyValues();
    let objString = `${keyValuePairs[0].toString()}`;
    for (let i = 1; i < keyValuePairs.length; i++) {
      objString = `${objString},${keyValuePairs[i].toString()}`;
    }
    return objString;
  }
}
