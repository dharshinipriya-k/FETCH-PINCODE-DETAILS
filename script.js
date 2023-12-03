const pincode = document.getElementById("pin");
const getDetails = document.getElementById("getDetails");

getDetails.addEventListener("click", async () => {
  //Using API to fetch details
  const input = pincode.value;
  const details = await fetch(`https://api.postalpincode.in/pincode/${input}`);
  const data = await details.json();

  displayData(data);
});

function displayData(data) {
  const input = pincode.value;
  console.log(data);
  const displayDetails = document.createElement("div");
  const contain = document.getElementById("contain");
  contain.append(displayDetails);
  displayDetails.setAttribute("id", "details");
  for (var i = 0; i < data[0].PostOffice.length; i++) {
    displayDetails.innerHTML = `<p><b>Pincode:</b> ${input} </p>
                       <p><b>Name: </b> ${data[0].PostOffice[i].Name}</p>
                       <p><b>Circle: </b> ${data[0].PostOffice[i].Circle}</p>
                       <p><b>District: </b> ${data[0].PostOffice[i].District}</p>
                       <p><b>Division: </b> ${data[0].PostOffice[i].Division}</p>
                       <p><b>Block: </b> ${data[0].PostOffice[i].Block}</p>
                       <p><b>State: </b> ${data[0].PostOffice[i].State}</p>
                       <p><b>Type: </b> ${data[0].PostOffice[i].BranchType}</p>
                       `;

    maindiv.append(displayDetails);
  }
}
