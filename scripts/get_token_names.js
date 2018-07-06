const tokenNames = Object.keys(require('../dist/index.json')).sort();
console.log(JSON.stringify(tokenNames, null, '  '));
