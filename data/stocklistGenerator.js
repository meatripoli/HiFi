const fs = require ('fs');
var jsonOut = "[";

for (i = 1; i < 500; i++) {
  jsonOut += `
  {
    "stock": ${Math.floor(Math.random() * 7) + 1},
    "storeId": ${Math.floor(Math.random() * 4) + 1},
    "albumId": ${i}
  },`;
}

jsonOut += `
  {
    "stock": ${Math.floor(Math.random() * 7) + 1},
    "storeId": ${Math.floor(Math.random() * 4) + 1},
    "albumId": ${i}
  }
]`;


fs.writeFile ('stocklist.json', jsonOut, function (err) {
  if (err) {
    return console.log (err);
  }
  console.log ('stocklist.json successfully written.');
});
