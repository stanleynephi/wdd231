const url = "https://api.openweathermap.org/data/2.5/weather?lat=5.55&lon=0.19&appid=b2f21d334d4a4feb8a2dffa3560b3b92&units=metric";



//function for url
async function getData(){
    try{
        const response = await fetch(url)
        if(response.ok){
            const data  = await response.json()
            displayResults(data)
            sunrise_sunset(data)
          
        }
        else{
            throw Error(await response.text())
        }
    }
    catch(error){
        console.log(error)
    }
}

getData()



function displayResults(data){
    const weather = document.querySelector("figure img")
    const iconsSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    weather.setAttribute("src",iconsSrc)
    weather.setAttribute("width",100)

    //temperature details or info
    const details = document.querySelector(".tempdetails ul")
    const temp_max = document.createElement("li")
    const temp_low = document.createElement("li")
    const description = document.createElement("li")
    const humidity = document.createElement("li")



    description.textContent = `Description${data.weather[0].description}`
    humidity.textContent = `Humidity${data.main.humidity}%`
    temp_max.textContent = `Max Temp${data.main.temp_max}`
    temp_low.textContent=`Low Temp${data.main.temp_min}`


    //append info to details   
    details.append(
        temp_low,
        temp_max,
        humidity,
        description
    )
}



function sunrise_sunset(data){

    const details = document.querySelector(".tempdetails ul")
    
    const $sunrise = `${data.sys.sunrise}`
    const time = new Date($sunrise * 1000)


    const sunrise = document.createElement("li")
    sunrise.textContent = `Sunrise${time.toLocaleTimeString()}`
    console.log(sunrise)


    const $sunset = `${data.sys.sunset}`
    const time2 = new Date($sunset * 1000)

    const sunset = document.createElement("li")
    sunset.textContent = `Sunset ${time2.toLocaleTimeString()}`
    console.log(sunset)

    details.append(
        sunrise,
        sunset
    )
}



//weather forecast for the api
const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=5.55&lon=0.19&appid=b2f21d334d4a4feb8a2dffa3560b3b92&units=metric"

//step 1 fetch the api data and then pass it into a json file
async function weatherforecast(){
    try{
        const response = await fetch (forecastAPI)
       if(response.ok){
            const data = await response.json()
            console.log(data)
            filterDate(data)
       }
    }
    catch(error){
        console.log(error)
    }
}

weatherforecast()


//function to filter out the date for the weather forecast.
function filterDate(data){
    const forecast = data.list.filter(item => item.dt_txt.includes("03:00:00"))
    console.log(forecast)
    populateResult(forecast)
    
}

//function to populate result to the main screen
function populateResult(datas){

    //create an html element and append the resuts
    const forecasts = document.querySelector(".weatherforecast")
    datas.forEach((data, index) => {
        const day = document.createElement("li")
        const forecast = document.createElement("li")



            const dateString = data.dt_txt.split(' ')[0];
            const dateObj = new Date(dateString);         
        

            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayOfWeek = daysOfWeek[dateObj.getDay()];


            day.innerHTML= dayOfWeek+ ":" + "  " + "<b>" + data.main.temp + " " + "°C"+  "</b>" 



            forecasts.append(day)
        

    })
}







const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});




//last modified and copy right
//work on last modified
const companyName = "Timbuktu Chamber of Commerce"
const dev = "Nuley Stanley Nephi"


const option = {
    day: "numeric",
    month : "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
}


const copyRight = () => {
    const date = new Date();
    const year = date.getFullYear();
    const copyRight = document.querySelector('#copy-right');
    copyRight.textContent = `${year} ${companyName}.`

    //last modified
    const lastmodified = document.querySelector("#lastmodified")
    const lastModifiedDate = new Date(date);
    const lastModified = lastModifiedDate.toLocaleDateString("en-US", option);
    lastmodified.textContent = `Last modified: ${lastModified}`

}

copyRight()



//function set last view using last storage
function setLastVisit(){
    localStorage.setItem("lastvisit",Date.now())
}

setLastVisit()



let visitsmade = Number(window.localStorage.getItem("Visitsmade-ls")) || 0;
visitsmade++;
localStorage.setItem("Visitsmade-ls",visitsmade)

    

function displayDaysSinceLastVisit() {

const lastVisit = localStorage.getItem('lastVisit');
const currentTime = Date.now();
const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds



if (visitsmade === 1) {
    localStorage.setItem('lastVisit', currentTime);
    return "Welcome! This is your first time on the website.";
} else {
    // Calculate the time difference between the current visit and the last visit
    const lastVisited = parseInt(lastVisit);
    const timeDifference = currentTime - lastVisited;
    
    if (timeDifference < oneDayInMilliseconds) {
        let visits = parseInt(localStorage.getItem('Visits')) || 0;
        if (visits === 1) {
            visits++;
            localStorage.setItem('Visit', visits);
        }
        return "Back So Soon"
    } else {
        return "Welcome back! It's been more than a day since your last visit.";
    }
}

}


displayDaysSinceLastVisit()
const visit = document.querySelector(".visited").innerHTML = displayDaysSinceLastVisit();
