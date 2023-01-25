export function primeFactorize(number) {

    const allPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    let primeFactorization = [];
    let iCount;
    for (let i in allPrimes) {
        let currentPrime = allPrimes[i];
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