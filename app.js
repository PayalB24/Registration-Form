function validation() {
    let name = document.getElementById("text").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("tel").value;
    // let dob = document.getElementById("date").value.trim();
    // let website = document.getElementById("url").value.trim();
    // let favoriteNumber = document.getElementById("number").value.trim();
    // let experienceLevel = document.getElementById("range").value;
    // let favoriteColor = document.getElementById("color").value;
    // let gender = document.querySelector('input[name="gender"]:checked');
    // let interests = document.querySelectorAll('input[name="interests"]:checked');
    // let country = document.getElementById("select").value;
    // let comments = document.getElementById("textarea").value.trim();

    let ptrn = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    // if(name =="" || email ==""|| password =="" || phone ==""){
    //     alert('All fields are required');
    //     return false;
    // }
    if(!isNaN(name)){
        alert('Enter name, not number')
    }
    if(!email.includes('@') || !email.endsWith('.com')){
        alert('@  required and should dend with .com')
    }
    
   if(!ptrn.test(password)){
        alert('Password should be the combination of alphabets, numbers and spacial characters')
    }
    if(phone.length != 10){
        alert('10 digits of phone number')
    }
    else{
        true;
    }

}
