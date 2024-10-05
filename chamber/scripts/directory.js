//adding bussiness to the main section of the directory
//work on adding business to the main section of the directory


const memberApiUrl = "https://stanleynephi.github.io/wdd231/chamber/data/members.json";

async function MembersApiData() {
    try{
        const response = await fetch (memberApiUrl)
        
        if(response.ok){
            const data = await response.json()
            console.log(data)
            populateBusinessCard(data.companies)
        }
    }
    catch(error){
        console.log(error)
    }
}


MembersApiData()




function populateBusinessCard(data) {
    data.forEach((div, index) => {
        const memberData = data[index].details[0];
        console.log(memberData)


        //create html elements
        const cards = document.createElement("div")
        cards.classList.add("companyinfo")
        const cardHeader = document.createElement("div")
        const cardBody = document.createElement("div")
        cardBody.classList.add("cardbody")

        //create image and content for the card body section
        const cardImage = document.createElement("img")
        const cardContent = document.createElement("div")
        cardContent.classList.add("cardcontent")
        const lists = document.createElement("ul")
        const address = document.createElement("li")
        const phone1 = document.createElement("li")
        const website = document.createElement("li")
        website.classList.add("webistelink")


        //create the header for the card header as well as a p tag
        const companyName = document.createElement("h1")
        const companyDescription = document.createElement("p")

        //companydetails for header
        companyName.textContent = memberData.name

        //populate website body
        address.textContent = memberData.address
        phone1.textContent = memberData.phonenumbers[0].number1
        website.textContent =memberData.website

        lists.append(address,phone1,website)
        cardContent.append(lists)
        console.log(cardContent)




        //populate with the needed information
        companyName.textContent = memberData.name
        companyDescription.textContent = memberData.description


        //image and card content
        cardImage.src = memberData.image
        cardImage.alt = memberData.name
        console.log(cardImage.alt = memberData.name)

        //card header
        cardHeader.append(companyName)
        console.log(cardHeader)

        //append child to card body
        cardBody.append(cardImage,cardContent)
        console.log(cardBody)


        //card append
        cards.append(cardHeader,cardBody)
        document.querySelector(
            ".bussinesses"
        ).append(cards)
    });

}

//function to change display settings
const buttonslist = document.querySelector("#list_grid")
buttonslist.addEventListener("click", () => {
    document.querySelector(".bussinesses").classList.toggle("list-view")
});



const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
