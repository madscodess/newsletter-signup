# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

[Solution Link](https://madscodess.github.io/newsletter-signup/)

## The Challenge

The challenge was to build out a newsletter form and get it looking as close to the design provided as possible.

Users are able to:
- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size (future improvements to this below)
- See hover and focus states for all interactive elements on the page### Screenshot
## My process
Used the <input> element to create email field.

Implemented Form Validation:
- Added a function using regex to validate email address format.
- Attached an event listener to the form's submit button.
- Validated the email input field when form was submitted to ensure the input was not empty and the email was correctly formatted.
- Displayed error message if conditions not met.

If email was valid: redirected the user to a thank you page which included:
- The email address they inputted
- "Dismiss" button that takes the user back to the sign-up page.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
- Form validation and regular expression
- Referencing a user input so that it can be used on another page

Some javascript i'm proud of:

```js
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
```

### Continued development

This project has made me look into form validation and I would like to learn & test form validation with a database using emails, passwords etc.

### Future development
- Add tablet mode

## Author
- Instagram - [@madscodes](https://www.instagram.com/madscodes)
