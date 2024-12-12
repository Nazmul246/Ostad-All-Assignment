// Function 1: calculateDifference
function calculateDifference(a, b) {
    return a - b;
}

// Function 2: isOdd
function isOdd(number) {
    return number % 2 !== 0;
}

// Function 3: findMin
function findMin(numbers) {
    return Math.min(...numbers);
}

// Function 4: filterEvenNumbers
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// Function 5: sortArrayDescending
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

// Function 6: lowercaseFirstLetter
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// Function 7: findAverage
function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Function 8: isLeapYear
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Testing the functions
console.log("Difference:", calculateDifference(10, 5));
console.log("Is 7 odd?", isOdd(7));
console.log("Minimum:", findMin([3, 5, 1, 8, 2]));
console.log("Even numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("Sorted Descending:", sortArrayDescending([5, 1, 4, 2, 3]));
console.log("Lowercased First Letter:", lowercaseFirstLetter("Hello World!"));
console.log("Average:", findAverage([10, 20, 30, 40, 50]));
console.log("Is 2024 a leap year?", isLeapYear(2024));
