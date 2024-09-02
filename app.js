function validation() {
    let name = document.getElementById("text").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("tel").value.trim();
    let dob = document.getElementById("date").value.trim();
    let website = document.getElementById("url").value.trim();
    let favoriteNumber = document.getElementById("number").value.trim();
    let experienceLevel = document.getElementById("range").value;
    let favoriteColor = document.getElementById("color").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let interests = document.querySelectorAll('input[name="interests"]:checked');
    let country = document.getElementById("select").value;
    let comments = document.getElementById("textarea").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (dob === "") {
        alert("Please select your date of birth.");
        return false;
    }

    if (website !== "" && !isValidURL(website)) {
        alert("Please enter a valid website URL.");
        return false;
    }

    if (favoriteNumber === "") {
        alert("Please enter your favorite number.");
        return false;
    }

    if (experienceLevel < 1 || experienceLevel > 10) {
        alert("Experience level must be between 1 and 10.");
        return false;
    }

    if (favoriteColor === "") {
        alert("Please select your favorite color.");
        return false;
    }

    if (gender === null) {
        alert("Please select your gender.");
        return false;
    }

    if (interests.length === 0) {
        alert("Please select at least one interest.");
        return false;
    }

    if (country === "") {
        alert("Please select your country.");
        return false;
    }

    if (comments === "") {
        alert("Please provide additional comments.");
        return false;
    }

    alert("Registration successful!");
    return true; // Allow form submission if all validations pass
}

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}
