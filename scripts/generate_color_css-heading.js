const _ = require('lodash');
const {stylesheet, ruleset} = require('./stylesheet-util');
const colorTokens = require('../dist/heading.common');

const cssTokenName = (tokenName) => `--${_.kebabCase(tokenName)}`

const colorList = () => _.map(colorTokens, (tokenValue, tokenName) => [cssTokenName(tokenName), tokenValue]);

const colorClassName = (colorName) => `${_.camelCase(colorName)}`;

const PRELUDE = ``;

const colorStylesheet = () => {
  const colors = colorList();
  console.log(
    stylesheet(
      PRELUDE,
      [
        ruleset(':root', colors),
        ...colors.map(([colorName]) => ruleset(`.${colorClassName(colorName)}`, [['color', `var(${colorName})`]])),
        ...colors.map(([colorName]) => ruleset(`.${colorClassName(colorName)}Bg`, [['background', `var(${colorName})`]]))
      ]
    )
  );
};

colorStylesheet();
