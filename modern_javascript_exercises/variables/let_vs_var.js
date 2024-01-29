// Instructions can be found in let_vs_var.md

// Problems with var

function count() {
  for (let i = 0; i < 5; i++) {
    console.log(i + " inside the forLoop");
  }
  let i = 0;
  console.log(i + " outside the forLoop");
}

count(); // <---- uncomment me!

// Another problem with var is that we can overwrite it, like this:

const greeting1 = "Hello 😘";
const greeting2 = "Not today, pal! 😤";

console.log(greeting1) // <----- uncomment me!
