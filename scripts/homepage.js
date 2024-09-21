const option2 = {
    day: "numeric",
    month: "long",
    year: "numeric",
}

const lastModified = document.getElementById("lastmodified")

lastModified.innerHTML = new Date(document.lastModified
).toLocaleDateString("en-US", option2)


document.querySelector(".copyright_year span").innerHTML = new Date().getFullYear()


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





const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    }
]





function displayCourses() {
    const container = document.querySelector(".certificates_courses");
    container.innerHTML = ''; // Clear existing content

    courses.forEach(course => {
        // Create an anchor and button
        const anchor = document.createElement('a');
        const button = document.createElement('button');

        // Populate the anchor with the course title
        anchor.innerHTML = course.title;
        anchor.href = "#"; // Set an href if you want it to link somewher

        // Append the anchor to the button
        button.appendChild(anchor);

        // Append the button to the container
        container.appendChild(button);
    });
}

// Call the function to display courses
displayCourses();



//create an arrow function for cse
const cse = document.querySelector(".certificate_buttons_cse")
const all = document.querySelector(".certificate_buttons_all")
const wdd = document.querySelector(".certificate_buttons_wdd")




cse.addEventListener("click", ()=>{
    const container = document.querySelector(".certificates_courses");
    container.innerHTML = '';

    // Filter CSE courses
    const cseCourses = courses.filter(course => course.subject === "CSE");

    // Check if there are any CSE courses
    if (cseCourses.length === 0) {
        container.innerHTML = '<p>No CSE courses available.</p>';
        return;
    }

    // Create buttons for each CSE course
    cseCourses.forEach(course => {
        const anchor = document.createElement('a');
        const button = document.createElement('button');

        // Populate the anchor with the course title
        anchor.innerHTML = course.title;
        anchor.href = "#";

        // Append the anchor to the button
        button.appendChild(anchor);

        // Append the button to the container
        container.appendChild(button);

    });
} )


wdd.addEventListener("click", ()=>{
    const container = document.querySelector(".certificates_courses");
    container.innerHTML = '';

    // Filter CSE courses
    const wddCourses = courses.filter(course => course.subject === "WDD");

    // Check if there are any CSE courses
    if (wddCourses.length === 0) {
        container.innerHTML = '<p>No CSE courses available.</p>';
        return;
    }

    // Create buttons for each CSE course
    wddCourses.forEach(course => {
        const anchor = document.createElement('a');
        const button = document.createElement('button');

        // Populate the anchor with the course title
        anchor.innerHTML = course.title;
        anchor.href = "#";

        // Append the anchor to the button
        button.appendChild(anchor);

        // Append the button to the container
        container.appendChild(button);
    });
} )



all.addEventListener("click",displayCourses)






