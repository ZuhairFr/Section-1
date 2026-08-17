const nums = [4,7,9,2,1,5,6];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);   
}

console.log('----for of loop----');   


for(let n of nums) {
    console.log(n);
    
}

console.log('----for each function----'); 

nums.forEach((a,b,c) => {console.log(a,b,c);} );

console.log('----display all even numbers----');

for(let n of nums) {
    if (n % 2 === 0) {
    console.log(n);    
    }
}