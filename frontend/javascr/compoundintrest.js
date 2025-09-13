function compoundinterest(principal, rate, time, n) {
    let amount = principal * Math.pow((1 + rate / n), n * time);
    let ci = amount - principal;
    return ci;
}
console.log(compoundinterest(1000, 0.05, 10, 4));
console.log(compoundinterest(1500, 0.043, 6, 12));
console.log(compoundinterest(2000, 0.03, 5, 2));
console.log(compoundinterest(2500, 0.04, 3, 1));
console.log(compoundinterest(3000, 0.06, 7, 3)); 
