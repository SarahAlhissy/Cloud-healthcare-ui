// JavaScript for Login Page
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form[action='/login']");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            console.log("Login submitted with:", { email, password });

            // Example: Redirect after successful login (adjust as needed)
            alert("Login successful!");
            window.location.href = "dashboard.html";
        });
    }

    // JavaScript for Patient Registration Page
    const patientForm = document.querySelector("form[action='/register-patient']");
    if (patientForm) {
        patientForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const patientName = document.getElementById("name").value;
            const patientEmail = document.getElementById("email").value;
            const patientPassword = document.getElementById("password").value;
            console.log("Patient Registration submitted with:", {
                name: patientName,
                email: patientEmail,
                password: patientPassword,
            });

            // Example: Redirect after successful registration (adjust as needed)
            alert("Patient registration successful!");
            window.location.href = "login.html";
        });
    }

    // JavaScript for Doctor Registration Page
    const doctorForm = document.querySelector("form[action='/register-doctor']");
    if (doctorForm) {
        doctorForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const doctorName = document.getElementById("name").value;
            const doctorEmail = document.getElementById("email").value;
            const doctorPassword = document.getElementById("password").value;
            const specialization = document.getElementById("specialization").value;
            console.log("Doctor Registration submitted with:", {
                name: doctorName,
                email: doctorEmail,
                password: doctorPassword,
                specialization: specialization,
            });

            // Example: Redirect after successful registration (adjust as needed)
            alert("Doctor registration successful!");
            window.location.href = "login.html";
        });
    }
});
