const _ = require('lodash');
const colorTokens = require('../dist/index.raw.json');

const PRELUDE = ``;

const headingTokens = () => {
  const flCoArr =_.flatMap(colorTokens.props, function(key){return key})
  
  const flHeadingTokens = flCoArr
    .filter(headingToken=>headingToken.heading!==undefined 
      && headingToken.heading === true
      )
  const camelFormat = {}
  flHeadingTokens.map(y=>{
    camelFormat[_.camelCase(y.name)] = y.value
  })
  console.log(`module.exports=\n${JSON.stringify(camelFormat)}`)
}

headingTokens();