let allPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let allPrimePowers = allPrimes.concat([4, 8, 16, 32, 64, 128, 9, 27, 81, 25, 125, 49, 121]);

const myMath = {

    allPrimes: allPrimes,
    allPrimePowers: allPrimePowers,

    randomFromArray(a) { //inclusive
        return a[Math.floor(Math.random() * a.length)];
    },

    randomInteger(from, to) { //inclusive
        return Math.floor(Math.random() * (to - from + 1)) + from;
    },

    primeFactorize(number) { //does not work for 101 ^ 2
        let primeFactorization = [];
        let iCount;
        for (let currentPrime of this.allPrimes) {
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

    polynomialProduct(P, Q) {
        //   P = P[0]x^n + P[1]x^(n-1) + ... + P[n-1]x + P[n]
        // * Q = Q[0]x^m + Q[1]x^(m-1) + ... + Q[m-1]x + Q[m]
        // = F
        if (typeof P === 'number') { P = [P] };
        if (typeof Q === 'number') { Q = [Q] };
        let n = P.length - 1;
        let m = Q.length - 1;
        let F = [];
        let a; // coefficient of result
        for (let indexSum = 0; indexSum <= m + n; indexSum++) { //CRISS-CROSS algorithm
            a = 0;
            for (let iP = Math.max(0, indexSum - m); iP <= Math.min(n, indexSum); iP++) { a += P[iP] * Q[indexSum - iP] };
            F.push(a);
        }
        return F;
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

    lcmOfTwo(a, b) {
        if (a * b === 0) { return 0 }
        return a * b / this.gcdOfTwo(b, a);
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
        let allPrimesToCheck = this.allPrimes.filter(x => x <= maxToCheck);
        for (let i in allPrimesToCheck) {
            if (number % allPrimesToCheck[i] === 0) { return false }
        }
        return true;
    },

    isComposite(number) { // cannot check 101^2
        if (number <= 1) { return false }
        let maxToCheck = Math.floor(Math.sqrt(number));
        let allPrimesToCheck = this.allPrimes.filter(x => x <= maxToCheck);
        for (let i in allPrimesToCheck) {
            if (number % allPrimesToCheck[i] === 0) { return true }
        }
        return false;
    },

    binomial(n, k) {
        if ((typeof n !== 'number') || (typeof k !== 'number'))
            return false;
        var coeff = 1;
        for (var x = n - k + 1; x <= n; x++) coeff *= x;
        for (x = 1; x <= k; x++) coeff /= x;
        return coeff;
    },
};

export default myMath;

