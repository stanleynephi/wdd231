const currentURL =  window.location.href
console.log(currentURL)

//split the url into two and retrieve the needed info
const updatedURL = currentURL.split("?")
console.log(updatedURL)


//split new array
let newARRAY = updatedURL[1].split("&")
console.log(`new array ${newARRAY}`)



// Function to show the needed results
function showResults(data){
    console.log(data)


    newARRAY.forEach(element => {
        if(element.startsWith(data)){
            results = element.split("=")[1].replace("%40", "@") 
                                           .replace("%2B", "+")
        }
    });
    return(results)
}   

function datatoScreen() {
    // Full name
    let name = showResults("fname") + " " + showResults("lname");
    const nameElement = document.createElement("p"); // Create a paragraph for the name
    nameElement.textContent = `Name: ${name}`;
    document.querySelector("#results").appendChild(nameElement); // Append the name to the results div
    console.log(name);

    // Organizational name and title
    let organizatonInfo = showResults("organizational_title") + " " + showResults("organizational_name");
    const organizationElement = document.createElement("p"); // Create a paragraph for the organization info
    organizationElement.textContent = `Organization: ${organizatonInfo}`;
    document.querySelector("#results").appendChild(organizationElement); // Append the organization info to the results div
    console.log(organizatonInfo);

    // Email
    const CompanyEmail = document.querySelector("#companyemail");
    CompanyEmail.textContent = `Email: ${showResults("organizational_email")}`;
    CompanyEmail.href = `mailto:${showResults("organizational_email")}`;

    // Phone
    const CompanyPhone = document.querySelector("#companyphone");
    CompanyPhone.textContent = `Telephone: ${showResults("organizational_phone")}`;
    CompanyPhone.href = `tel:${showResults("organizational_phone")}`;
    
}


datatoScreen();





const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});