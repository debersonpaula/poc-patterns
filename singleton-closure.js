const TestCase = (() => {
  let inst;

  const createInstance = () => {
    const object = {
      count: 0,
    };

    object.add = () => {
      object.count++;
    };
    object.del = () => {
      object.count--;
    };

    return object;
  };

  return {
    getInstance: () => {
      if (!inst) {
        inst = createInstance();
      }
      return inst;
    },
  };
})();

// TEST
const instance1 = TestCase.getInstance();
const instance2 = TestCase.getInstance();

console.log("check equality", instance1 === instance2);

instance1.add();
instance1.add();
instance1.add();

console.log("check count afer add", instance1.count);

instance1.del();
instance1.del();

console.log("check count afer del", instance1.count);
