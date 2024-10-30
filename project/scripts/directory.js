//import the needed data from the clientsdata.js file
import {clients} from  "../scripts/data/clientsdata.js"

//query select the client section of the directory.html page
const clientSection = document.querySelector("#clients  div")

clients.forEach( client => {
    const clientCard =  document.createElement("div")
    const companyImage = document.createElement("img")
    const companyInfo = document.createElement("div")
    const companyName = document.createElement("h1")
    const companyEmail = document.createElement("a")
    const companyMobile = document.createElement("a")
    const companyAddress = document.createElement("p")
    const companyContacts = document.createElement("ul")
    const companyPhone = document.createElement("li")
    const companyEmails = document.createElement("li")



    companyImage.src = client.companyLogo
    companyImage.alt = client.companyname
    companyName.textContent = client.companyname
    companyEmail.href = client.email
    companyEmail.textContent = client.email
    companyMobile.href = client.phone
    companyMobile.textContent = client.phone
    companyPhone.append(companyMobile)
    companyEmails.append(companyEmail)

    companyContacts.append(
        companyPhone,
        companyEmails
    )
    companyAddress.textContent = `${client.address.street} ${client.address.city} ${client.address.country}`
    
    companyInfo.append(
        companyName,
        companyAddress,
        companyContacts
    )

    clientCard.append(
        companyImage,
        companyInfo
    )

    clientSection.append(
        clientCard
    )
})






//lastmodified
const option2 = {
    day: "numeric",
    month: "short",
    year: "numeric"
}


const $lastModified = document.querySelector("#lastmodified")
$lastModified.innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleDateString("en-US",option2)}`


//copyright
const $copyright = document.querySelector(".copyright")
const currentYear = new Date().getFullYear()

$copyright.innerHTML  = `&copy; ${currentYear} <b>${document.title}  All Rights Reserved`




//navigation
const hamburger = document.querySelector("#hamburger")
const navigation = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');
})

function toggleOff() {
    navigation.classList.remove("open");
    document.querySelector("input").checked = false;
}

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", toggleOff);
});
