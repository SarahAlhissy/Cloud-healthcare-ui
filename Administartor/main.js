let registeredPatients = [
];

const addPatientForm = document.getElementById("addPatientForm");
const patientsTable = document.getElementById("patientsTable").getElementsByTagName('tbody')[0];
const errorMessage = document.getElementById("errorMessage");

function displayPatients() {
    patientsTable.innerHTML = '';

    registeredPatients.forEach(patient => {
        const row = patientsTable.insertRow();
        row.insertCell(0).textContent = patient.id;
        row.insertCell(1).textContent = patient.name;
        row.insertCell(2).textContent = patient.username;
    });
}

addPatientForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("patientName").value;
    const username = document.getElementById("patientUsername").value;
    const password = document.getElementById("patientPassword").value;

    const patientExists = registeredPatients.some(patient => patient.username === username);

    if (patientExists) {
        errorMessage.textContent = "Error: This username is already registered. Please use a different username.";
    } else {
        const newPatient = {
            id: `P${registeredPatients.length + 1}`,
            name: name,
            username: username,
            password: password
        };

        registeredPatients.push(newPatient);

        displayPatients();

        addPatientForm.reset();
        errorMessage.textContent = "";
    }
});

displayPatients();