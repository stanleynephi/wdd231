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

function datatoScreen(){
    // Full name
    let name = showResults("fname") + " " + showResults("lname");
    console.log(name);

    // Organizational name and title
    let organizatonInfo = showResults("organizational_title") + " " + showResults("organizational_name");
    console.log(organizatonInfo);

    // Create email link
    const email = document.createElement("a");
    email.href = `mailto:${showResults("organizational_email")}`;
    email.innerHTML = showResults("organizational_email");
    console.log(email);

    // Create phone link
    const phone = document.createElement("a");
    phone.href = `tel:${showResults("organizational_phone")}`;
    phone.innerHTML = showResults("organizational_phone");
    console.log(phone);

    // Set the inner HTML and then append the email and phone elements
    document.querySelector("#results").innerHTML = `
        Thank you, ${name}, for providing your details!<br>
        Organization: ${organizatonInfo}<br>
        Email: 
    `;

    document.querySelector("#results").appendChild(email); // Append email link
    document.querySelector("#results").innerHTML += `Phone: `;
    document.querySelector("#results").appendChild(phone); // Append phone link
    document.querySelector("#results").innerHTML += `<br>We will reach out to you shortly.`;
}

datatoScreen();





