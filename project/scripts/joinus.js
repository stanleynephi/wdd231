import {packages} from "../scripts/data/packages.js";
console.log(packages)




const $packages = document.querySelector(".packages");
const detailList = document.querySelector("#List");
const closeDialog = document.querySelector("dialog div button");
const dialog = document.querySelector("dialog");

packages.forEach((e) => {
    const packageCard = document.createElement("div");
    packageCard.classList.add("package_card");
    const packageName = document.createElement("h1");
    const packageAmount = document.createElement("h2");
    const learnMore = document.createElement("button");
    learnMore.innerHTML = "Learn more";

    packageName.innerHTML = e.name;
    packageAmount.textContent = `${e.price}${e.currency}`;

    packageCard.append(packageName, packageAmount, learnMore);

    learnMore.addEventListener("click", () => eventDetails(e));

    $packages.append(packageCard);
});



// Function to populate dialog with event details
function eventDetails($package) {
    const packageName = document.querySelector("dialog h2");
    packageName.innerHTML = $package.name;
    console.log(packageName);

    detailList.innerHTML = "";
    $package.details.forEach((det) => {
        const li = document.createElement("li");
        li.textContent = det;
        detailList.appendChild(li);
    });

    dialog.showModal();
}


closeDialog.addEventListener("click", () => {
    dialog.close();
});





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