function tvName(tv) {
  return `${tv.brand} ${tv.type} - ${tv.name}`;
}

function formatPrice(price) {
  return `€${price},-`;
}

function screenSizes(tv) {
  let sizes = [];

  tv.availableSizes.forEach((size) => {
    sizes.push(`${size} inch (${Math.floor(size  * 2.54)} cm)`);
  });

  return sizes.join(' | ');
}


function displayInfo(arr) {
  let infoString = '';

  arr.forEach((tv) => {
    infoString += `${tvName(tv)}<br />${formatPrice(tv.price)}<br />${screenSizes(tv)}<br /><br />`
  });

  document.getElementById('info').innerHTML = infoString;
}

displayInfo(inventory);