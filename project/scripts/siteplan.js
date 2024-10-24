const span = document.querySelector("#lastmodified")
const date = new Date(document.lastModified)
span.innerHTML = `Last modified: ${date.toLocaleString()}`


const author ={
    "name":"Stanley Nuley Nephi",
    "country": "Ghana",
    "school": "BYUI"
}


document.querySelector("footer p").innerHTML = `${author.name} | ${author.country} | ${author.school}`