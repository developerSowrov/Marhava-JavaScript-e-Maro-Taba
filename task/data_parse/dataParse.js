// 1 ---------
const num = "20"
const sum10 = parseInt(num) + 10
console.log(sum10)
//  2 ----------- 
const divisionNum = "3.14159"
console.log(parseInt(divisionNum))

// 3 ----------
const tryToMakeNumberUsingString = "numberHo"
console.log(parseInt(tryToMakeNumberUsingString))

// 4 ----------
const num1 = 3.456
const num2 = 4.866
const sum = num1+num2
console.log(parseFloat(sum.toFixed(2)))

// 5 -----------
const str1 = "56.78"
const str2 = "12.34"
console.log(str1+str2)
const convertToSumNumber = parseFloat(str1) + parseFloat(str2)
console.log(convertToSumNumber)

// 6 ----------
const pointNumber = "34.3457865345"
const convertNumberToString = parseFloat(pointNumber)
console.log(parseFloat(convertNumberToString.toFixed(3)))
console.log(parseInt(convertNumberToString.toFixed(3)))