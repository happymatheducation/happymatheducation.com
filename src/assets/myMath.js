let allPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

export function primeFactorize(number) { //does not work for 101 ^ 2
    let maxToCheck = Math.floor(Math.sqrt(number));
    let allPrimesToCheck = allPrimes.filter(x => x <= maxToCheck);
    let primeFactorization = [];
    let iCount;
    for (let i in allPrimesToCheck) {
        let currentPrime = allPrimesToCheck[i];
        iCount = 0;
        while (currentPrime <= number && number % currentPrime === 0) {
            number = number / currentPrime;
            iCount++;
        }
        if (iCount) {
            primeFactorization.push({ prime: currentPrime, power: iCount });
        }
    }
    return primeFactorization; //example [{prime:2,power:3}, {prime:3, power:1}];
}

export function sumArray(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}

export function gcdOfTwo(a, b) {
    if (b === 0) {
        return a;
    }
    return gcdOfTwo(b, a % b);
}

export function gcd(...args) {
    let gcd = args[0];
    for (let arg of args) {
        gcd = gcdOfTwo(gcd, arg);
    }
    return gcd;
}

export function reduceFraction(numerator, denominator) {
    let gcd = gcdOfTwo(numerator, denominator)
    numerator = numerator / gcd;
    denominator = denominator / gcd;
    return [numerator, denominator];
}

export function isPrime(number) { // cannot check 101^2
    if (number <= 1) { return false }
    let maxToCheck = Math.floor(Math.sqrt(number));
    let allPrimesToCheck = allPrimes.filter(x => x <= maxToCheck);
    for (let i in allPrimesToCheck) {
        if (number % allPrimesToCheck[i] === 0) { return false }
    }
    return true; 
}

export function isComposite(number) { // cannot check 101^2
    if (number <= 1) { return false }
    let maxToCheck = Math.floor(Math.sqrt(number));
    let allPrimesToCheck = allPrimes.filter(x => x <= maxToCheck);
    for (let i in allPrimesToCheck) {
        if (number % allPrimesToCheck[i] === 0) { return true }
    }
    return false;
}