// // // function addNums(a,b){
// // //     var c=a+b;
// // //     console.log(c);
    
// // // }

// // // addNums(20,10);
// // // console.log(c);

// // const avgNums = function (a,b,c) {
// //     const avg = (a+b+c)/3;
// //     console.log(avg);
// //     return avg;
    
// // }

// // const result = avgNums(4,6,8);

// // console.log(result);

// // new in es6 - arrow function

// const factorial = (n) => {
//     let f = 1;
//     for (let i =1;i <= n; i++) {
//         f = f*i
//     }
//     return f;
// }

// let fact = factorial(6);

// console.log(fact);

// write a function to check if a number is prime

 const checkPrime = (n) => {
    let prime = true;

    for (let i = 2; i <=n; i++) {
        if (n % i === 0) {
            prime = false;
            break
        }
    }
    if (prime) return true;
    return false 
 }
 console.log(checkPrime(97));