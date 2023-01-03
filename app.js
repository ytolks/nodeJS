//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packadgeName>
//sudo npm install -g <packadgeName> (onMac)

//package.json - manifest file(stores important info about project/package)
//manual approach (create package.json in the root, create propeties etc)
//npm init (step by step,press enter to skip)
//npm init -y (everything default)

const _ = require("lodash");

const numberArray = [1, [2, 3, [4, 5, [6, 7, 8, 9, 10, 11, 12, 13]]]];
const newNumberArray = _.flattenDeep(numberArray);
console.log(newNumberArray);
