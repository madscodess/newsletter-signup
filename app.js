


let subscribe = document.getElementById('submit-form');
let success = document.getElementById('success');
let newsletter = document.getElementById('container-sign-up');
let dismiss = document.getElementById("dismiss-button");

//when subscribe button clicked, display thank you message
subscribe.addEventListener("submit" , function(e) {
    success.style.visibility = "visible";
    success.style.display = "block";
    newsletter.style.visibility = "hidden";
    newsletter.style.display = "none";
    e.preventDefault();
});

//when dismiss button clicked, reload / display home page
dismiss.addEventListener("click", function(e){
    console.log("dismiss");
    success.style.visibility = "hidden";
    success.style.display = "none";
    newsletter.style.visibility = "visible";
    newsletter.style.display = "flex";
    e.preventDefault();
})