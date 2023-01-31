// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

// let num = [1, 2, 3];
// let newArray = num.map((times) => times * 3);
// console.log(newArray);

// #-------------------------------------------------------------------------------------------

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

// let words = ["hello", "goodbye"];
// let newWords = words.map((up) => up.toUpperCase());
// console.log(newWords);

// #-------------------------------------------------------------------------------------------

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// let people = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];

// let newPeeps = people.map((person) => person.name);
// console.log(newPeeps);

// #-------------------------------------------------------------------------------------------

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

// let nums = [1, 2, 3];
// let newNums = nums.map((num) => num + 7);
// console.log(newNums);

// #-------------------------------------------------------------------------------------------

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

// let strings = ["hello", "goodbye"];
// let newStrings = strings.map((string) => string.length);
// console.log(newStrings);

// #-------------------------------------------------------------------------------------------

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// let people = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];

// let newPeeps = people.map((person) => person.age);
// console.log(newPeeps);

// #-------------------------------------------------------------------------------------------

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// let nums = [1, 2, 3];
// let newNums = nums.map((num) => num / 2.0);
// console.log(newNums);

// #-------------------------------------------------------------------------------------------

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// let strings = ["hello", "goodbye"];
// let newStrings = strings.map((string) => string[0]);
// console.log(newStrings);

// #-------------------------------------------------------------------------------------------

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// let people = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];
// let numValues = people.map((person) => person.age * 2);
// console.log(numValues);

// #-------------------------------------------------------------------------------------------

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

// let nums = [1, 2, 3];
// let newNums = nums.map((num) => num.toString());
// console.log(newNums);

// # SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
// # SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf
// # SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98
