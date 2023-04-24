const fs = require('fs');
let points = require("./nodes.json");
points = JSON.stringify(points)
fs.writeFile('./mimNodes.json', points, err => {
  if (err) {
    console.error(err);
  }
  // fichier écrit avec succès
});