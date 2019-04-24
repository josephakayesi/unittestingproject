exports.calculateMean = (numberArray) => {
   return numberArray.length != 0 ? ((numberArray.reduce((total, number) => total + number)/numberArray.length)) : null
}

exports.sayHello = () => {
    return 'Hello'
}

exports.isValid = (entry) => {
    return typeof(entry) == 'string' ? true : false
}