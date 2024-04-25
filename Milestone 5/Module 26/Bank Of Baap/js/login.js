//^ Step 01: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function() {
    //^ Step 02: get the email address inside the email input
    //? always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //^ Step 03: get the password
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    //! DANGER: Do not Verify email password on the client side
    //^ Step 04: Verify email password
    if(email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert("invalid user");
    }

});