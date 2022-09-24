// Given array = [2,5,1,2,5,1,2]
// output = 2

// Given array = [1,3,5,7,9]
// output = return undefined

function firstRecurringItem(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
} //O(n^2)

let output = firstRecurringItem([2, 5, 1, 2, 5, 1, 2]);
console.log(output);

// Using HashTables
function firstRecurringItem2(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
}
//O(n)
output = firstRecurringItem2([2, 5, 1, 2, 5, 1, 2]);
console.log(output);

// Using sets
const firstRecurringCharacter2 = (numbers) => {
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    if (set.has(numbers[i])) return numbers[i];
    set.add(numbers[i]);
  }
  return undefined;
}; // O(n)

output = firstRecurringCharacter2([2, 5, 5, 1, 2, 5, 1, 2]);
console.log(output);
