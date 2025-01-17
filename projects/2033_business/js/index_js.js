document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function setActiveLink() { // Scrollfire, set colour of nav bar item
        let currentSection = "";

        // Determine the current section
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 200; // Adjust for navbar height
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight + 50) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update active class on nav links
        navLinks.forEach((link) => {
            link.classList.remove("active-nav");
            link.classList.add("inactive-nav");
            if (link.getAttribute("href").slice(1) === currentSection) {
                link.classList.add("active-nav");
                link.classList.remove("inactive-nav");
            }
        });

        // Parallax effect
        document.body.style.backgroundPosition = `center ${window.scrollY * -0.25}px`;
    }

    setActiveLink()

    window.addEventListener("scroll", setActiveLink);
});

function checkName(){
    const name = document.getElementById("name");
    if (/^[a-zA-Z]{4,}$/.test(name.value)){
        name.classList.remove("is-invalid")
        name.style.borderColor = "green";
    } else {
        name.classList.add("is-invalid")
        name.style.borderColor = "red";
    }
}

function checkPhone(){
    const phone = document.getElementById("phone");
    if (/^[0-9]{3} [0-9]{3} [0-9]{4}$/.test(phone.value)){
        phone.classList.remove("is-invalid")
        phone.style.borderColor = "green";
    } else {
        phone.classList.add("is-invalid")
        phone.style.borderColor = "red";
    }
}

function checkReason(){
    const reason = document.getElementById("reason");
    const pid = document.getElementById("pid");
    if (reason.value == "prodinf") {
        reason.parentElement.classList.add("col-md-6");
        pid.parentElement.classList.remove("d-none");
    } else {
        reason.parentElement.classList.remove("col-md-6");
        pid.parentElement.classList.add("d-none");
    }
}

function checkPid(){
    const upcs = Array.from(document.querySelectorAll(".upc")).map(el => el.textContent.trim());
    const pid = document.getElementById("pid");
    if (upcs.includes(pid.value)){
        pid.classList.remove("is-invalid")
        pid.style.borderColor = "green";
    } else {
        pid.classList.add("is-invalid")
        pid.style.borderColor = "red";
    }
}

function checkMessage(){
    const message = document.getElementById("message");
    if (message.value.length >= 10 && message.value.length <= 30) {
        message.classList.remove("is-invalid")
        message.style.borderColor = "green";
    } else {
        message.classList.add("is-invalid")
        message.style.borderColor = "red";
    }
}

function updateCharCount(){
    const char = document.getElementById("charCount");
    const message = document.getElementById("message");
    if (message.value.length == 1){
        char.innerHTML = message.value.length + " character";
    } else {
        char.innerHTML = message.value.length + " characters";
    }
}

function resetForm(){
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const reason = document.getElementById("reason");
    const pid = document.getElementById("pid");
    const message = document.getElementById("message");
    const char = document.getElementById("charCount");

    name.style.borderColor = "";
    name.classList.remove("is-invalid")
    phone.style.borderColor = "";
    phone.classList.remove("is-invalid")
    reason.parentElement.classList.remove("col-md-6");
    pid.parentElement.classList.add("d-none");
    pid.style.borderColor = "";
    pid.classList.remove("is-invalid")
    message.style.borderColor = "";
    message.classList.remove("is-invalid")
    char.innerHTML = "0 characters";
}

function setDayMsg(){
    const dayMsg = document.getElementById("dayMsg");
    let date = new Date()
    let dow = date.getDay();
    if (dow == "1"){
        dayMsg.innerHTML = "Welcome to our site this magnificent Monday!";
    } else if (dow == "2"){
        dayMsg.innerHTML = "Welcome to our site this terrific Tuesday!";
    } else if (dow == "3"){
        dayMsg.innerHTML = "Welcome to our site this wonderful Wednesday!";
    } else if (dow == "4"){
        dayMsg.innerHTML = "Welcome to our site this thrilling Thursday!";
    } else if (dow == "5"){
        dayMsg.innerHTML = "Welcome to our site this fantastic Friday!";
    } else if (dow == "6"){
        dayMsg.innerHTML = "Welcome to our site this super Saturday!";
    } else {
        dayMsg.innerHTML = "Welcome to our site this sensational Sunday!";
    }
}
