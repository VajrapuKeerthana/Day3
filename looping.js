looping statement: 
- to execute the block of code repeatedly

-for loop : when we have the proper count of execution.
minimum iteration count is 0

syntax:
for(initialization;condition;updation){
}
-while : will be used when we dont know the iteration count.
minimum iteration count is 0
syntax:
while(condition){
}

-do while: will be used when we dont know the iteration count.
minimum iteration count is 1


syntax:
do{
//statement
}while(condition)


what are entry control and exit control loops?
-entry controlled loops are: for loop,while loop
-exit controlled loops are: do while loops


// for loop
for(let i=1;i<=5;i++){
console.log("good morning");
}

output: good morning will print 5 times

ex2:
let n=100;
for(i=0;i<=n;i++){
console.log(i);
}

I have to print 1 as even and 2 as even and 3 as odd unit 100..}
let n=100;
for(let i=0;i<n;i++){
if(i%2==0){
console.log( i +" is even number");
else{
console.log(i+" is odd number ");
}


while:
let i=1;
while(i<=5){
console.log("good morning");
i++;
}


 do while:
let i=1;
let n=5;
do{
i++;
console.log("batch three us awesome");
}while(i>=n){
}

out put : if the condition is false it will print one time or else it will print number of times it Was true.


for(i=1;i<=10;i++){
console.log(i)
for (i == 5) break;
}

output:
1
2
3
4
5
 