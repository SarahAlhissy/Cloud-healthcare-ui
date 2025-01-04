const registeredPatients = [
    { id: "1", name: "Shams", username: "shams1", password: "111" },
    { id: "2", name: "Sara", username: "sara2", password: "222" },
  
];

const verificationForm = document.getElementById("verificationForm");
const verificationMessage = document.getElementById("verificationMessage");
const errorMessage = document.getElementById("errorMessage");
const patientsTable = document.getElementById("patientsTable").getElementsByTagName('tbody')[0];

function displayPatients() {
    registeredPatients.forEach(patient => {
        const row = patientsTable.insertRow();
        row.insertCell(0).textContent = patient.id;
        row.insertCell(1).textContent = patient.name;
        row.insertCell(2).textContent = patient.username;
    });
}

verificationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const patient = registeredPatients.find(patient => patient.username === username && patient.password === password);

    if (patient) {
        verificationMessage.textContent = `Patient ${patient.name} is successfully verified.`;
        errorMessage.textContent = ''; 
    } else {
        errorMessage.textContent = 'Error: Invalid username or password.';
        verificationMessage.textContent = ''; 
    }
});

displayPatients();