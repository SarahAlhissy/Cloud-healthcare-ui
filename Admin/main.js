const addPatientForm = document.getElementById('addPatientForm');
const patientTableBody = document.getElementById('patientTableBody');
const errorMessage = document.getElementById('errorMessage');

let patients = [];
let patientIdCounter = 1;

addPatientForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('patientName').value.trim();
    const username = document.getElementById('patientUsername').value.trim();
    const password = document.getElementById('patientPassword').value.trim();

    const isDuplicate = patients.some(patient => patient.username === username);

    if (isDuplicate) {
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';

    const newPatient = {
        id: patientIdCounter++,
        name: name,
        username: username,
        password: password
    };
    patients.push(newPatient);

    const row = document.createElement('tr');
    row.innerHTML = `
                <td>${newPatient.id}</td>
                <td>${newPatient.name}</td>
                <td>${newPatient.username}</td>
            `;
    patientTableBody.appendChild(row);

    addPatientForm.reset();
});