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
    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    },
    slope(firstPoint, secondPoint) {
        return (secondPoint.y - firstPoint.y) / (secondPoint.x - firstPoint.x);
    },
    yIntercept(firstPoint, secondPoint) {
        let slope = this.slope(firstPoint, secondPoint);
        return firstPoint.y - slope * firstPoint.x;
    },
    arrayShiftRight(array, steps) {
        let len = array.length;
        steps = steps % len;
        let endIndex = len - steps;
        return array.slice(endIndex, len).concat(array.slice(0, endIndex))
    },
    reverseString(str) {
        // Step 1. Use the split() method to return a new array
        var splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]

        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]

        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"

        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    },
    findIntersectionByPoints(A, B, C, D) { // find the intersection between AB and CD, return a Point object
        let intersection = { x: 0, y: 0 };
        if (A.x === B.x || C.x === D.x) { intersection.x = A.x === B.x ? A.x : C.x }
        else {
            let slopeAB = this.slope(A, B);
            let slopeCD = this.slope(C, D);
            let yinterceptAB = this.yIntercept(A, B);
            let yinterceptCD = this.yIntercept(C, D);
            intersection.x = (yinterceptAB - yinterceptCD) / (slopeCD - slopeAB);
            intersection.y = slopeAB * intersection.x + yinterceptAB;
        }
        return intersection;
    },
    distance(A, B) { // return the distance between points A and B;
        return Math.sqrt((A.x - B.x) ** 2 + (A.y - B.y) ** 2);
    },
    integerBaseChange(representation, from, to) { // change the representation from base "from" to base "to", where "from", "to" <= 10
        // Change to base 10;
        let value = 0;
        let power = 0;
        while (representation) {
            value += (representation % 10) * (from ** power);
            power += 1;
            representation = Math.floor(representation / 10);
        }

        // Change to base "to";
        power = 0
        while (value) {
            representation += (value % to) * (10 ** power);
            power += 1;
            value = Math.floor(value / to);
        }

        return representation
    }
};

export default myMath;

