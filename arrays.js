Arrays:
- it is non primitive
-it is a collection of elements


syntax:
let arr=[];

map(): it is used to ierate values from the array
- if we return the value map() method used nothing

for each(): it is used to ierate values from the array
-if we return the value foreach() method it returns undefined

note:- "this"-it is used to target current executing object.

JSON: JavaScript object Notation
-Json is a lightweight process to transfer the data form client to server.
example:
let user1 ="ramya";
let user2 ="piyush";
let user3 ="chetan";
let user4 ="keerthana";
let user5 ="nikhil";
//console.log(user1);
//console.log(user2);
//console.log(user3);
//console.log(user4);
let users=["ramya","Piyush","Chetan","keerthana","Nikhil"];
for(i=0;i<users.length;i++){
console.log(users[i]);
}

Map method:
let users=["ramya","Piyush","Chetan","keerthana","Nikhil"];
users.map((user)=>{
console.log(user);
})


forEach:
users.forEach((user)=>{
console.log(user);
}

//return in forEach

let x=users.forEach((user)=>{
//console.log(user);
return user;
});
console.log(x);//undefined


What is object?
-object is an entity which is having states(properties ) and behaviours.
-object is used to store the data in the form of key value pairs


ex:
let userDetails={
name:"Keerthi",
age=21,
company :"Amazon",
sal:500000
details:function(){
return 'My name is ${this.name} and i am working in ${this.company}'
}
};
console.log(userDetails);
console.log(userDetails.name);
console.log(userDetails.details());

//create the nested object and access the property of nested object

let userDetails={
name:"Keerthi",
age=21,
company :"Amazon",
sal:500000
address:{
city:"Hyd",
area:{
  areaName=Hitech",
  pincode:123456
}
}
}
console.log(userDetails.address.city);
console.log(userDetails.address.area.areaName);

// create array of objects and print the values

let userDetails =[
{
name:"Keerthi",
city="hyd"
}
{
name:"piyush",
city="ndcl"
}
{
name:"chetan",
city="khammam"
}
];

userDetails.map((x)=>{
console.log(x.name);
})


methods of json:-
1.JSON.stringfy(): it is used to convert javascript object into JSON object.
-except number it will store both key and value pairs inside the double quotes.
2.JSON.parse() :- it is used to convert JSON object into javascript object.



ex:
let userDetails{
age:21;
city:"hyd"
};
consle.log(userDetails);
let x = JSON.stringfy(userDetails);
console.log("JSON object"+x);
let y=JSON.parse(x);
console.log(y);