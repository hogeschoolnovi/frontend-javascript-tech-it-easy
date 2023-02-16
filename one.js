function getTvTypes(arr) {
  return arr.map((tv) => {
    return tv.type;
  });
}

function getSoldOut(arr) {
  return arr.filter((tv) => {
    return tv.originalStock === tv.sold;
  });
}

function sortSoldTV(arr) {
  return arr.sort((a, b) => {
    return b.sold - a.sold;
  });
}

function getAmbi(arr) {
  return arr.filter((tv) => tv.originalStock === tv.sold);
}

function getSorted(arr) {
  return arr.sort((a, b) => {
    return a.price - b.price;
  });
}

console.log(getTvTypes(inventory));
console.log(getSoldOut(inventory));
console.log(getAmbi(inventory));
console.log(getSorted(inventory));