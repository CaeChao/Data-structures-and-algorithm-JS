// This is an example to show you how you can use closure to
// calculate derivative

function de(f) {
  function calc(x) {
    // dx as infinitesimal ∆x
    const dx = 0.000001;
    return (f(x + dx) - f(x)) / dx;
  }
  return calc;
}

// define the function
const f = (x) => {
  return x ** 2 + x + 1;
};

// define the first derivative of f
const f1 = de(f);

// calculate the slope when x = 3
console.log(f1(3));

// calculate second derivative
const f2 = de(f1);
console.log(f2(3));
