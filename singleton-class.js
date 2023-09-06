class TestCaseClass {
  constructor() {
    if (typeof TestCaseClass.instance === "object") {
      return TestCaseClass.instance;
    }

    TestCaseClass.instance = this;
  }

  count = 0;

  add() {
    this.count++;
  }
  del() {
    this.count--;
  }
}

// TEST
const instance1 = new TestCaseClass();
const instance2 = new TestCaseClass();

console.log("check equality", instance1 === instance2);

instance1.add();
instance1.add();
instance1.add();

console.log("check count afer add", instance1.count, instance2.count);

instance1.del();
instance1.del();

console.log("check count afer del", instance1.count, instance2.count);
