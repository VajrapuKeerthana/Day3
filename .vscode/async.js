function fetchUsers() {
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
  }
  