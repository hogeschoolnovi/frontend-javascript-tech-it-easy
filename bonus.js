function sortPrice() {
  const newInv = getSorted(inventory);
  displayInfo(newInv);
}

function sortAmbi() {
  const newInv = getAmbi(inventory);
  displayInfo(newInv);
}

function sortSold() {
  const newInv = sortSoldTV(inventory);
  displayInfo(newInv);
}