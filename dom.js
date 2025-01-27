// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

//! 
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// // ele[0].style.backgroundColor="tomato"

// //!spread operator :- it will takeout each and every value from the original array 
// //! and store it inisde one more new array(pure array).
// //? syntax :- [...variable];
// let x = [...ele];
// // console.log(x , Array.isArray(x));
// x.map(element=>{
//     // console.log(element);
//     element.style.backgroundColor="orange"
// })

//! 

// let ele = document.getElementsByTagName("div");
// console.log(ele);

//! 

// let ele = document.getElementsByName("formData");
// // console.log(ele , Array.isArray(ele));
// [...ele].map(inp=>{
//     console.log(inp.value);
// })

//! 
// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);



// let btn = document.querySelector("#btn");
//! addEventListner("event" ,()=>{})
    // btn.addEventListener("click",()=>{
    //     // console.log("button clicked");
    //     // alert("hi")
    //     document.body.style.backgroundColor="tomato"
    // })

    // let btn = document.querySelector("#btn");
    // btn.addEventListener("dblclick",()=>{
    //     console.log("double clicked");
    // })


    // let divBlock = document.getElementById("divBlock");
    // divBlock.addEventListener("mouseover",()=>{
    //     document.body.style.backgroundColor="yellow"
    //     divBlock.style.backgroundColor="blue"
    // })

    // divBlock.addEventListener("mouseleave",()=>{
    //     document.body.style.backgroundColor="orange"
    //     divBlock.style.backgroundColor="aqua"
    // })


    // let inp =document.getElementById("inp");
    // inp.addEventListener("keydown",()=>{
    //     console.log("keydown");
    // })

    // inp.addEventListener("keyup",()=>{
    //     console.log("keyup");
    // })

    // let bgColor = document.querySelectorAll(".bgColor");
    // // console.log(bgColor);
    // [...bgColor].map((element)=>{
    //     // console.log(element);
    //     element.addEventListener("mouseover",()=>{
    //         // console.log(element.innerText);
    //         element.style.backgroundColor=element.innerText;
    //     });
    //     element.addEventListener("mouseleave",()=>{
    //         // console.log(element.innerText);
    //         element.style.backgroundColor="transparent";
    //     });
    // })


// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation of html element";
// // ele.setAttribute("id" , "demo");
// ele.id = "demo";

// // ele.removeAttribute("id")
// // console.log(ele);

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image)



/*let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    let uname = username.value;
    let uemail = mail.value;
    let upass = psw.value;
   let userDetails={
    uname , uemail, upass
   }
   console.log(userDetails);
   localStorage.setItem("userData" , JSON.stringify(userDetails))
})

// localStorage.clear();*/


/*let video = document.createElement("video");
video.setAttribute("src","./WhatsApp Video 2025-01-27 at 12.13.54_453cf8fd.mp4")
console.log(video);

document.body.appendChild(video)*/
let mainEle= document.createElement("div");
mainEle.setAttribute("id","mainBlock");
mainEle.style.border="5px solid red";
mainEle.style.width="50%";
mainEle.style.height="50%";
console.log(mainEle);

let topEle= document.createElement("div");
mainEle.setAttribute("id","topBlock");
// console.log(topEle);

let img = document.createElement("img");
img.src = "./WhatsApp Image 2025-01-23 at 21.14.39_b9827263.jpg";
img.style.width = "100%";
img.style.height = "50%";


let bottomEle= document.createElement("div");
mainEle.setAttribute("id","bottomBlock");
// console.log(bottomEle);



let h1 = document.createElement("h1");
h1.innerText = "keerthana vajrapu";
h1.style.textAlign="center";

let btn = document.createElement("button");
btn.innerText = "View More";
btn.style.border="none";
btn.style.padding="10px";
btn.style.backgroundcolor="dodgerblue";
btn.style.color="white";

bottomEle.appendChild(btn);
bottomEle.appendChild(h1);
topEle.appendChild(img);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);

document.body.appendChild(mainEle);

console.log(mainEle);