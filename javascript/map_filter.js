const nums = [3,5,9,4,2,8,1];

const evenNums = nums.filter((n) => {return n % 2 === 0});

console.log(evenNums);


const prices = [300,450,210,1400,2800];

const b = prices.filter((prices) => {return prices>500 & prices<2000} );

console.log(b);


const sqrNums = prices.map(n => { return n**2 });
console.log(sqrNums);

const afterGst = prices.map((p) => {p*1.18});

console.log(afterGst);

