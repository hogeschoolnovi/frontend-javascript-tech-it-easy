function getTvBrands(arr) {
  return arr.map((tv) => {
    return tv.brand;
  });
}

console.log(getTvBrands(inventory));