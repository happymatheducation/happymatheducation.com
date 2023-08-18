let allPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let allPrimePowers = allPrimes.concat([4, 8, 16, 32, 64, 128, 9, 27, 81, 25, 125, 49, 121]);

const myMath = {

    allPrimes: allPrimes,
    allPrimePowers: allPrimePowers,

    isInteger(num) {
        let rounded = Math.round(num);
        let error = Math.abs(rounded - num);
        return error < 0.00001 ? true : false;
    },

    sqrtSimplification(n) {
        // n = p^2 * k;
        let p = 1;
        let i = 2;
        while (i <= Math.sqrt(n)) {
            if (n % (i * i) === 0) { p *= i; n /= i * i; i = 2; }
            else { i++ };
        };
        return [p, n];
    },

    randomFromArray(a) { //inclusive
        return a[Math.floor(Math.random() * a.length)];
    },

    randomInteger(from, to) { //inclusive
        return Math.floor(Math.random() * (to - from + 1)) + from;
    },

    randomRealNumber(from, to) {
        let ratio = Math.random();
        return (ratio * from + (1 - ratio) * to);
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

    fractionMultiplication([numerator1, denominator1], [numerator2, denominator2]) {
        let numerator = numerator1 * numerator2;
        let denominator = denominator1 * denominator2;
        return this.reduceFraction(numerator, denominator);
    },

    fractionDivision([numerator1, denominator1], [numerator2, denominator2]) {
        let numerator = numerator1 * denominator2;
        let denominator = denominator1 * numerator2;
        return this.reduceFraction(numerator, denominator);
    },

    fractionAddition([numerator1, denominator1], [numerator2, denominator2]) {
        let denominator = denominator1 * denominator2;
        let numerator = numerator1 * denominator2 + numerator2 * denominator1;
        return this.reduceFraction(numerator, denominator);
    },

    fractionSubtraction([numerator1, denominator1], [numerator2, denominator2]) {
        let denominator = denominator1 * denominator2;
        let numerator = numerator1 * denominator2 - numerator2 * denominator1;
        return this.reduceFraction(numerator, denominator);
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
    },

    intervalIntersection(A, B) { // find the intersection between intervals A (string) and B (string). Return '' for an exmpty set. 
        function stringToObject(X) {
            let Xobj = { left: null, leftOpen: null, right: null, rightOpen: null }
            Xobj.leftOpen = X.includes('[') ? false : true;
            Xobj.rightOpen = X.includes(']') ? false : true;
            X = X.replace('[', '(');
            X = X.replace(']', ')');
            Xobj.left = parseFloat(X.slice(X.indexOf('(') + 1, X.indexOf(',')));
            Xobj.right = parseFloat(X.slice(X.indexOf(',') + 1, X.indexOf(')')));
            return Xobj;
        }

        A = stringToObject(A);
        B = stringToObject(B);

        if (A.left > B.right || A.right < B.left) {
            return '' // empty interval. 
        }
        if (
            (A.left === B.right && (A.leftOpen || B.rightOpen)) ||
            (B.left === A.right && (B.leftOpen || A.rightOpen))
        ) { return '' }

        let C = { left: null, leftOpen: null, right: null, rightOpen: null }
        if (A.left < B.left) { C.left = B.left; C.leftOpen = B.leftOpen }
        else if (A.left > B.left) { C.left = A.left; C.leftOpen = A.leftOpen }
        else {
            C.left = A.left;
            C.leftOpen = !A.leftOpen && !B.leftOpen ? false : true;
        }
        if (A.right < B.right) { C.right = A.right; C.rightOpen = A.rightOpen }
        else if (A.right > B.right) { C.right = B.right; C.rightOpen = B.rightOpen }
        else {
            C.right = A.right;
            C.rightOpen = !A.rightOpen && !B.rightOpen ? false : true;
        }
        return C
    },

    lawCosC([c, b, a]) {
        return this.reduceFraction(a * a + b * b - c * c, 2 * a * b);
    },

    fractionToTex([numerator, denominator]) {
        if (this.isInteger(numerator / denominator)) {
            return Math.round(numerator / denominator) + '';
        }
        let posFraction = '{' + Math.abs(numerator) + '\\over' + Math.abs(denominator) + '}';
        if (numerator * denominator > 0) {
            return posFraction
        } else if (numerator * denominator < 0) {
            return '-' + posFraction;
        } else if (numerator === 0) {
            return '0'
        } else { return '\\text{undefined}' }
    },

    fractionToString([numerator, denominator]) {
        let posFraction = Math.abs(numerator) + '/' + Math.abs(denominator);
        if (numerator * denominator > 0) {
            return posFraction
        } else if (numerator * denominator < 0) {
            return '-' + posFraction;
        } else if (numerator === 0) {
            return '0'
        } else { return '\\text{undefined}' }
    },

    arraysAreSame(firstArray, secondArray, ordered) {
        if (firstArray.length !== secondArray.length) { return false }
        else if (ordered) {
            let same = true;
            for (let i = 0; i < firstArray.length; i++) {
                if (firstArray[i] !== secondArray[i]) { same = false }
            }
            return same;
        }
        else {
            if (this.arraysAreSame(firstArray, secondArray, true)) { return true }
            else {
                let currentElement = firstArray[0];
                let newFirstArray = firstArray.toSpliced(0, 1);
                if (!secondArray.includes(currentElement)) { return false }
                else {
                    let currentIndex = secondArray.findIndex(e => e === currentElement);
                    let newSecondArray = secondArray.toSpliced(currentIndex, 1);
                    return this.arraysAreSame(newFirstArray, newSecondArray, false);
                }
            }
        }
    },

};

export default myMath;

