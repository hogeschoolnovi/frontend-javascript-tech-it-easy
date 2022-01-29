// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//OPDRACHT 1

function getTVTypeNames() {
  let types = [];
  inventory.forEach((tv) => {
    types.push(tv.type);
  });
  return types;
}

console.log(getTVTypeNames());

function getSoldOutTVs() {
  return inventory.filter((tv) => {
    if (tv.originalStock - tv.sold <= 0) {
      return tv;
    }
  });
}

console.log(getSoldOutTVs());

function getTVsWithAmbiLight() {
  return inventory.filter((tv) => {
    if (tv.options.ambiLight === true) {
      return tv;
    }
  });
}

console.log(getTVsWithAmbiLight());

function sortTVsPriceLowToHigh() {
  return inventory.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else if (b.price > a.price) {
        return -1;
      } else if(a.price === b.price) {
        return 0;
      }
  });
}

console.log(sortTVsPriceLowToHigh());

//OPDRACHT 2

function numberOfTvsSold() {
  let sold = 0;
  inventory.forEach((tv) => {
    sold += tv.sold;
  });
  return sold;
}

console.log(numberOfTvsSold());

function numberOfTvsBought() {
  let originalStock = 0;
  inventory.forEach((tv) => {
    originalStock += tv.originalStock;
  });
  return originalStock;
}

console.log(numberOfTvsBought());

function numberOfTvsStock() {
  let originalStock = 0;
  let sold = 0;
  inventory.forEach((tv) => {
    originalStock += tv.originalStock;
    sold += tv.sold;
  });

  return originalStock - sold;
}

console.log(numberOfTvsStock());

document.getElementById("amount-sold").innerHTML = numberOfTvsSold();
document.getElementById("amount-bought").innerHTML = numberOfTvsBought();
document.getElementById("amount-stock").innerHTML = numberOfTvsStock();

//OPDRACHT 3

function getAndDisplayBrands(inventory) {
  let list = '';
  inventory.forEach((tv) => {
    list += `<li>${tv.brand}</li>`
  });

  document.getElementById("brands").innerHTML = list;
}


//OPDRACHT 4
function getName(tv) {
  return `${tv.brand} ${tv.type} - ${tv.name}`;
}

function getPrice(tv) {
  return `€${tv.price},-`;
}


function getAvailableSizes(sizes) {
  let displayedSizes = '';
  sizes.forEach((size, index) => {
    displayedSizes += `${size} inch (${inchToCm(size)} cm)`;
    if (index !== (sizes.length - 1) && sizes.length > 1) {
      displayedSizes += ' | ';
    }
  });
  return displayedSizes;
}

function inchToCm(inch) {
  return inch * 2.54;
}

function TVDisplayGenerator(inventory) {
  let generated = '';
  inventory.forEach((tv) => {
    generated += getName(tv) + '<br />';
    generated += getPrice(tv) + '<br />';
    generated += getAvailableSizes(tv.availableSizes) + '<br />';
    generated += '<br />';
  });

  document.getElementById("tvs").innerHTML = generated;
}

getAndDisplayBrands(inventory);
TVDisplayGenerator(inventory);
