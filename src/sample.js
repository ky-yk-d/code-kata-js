exports.getActual = () => {
  let actual = [];
  [...Array(5)].map((_,i) => {
    actual.push(i + 1);
  });
  return actual;
};

