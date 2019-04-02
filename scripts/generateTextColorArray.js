const _ = require('lodash');
const colorTokens = require('../dist/index.raw.json');

const PRELUDE = ``;

const textTokens = () => {
  const flCoArr =_.flatMap(colorTokens.props, function(key){return key})
  
  const flTextTokens = flCoArr
    .filter(textToken=>textToken.text!==undefined 
      && textToken.text === true
      )
  const camelFormat = {}
  flTextTokens.map(y=>{
    camelFormat[_.camelCase(y.name)] = y.value
  })
  console.log(`module.exports=\n${JSON.stringify(camelFormat)}`)
}

textTokens();