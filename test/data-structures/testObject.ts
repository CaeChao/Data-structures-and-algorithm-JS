export default class TestObj {
  constructor(public ele1: any, public ele2: any) { }
  toString() {
    return `${this.ele1.toString()}|${this.ele2.toString()}`;
  }
}

