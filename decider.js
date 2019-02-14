/*
{
  root: true,
  mobile: isMobile,
  inert: !isMobile && isInert
}
*/

export default (styles, decisionMatrix) => Object.keys(decisionMatrix)
  .map(className => decisionMatrix[className] ? styles[className] : '')
  .join(' ')
  .trim()
