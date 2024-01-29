// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(a, b, ...rest) {
  // Add a loop here
  let result = a + b;
  for(const num of rest) {
    result += num;
  }

  return result;
}

add(1, 2, 3, 4, 5);
