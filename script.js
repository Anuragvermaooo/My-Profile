document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');

    loginBtn.addEventListener('click', function() {
        loginFormContainer.style.display = 'block';
    });

    loginSubmitBtn.addEventListener('click', function() {
        loginFormContainer.style.display = 'none';
    });
});
// phone Number
document.addEventListener('DOMContentLoaded', function() {
    var phoneIcon = document.querySelector('.socile-icone .social-icon');

    phoneIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default action of following the link
        
        var confirmCall = confirm("Do you want to call this number?");
        if (confirmCall) {
            var phoneNumber = phoneIcon.getAttribute('href').replace('tel:', '');
            window.location.href = 'tel:' + phoneNumber;
        }
    });
});


