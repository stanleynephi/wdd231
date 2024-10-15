
//adding bussiness to the main section of the directory
//work on adding business to the main section of the directory


const memberApiUrl = "https://stanleynephi.github.io/wdd231/chamber/data/members.json";

async function MembersApiData() {
    try {
        const response = await fetch(memberApiUrl);

        // Validate if the fetch was successful
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data; // Return the fetched data for further use
        } else {
            console.log(`HTTP error: ${response.status}`);
            const main = document.querySelector(".businessess");
            if (main) {
                main.innerHTML = `Sorry, an error occurred: ${response.status} ${response.statusText}`;
            }
        }
        
    } catch (error) {
        console.log(`This error was found in your code: ${error}`);
        const main = document.querySelector(".businessess");
        if (main) {
            main.innerHTML = "An unexpected error occurred. Please try again later.";
        }
    }
}


MembersApiData()





