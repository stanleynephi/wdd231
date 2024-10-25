//get the news contents from BBC
const apiKey = "jFvpKqf2zn3MXQpl1aizvNNi1bAkRG5I";
const apiURL = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`

//function to fetch api and console log the results
async function getNews(){
    //try catch statement
    try{
        fetch(apiURL)
        .then(response =>{
            if(!response.ok){
                console.log("Error with the response")
            }
            return response.json()
        })

        .then(data =>{
            console.log(data)
            populateNews(data.results)
            
        })
    }
    catch(err){
        console.log(err)
    }
}


//function to select the first list info in the article section and populate it
function  populateNews(data){ 
    
    const newsList = data.slice(0,5)
    console.log(newsList)

    newsList.forEach(news => {
        //create a list element
        const list = document.createElement("li")
        const title = document.createElement("h3")
        const link = document.createElement("a")
        const button = document.createElement("button")
        title.textContent = news.title
        link.href = news.url
        link.target = "_blank"
        link.textContent = "learn More"
        button.append(link)
        list.append(title, news.abstract, button)
        document.querySelector(".news ul").appendChild(list)
    });

}


getNews()



//import the events and then populate it to the screen
import { events } from "./events.js";
console.log(events)


const eventsHere = document.querySelector(".eventshere");
const detailList = document.querySelector("#List");
const closeDialog = document.querySelector("dialog div button");
const dialog = document.querySelector("dialog");

events.forEach((e) => {
    const eventCard = document.createElement("div");
    const eventName = document.createElement("h1");
    const eventDate = document.createElement("h2");
    const eventDescription = document.createElement("p");
    const learnMore = document.createElement("button");
    learnMore.innerHTML = "Learn more";

    eventName.innerHTML = e.name;
    eventDate.textContent = e.date;
    eventDescription.textContent = e.description;

    eventCard.append(eventName, eventDate, eventDescription, learnMore);

    learnMore.addEventListener("click", () => eventDetails(e));

    eventsHere.append(eventCard);
});



// Function to populate dialog with event details
function eventDetails(event) {
    const eventName = document.querySelector("dialog h2");
    eventName.innerHTML = event.name;
    console.log(eventName);

    detailList.innerHTML = "";
    event.details.forEach((det) => {
        const li = document.createElement("li");
        li.textContent = det;
        detailList.appendChild(li);
    });

    dialog.showModal();
}


closeDialog.addEventListener("click", () => {
    dialog.close();
});



const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



//images
import { images } from "./images.js";
console.log(images)

images.forEach((img)=> {
    const imageCard = document.createElement("img")
    imageCard.src = img.image
    imageCard.alt = img.name
    imageCard.loading = "lazy"
    imageCard.classList.add("image")


    document.querySelector("#maincontents").append(imageCard)
})