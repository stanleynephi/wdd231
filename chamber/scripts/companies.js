//get the dialog and the buttons 
import { packages } from "./memberships.js";
console.log(packages)


const packagesHere = document.querySelector(".packagesHere")
const detail = document.querySelector("#List")
const closeDialog = document.querySelector("dialog div button")

packages.forEach(
    (x) => {
        const packageName = document.createElement("h1")
        const packageAmount = document.createElement("h2")
        const learnMore = document.createElement("button")
        learnMore.innerHTML = `Learn More`
        const packageDetails = document.createElement("div")

        packageName.innerHTML = `${x.name}`
        packageAmount.innerHTML = `Price:${x.price}${x.currency}`

        
        packageDetails.append(packageName,packageAmount,learnMore)
        learnMore.addEventListener("click",()=>showDetails(x))

        packagesHere.appendChild(packageDetails)
    }
)


function showDetails(x){
    const packageName = document.querySelector("dialog h2")
    packageName.innerHTML = x.name
    
    detail.innerHTML = "";
    x.details.forEach(
        det => {
            const detailItem = document.createElement("li")
            detailItem.textContent = det
            detail.append(detailItem)
        }
    )

    document.querySelector("dialog").showModal()
}


closeDialog.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    const detail = document.querySelector("dialog ul"); // Assuming you have a <ul> for the details
    
    dialog.close(); // Close the dialog
    detail.innerHTML = " "; // Clear the details right after closing the dialog
});





const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});