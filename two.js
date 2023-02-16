function alreadySold(arr) {
  return arr.reduce((a, b) => a + b.sold, 0);
}

function bought(arr) {
  return arr.reduce((a, b) => a + b.originalStock, 0);
}

document.getElementById('sold').innerHTML = `Already sold: ${alreadySold(inventory)}`;
document.getElementById('bought').innerHTML = `Bought: ${bought(inventory)}`;
document.getElementById('tosell').innerHTML = `To sell: ${bought(inventory) - alreadySold(inventory)}`;