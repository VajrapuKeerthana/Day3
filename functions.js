// ! Functions
// function demo(){
//     console.log("function without parameters");
// }
// demo();

// ! function with parameters
// function userDetails(name,age,city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// ! calling the function
// userDetails("Komal",20,"konda");

// ! Anonymous function
// function(){
//     console.log("Anonymous function");
// }
// ();

// ! function expression
// var x=function(name,age,city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// x("Komal",20,"errasamudhram");

// ! IIFE
// (function(){
//     console.log("IIFE");
// })();

// ! Arrow function
// const x=()=>{
//     console.log("Arrow function");
// }
// x();

// const x=_=>console.log("Arrow function");
// x();

// const x=a=>console.log(a);
// x(5);

// const x=(a,b)=>console.log(a+b);
// x(5,5);

//const x=_=>{console.log("Hi");
  //  console.log("Hello");
    //console.log("bye");
//}
//x();
// ! return Keyword
function demo(a,b){
    return a+b;
};
let x = demo(5,5);
console.log(x);

let y = (a,b) => a+b;//! implict return
let a= y(10,20);
console.log(a);

let z = (a,b) => a+b};//! explict return
let b = z(10,100);
console.log(b);

//! Higher order function

function hof(a){
      return a;
};
let x = hof(function(){return "Hello i am a callback function"});
console.log(x);

function parent(callback){
     return callback

let x = parent(add(5,5));
return a+b
}

// ! closure
function x(){
      var user = "Vinay";
      let company = "Google";
      const sal = 1234567890;
      console.log(user);
      console.log(company);
      console.log(sal);
      console.log(a ,b);
};
x();