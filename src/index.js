const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const fullName = document.getElementById("fullname")
  const email = document.getElementById("email")
  const street = document.getElementById("street")
  const city = document.getElementById("city")
  const phone = document.getElementById("phone")
  const state = document.getElementById("state")
  const cell = document.getElementById("cell")
  const dob = document.getElementById("date_of_birth")
  const postCode = document.getElementById("postcode")


  let button = document.querySelector(".btn-primary")

  button.addEventListener("click", () => {
     fetch('https://randomuser.me/api/')
     .then(response => response.json())
     .then(parsedResponse =>{
       console.log(parsedResponse)
        data = parsedResponse.results[0]
        fullName.innerText = `${data.name.first} ` + `${data.name.last} `
        email.innerText = data.email
        street.innerText = `${data.location.street.number} ` + `${data.location.street.name}`
        city.innerText = data.location.city
        state.innerText = data.location.state
        postCode.innerText = data.location.postcode
        phone.innerText = data.phone
        cell.innerText = data.cell
        dob.innerText = data.dob.date.substring(0, 10)

      })
  })

});
