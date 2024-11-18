    // Function to get a cookie value by name
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Function to set a cookie with a specified name, value, and expiration in days
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Check if the user has already accepted the terms
    window.onload = function() {
        const consentGiven = getCookie("consentGiven");
        if (!consentGiven) {
            document.getElementById("consentModal").style.display = "flex";
        }
    };

    // Add event listener to OK button
    document.getElementById("okButton").onclick = function() {
        setCookie("consentGiven", "true", 365); // Set cookie to expire in 365 days
        document.getElementById("consentModal").style.display = "none";
    };