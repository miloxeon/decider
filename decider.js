/*
{
  root: true,
  mobile: isMobile,
  inert: !isMobile && isInert
}
*/

export default (styles, decisionMatrix) => {
  const classNames = Object.keys(decisionMatrix)
  let result = ''
  
  for (let i in classNames) {
    const className = keys[i]
    const shouldBeApplied = decisionMatrix[className]
    
    if (shouldBeApplied) {
      result += styles[className] + ' '
    }
  }
  
  return result
}
