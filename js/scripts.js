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
document.addEventListener("DOMContentLoaded", () => {
    const doctorList = [
        { id: 1, name: "Dr. Sarah Moh", specialization: "Cardiologist", image: "../images/doctor-2.png", bio: "Expert in heart diseases." },
        { id: 2, name: "Dr. Shams WH", specialization: "Dermatologist", image: "../images/doctor-4.png", bio: "Specialist in skin treatments." },
        { id: 3, name: "Dr. faten MO", specialization: "Pediatrician", image: "../images/doctor-5.png", bio: "Child health expert." },
        { id: 4, name: "Dr. Amera SH", specialization: "Neurologist", image: "../images/doctor-6.png", bio: "Specialist in brain and nerves." },
        { id: 1, name: "Dr. John Doe", specialization: "dentist", image: "../images/doctor-1.png", bio: "Expert in heart diseases." },
        { id: 2, name: "Dr. Jane Smith", specialization: "Obstetrician", image: "../images/doctor-7.png", bio: "Specialist in skin treatments." },
        { id: 3, name: "Dr. Emily White", specialization: "Orthopedist", image: "../images/doctor-8.png", bio: "Child health expert." },
        { id: 4, name: "Dr. Robert Brown", specialization: "Surgeon", image: "../images/doctor-3.png", bio: "Specialist in brain and nerves." },
    ];

    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const doctorListContainer = document.querySelector(".doctor-list");
    const modal = document.getElementById("doctor-profile-modal");
    const closeModal = document.getElementById("close-modal");


    // عرض الأطباء
    function displayDoctors(doctors) {
        doctorListContainer.innerHTML = ""; // تفريغ القائمة القديمة
        if (doctors.length === 0) {
            doctorListContainer.innerHTML = `<p>No doctors found.</p>`;
            return;
        }
        doctors.forEach((doctor) => {
            const doctorCard = document.createElement("div");
            doctorCard.classList.add("doctor-card");
            doctorCard.innerHTML = `
                <img src="${doctor.image}" alt="${doctor.name}">
                <h2>${doctor.name}</h2>
                <p>${doctor.specialization}</p>
                <button onclick="openProfile(${doctor.id})">Book Appointment</button>
            `;
            doctorListContainer.appendChild(doctorCard);
        });
    }

    // البحث عن الأطباء
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        const filteredDoctors = doctorList.filter(
            (doctor) =>
                doctor.name.toLowerCase().includes(query) ||
                doctor.specialization.toLowerCase().includes(query)
        );

        displayDoctors(filteredDoctors);

        if (filteredDoctors.length === 1) {
            const doctorCard = document.querySelector(".doctor-card");
            if (doctorCard) {
                doctorCard.classList.add("highlight");
                
                doctorListContainer.style.display = "flex";
                doctorListContainer.style.justifyContent = "center";
            }
        } else {
            doctorListContainer.style.display = "grid";
            doctorListContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
            doctorListContainer.style.justifyContent = "start";
        }

        if (filteredDoctors.length === 0) {
            alert("No doctor found with that name. Please try again.");
        }
    });

    window.openProfile = (doctorId) => {
        const doctor = doctorList.find((doc) => doc.id === doctorId);
        if (doctor) {
            window.location.href = `../DoctorProfile/doctorProfile.html?id=${doctorId}`;
        }
    };

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        const filteredDoctors = doctorList.filter(
            (doctor) =>
                doctor.name.toLowerCase().includes(query) ||
                doctor.specialization.toLowerCase().includes(query)
        );
        displayDoctors(filteredDoctors);
    });
    displayDoctors(doctorList);
});
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = urlParams.get("id");

    const doctorList = [
        { id: 1, name: "Dr. Sarah Moh", specialization: "Cardiologist", image: "../images/doctor-2.png", bio: "Expert in heart diseases." },
        { id: 2, name: "Dr. Shams WH", specialization: "Dermatologist", image: "../images/doctor-4.png", bio: "Specialist in skin treatments." },
        { id: 3, name: "Dr. faten MO", specialization: "Pediatrician", image: "../images/doctor-5.png", bio: "Child health expert." },
        { id: 4, name: "Dr. Amera SH", specialization: "Neurologist", image: "../images/doctor-6.png", bio: "Specialist in brain and nerves." },
        { id: 1, name: "Dr. John Doe", specialization: "dentist", image: "../images/doctor-1.png", bio: "Expert in heart diseases." },
        { id: 2, name: "Dr. Jane Smith", specialization: "Obstetrician", image: "../images/doctor-7.png", bio: "Specialist in skin treatments." },
        { id: 3, name: "Dr. Emily White", specialization: "Orthopedist", image: "../images/doctor-8.png", bio: "Child health expert." },
        { id: 4, name: "Dr. Robert Brown", specialization: "Surgeon", image: "../images/doctor-3.png", bio: "Specialist in brain and nerves." },
    ];

    const doctor = doctorList.find((doc) => doc.id == doctorId);

    if (doctor) {
        document.getElementById("doctor-image").src = doctor.image;
        document.getElementById("doctor-name").textContent = doctor.name;
        document.getElementById("doctor-specialization").textContent = doctor.specialization;
        document.getElementById("doctor-bio").textContent = doctor.bio;

        const appointmentList = document.getElementById("appointment-list");
        doctor.appointments.forEach((appointment) => {
            const li = document.createElement("li");
            li.textContent = appointment;
            appointmentList.appendChild(li);
        });

        document.getElementById("book-appointment-btn").addEventListener("click", () => {
            alert(`Appointment booked with ${doctor.name} at ${doctor.appointments[0]}`);
        });
    } else {
        document.querySelector(".profile-container").innerHTML = `
            <h1>Doctor Not Found</h1>
            <button onclick="goBack()">Back</button>
        `;
    }
 
});

function goBack() {
    window.history.back();
}
