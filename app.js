let form = document.getElementById('submit-form');
let subscribeButton = document.getElementById('submit-button');
let success = document.getElementById('success');
let newsletter = document.getElementById('container-sign-up');
let dismiss = document.getElementById("dismiss-button");
const emailField = document.getElementById("emailField");
let errorMessage = document.getElementById("error");

//validate email using regular expression
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

//when button clicked, display thank you message if email is validated        
//event listener for the button 
subscribeButton.addEventListener("click" , function(e) {
    //takes user input
    const email = emailField.value;
if (validateEmail(email)) {
    success.style.visibility = "visible";
    success.style.display = "block";
    newsletter.style.visibility = "hidden";
    newsletter.style.display = "none";
    e.preventDefault();
    //event listener for the form input element
form.addEventListener("click" , function(e) {
    document.getElementById("email-update").innerHTML = this.email.value;
e.preventDefault();
});
}
//else give user error message & make input box red, show valid email required message
else {
    document.getElementById("error").innerHTML = "Valid Email Required";
    errorMessage.style.visibility = "visible";
    errorMessage.style.display = "flex";
    emailField.style.color = "hsl(4, 100%, 67%)";
    emailField.style.backgroundColor = "rgb(255 98 87 / 48%)";
}
});

//when dismiss button clicked, reload home page & takes out any email inputs
dismiss.addEventListener("click", function(e){
    window.location.href=window.location.href;
    e.preventDefault();
});