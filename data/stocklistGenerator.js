const fs = require ('fs');
const generateNum = function (ceiling) {
  return Math.floor(Math.random() * ceiling) + 1;
}

var jsonOut = "[";

for (i = 1; i < 500; i++) {
  jsonOut += `
  {
    "stock": ${generateNum(7)},
    "storeId": ${generateNum(4)},
    "albumId": ${i}
  },`;
}

jsonOut += `
  {
    "stock": ${generateNum(7)},
    "storeId": ${generateNum(4)},
    "albumId": ${i}
  }
]`;

fs.writeFile ('stocklist.json', jsonOut, function (err) {
  if (err) {
    return console.log (err);
  }
  console.log ('stocklist.json successfully written.');
});
