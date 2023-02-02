let allPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const myMath = {

    randomInteger(from, to) { //inclusive
        return Math.floor(Math.random() * (to - from + 1)) + from;
    },

    primeFactorize(number) { //does not work for 101 ^ 2
        let primeFactorization = [];
        let iCount;
        for (let currentPrime of allPrimes) {
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
    },

    sumArray(array) {
        return array.reduce((accumulator, currentValue) => accumulator + currentValue);
    },

    gcdOfTwo(a, b) {
        if (b === 0) {
            return a;
        }
        return this.gcdOfTwo(b, a % b);
    },

    gcd(...args) {
        let gcd = args[0];
        for (let arg of args) {
            gcd = this.gcdOfTwo(gcd, arg);
        }
        return gcd;
    },

    reduceFraction(numerator, denominator) {
        let gcd = this.gcdOfTwo(numerator, denominator)
        numerator = numerator / gcd;
        denominator = denominator / gcd;
        return [numerator, denominator];
    },

    isPrime(number) { // cannot check 101^2
        if (number <= 1) { return false }
        let maxToCheck = Math.floor(Math.sqrt(number));
        let allPrimesToCheck = allPrimes.filter(x => x <= maxToCheck);
        for (let i in allPrimesToCheck) {
            if (number % allPrimesToCheck[i] === 0) { return false }
        }
        return true;
    },

    isComposite(number) { // cannot check 101^2
        if (number <= 1) { return false }
        let maxToCheck = Math.floor(Math.sqrt(number));
        let allPrimesToCheck = allPrimes.filter(x => x <= maxToCheck);
        for (let i in allPrimesToCheck) {
            if (number % allPrimesToCheck[i] === 0) { return true }
        }
        return false;
    },
};

export default myMath;

