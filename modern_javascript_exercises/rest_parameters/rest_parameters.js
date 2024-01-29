// Instructions can be found in rest_parameters.md
// DONE!! 

// Add rest parameters here!
export function add(...nums) {
  // Add a loop here
  let result = 0;
  nums.forEach(num => result += num);

  return result;
}

add(1, 2, 3, 4, 5);
