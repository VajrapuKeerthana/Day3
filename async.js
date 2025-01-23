/*function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log(data); // Log the data to the console
  
        // Find the table body to append rows
        let store = document.getElementById("store");
        console.log(store);
  
        // Iterate over each user and append a row
        data.forEach((user) => {
          store.innerHTML += `
            <tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.company.name}</td>
            </tr>`;
        });
      })
      .catch((err) => console.log(err)); // Handle errors
  */
  
/*function demo()
{
  console.log("Start");
  console.log(10);
  console.log(20);
  return;
  console.log(30);
  console.log(40);
  console.log("End");
}
demo();*/

/*let p =new Promise((resolve ,reject)=>{
  setTimeout(()=>{
    resolve("success");
  },5000)
})
async function demo(){
  console.log("Start");
  let x = await p;
  console.log(x);
  console.log("End");
};
demo()*/

async function fetchUsers()
{
  let response =await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log(data);
}
fetchUsers();