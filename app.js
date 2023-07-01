


let subscribe = document.getElementById('submit-form');
let success = document.getElementById('success');
let newsletter = document.getElementById('container-sign-up');
let dismiss = document.getElementById("dismiss-button");
let emailField = document.getElementById('email-input');
const input = document.querySelector("input");

// //for email input to be added to text
// const emailInput = document.getElementById("email-input").value;
// console.log(emailInput);
// console.log(emailInput);

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      submitEmail();
    } else {
        console.log("ERROR");
      //showError(input, 'Enail is not valid');
    }
  }

// input.addEventListener("keyup", function (){
//     let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(input.value.match(pattern)){
//         console.log("working hun");
//         return submitEmail();
//     }
//     if(input.value === ""){
//      return console.log("input is empty");
//     }
//     else if(input.value !== (pattern)){
//         return console.log("not valid email");
//     }
//   })
  
//when subscribe button clicked, display thank you message
function submitEmail(){
subscribe.addEventListener("submit" , function(e) {
    check
    success.style.visibility = "visible";
    success.style.display = "block";
    newsletter.style.visibility = "hidden";
    newsletter.style.display = "none";
    e.preventDefault();

});
}

//when dismiss button clicked, reload / display home page
dismiss.addEventListener("click", function(e){
    console.log("dismiss");
    success.style.visibility = "hidden";
    success.style.display = "none";
    newsletter.style.visibility = "visible";
    newsletter.style.display = "flex";
    e.preventDefault();
})

