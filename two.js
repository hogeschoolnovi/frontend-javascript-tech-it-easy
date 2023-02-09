function alreadySold(arr) {
  let sold = 0;

  arr.forEach((tv) => {
    sold += tv.sold;
  });

  return sold;
}

function bought(arr) {
  let bought = 0;

  arr.forEach((tv) => {
    bought += tv.originalStock;
  });

  return bought
}

document.getElementById('sold').innerHTML = `Already sold: ${alreadySold(inventory)}`;
document.getElementById('bought').innerHTML = `Bought: ${bought(inventory)}`;
document.getElementById('tosell').innerHTML = `To sell: ${bought(inventory) - alreadySold(inventory)}`;