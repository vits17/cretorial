document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const thankYouMessage = document.querySelector(".thank-you");


    function displayElement(element) {
        element.style.display = "block";
    }


    function hideElement(element) {
        element.style.display = "none";
    }


    function handleFormSubmit(event) {
        event.preventDefault();


        const nameInput = form.querySelector("#name");
        const emailInput = form.querySelector("#email");
        const messageTextarea = form.querySelector("#message");


        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            nameInput.focus();
            return;
        }

        if (!isValidEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (messageTextarea.value.trim() === "") {
            alert("Please enter a message.");
            messageTextarea.focus();
            return;
        }


        setTimeout(function () {

            form.reset();


            displayElement(thankYouMessage);


            setTimeout(function () {
                hideElement(thankYouMessage);
            }, 5000);
        }, 1000);
    }


    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    form.addEventListener("submit", handleFormSubmit);
});
