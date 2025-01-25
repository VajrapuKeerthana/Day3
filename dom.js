// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

/*let ele = document.getElementById("test");
// ele.innerText= "<h1>Header</h1>"
ele.innerHTML = "<h1>Header</h1>"
console.log(ele);*/

let ele = document.getElementsByClassName("test");
console.log(ele);
console.log(Array.isArray(ele));
ele[0].innerText="Hello"
/*ele[0].computedStyleMap.background="tomato"
ele[1].computedStyleMap.background="tomato"
ele[1].computedStyleMap.background="tomato"
ele[3].computedStyleMap.background="tomato"
ele[4].computedStyleMap.background="tomato"*/

//!spread operator:- it will takeout each and every value from the original to the one more new array
//?syntax:- [...variable];
/*let x = [...ele];
console.log(x,Array.isArray(x));
x.map(element=>{
    element.style.backgroundColor="orange"
})*/

/*let ele = document.getElementsByName("formData");
console.log(ele,Array.isArray(ele));
[...ele].map(inpu=>{
    console.log(inpu.value)
})*/

/*let ele = document.querySelector("#mru");
console.log(ele);*/

/*let ele = document.querySelector(".test");
console.log(ele);*/

/*let ele = document.querySelectorAll(".test");
console.log(ele);*/


/*let btn = document.querySelector("#btn");
//! addEventListener("event",()=>{})
    btn.addEventListener("click",()=>{
    
    })*/

/*let ele = document.createElement("h1");
ele.innerText = "Dynamic creation of html element";
ele.id = "demo";

let image = document.createElement("image");
image.src = "/.3606208.jpg";
console.log(image);

document.body.appendChild(ele);
document.body.appendChild(image);*/

let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let PSW = document.getElementById("uPass");


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let uname= username.ariaValueMax;
    let uemail = mail.value;
    let upass = PSW.value;
    let userDetails={
        uname, uemail, upass
    }
    console.log(userDetails);
    localStorage.setItem("userData", isSecureContext.stringify(userDetails))
    

}
)
