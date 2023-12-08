const pincode = document.getElementById("pin");
const getDetails = document.getElementById("getDetails");

const promise1 = new Promise((resolve, reject) => {
  resolve(success());
  reject("Error fetching Data");
})
  .then(() => console.log())
  .catch((error) => console.log(error));

function success() {
  getDetails.addEventListener("click", async () => {
    //Using API to fetch details
    const input = pincode.value;
    const details = await fetch(
      `https://api.postalpincode.in/pincode/${input}`
    );
    const data = await details.json();

    displayData(data);
  });

  function displayData(data) {
    const input = pincode.value;

    const table = document.createElement("table");
    const contain = document.getElementById("contain");
    contain.append(table);
    table.classList.add("table", "table-info", "table-striped-columns");
    table.innerHTML = `<thead>
    <tr>
      <th scope="col">Pincode</th>
      <th scope="col">Name</th>
      <th scope="col">Circle</th>
      <th scope="col">District</th>
      <th scope="col">Division</th>
      <th scope="col">Block</th>
      <th scope="col">State</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  `;

    const tbody = document.createElement("tbody");
    table.append(tbody);
    for (var i = 0; i < data[0].PostOffice.length; i++) {
      tbody.innerHTML += `
        <tr>
          <th scope="row">${input}</th>
          <td>${data[0].PostOffice[i].Name}</td>
          <td>${data[0].PostOffice[i].Circle}</td>
          <td>${data[0].PostOffice[i].District}</td>
          <td>${data[0].PostOffice[i].Division}</td>
          <td>${data[0].PostOffice[i].Block}</td>
          <td>${data[0].PostOffice[i].State}</td>
          <td>${data[0].PostOffice[i].BranchType}</td>
        </tr> `;

      // contain.append(table);
      table.append(tbody);
    }
  }
}
