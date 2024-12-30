const form = document.getElementById('appointmentForm');
const confirmationMessage = document.getElementById('confirmationMessage');
const errorMessage = document.getElementById('errorMessage');

let bookedAppointments = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const appointmentKey = `${date} ${time}`; 

    if (bookedAppointments.includes(appointmentKey)) {
        errorMessage.innerHTML = `Sorry, the selected time slot on ${date} at ${time} is not available. Please choose another time.`;
        confirmationMessage.innerHTML = ''; 
    } else {
        bookedAppointments.push(appointmentKey);
        confirmationMessage.innerHTML = `Thank you,
         ${name}! Your appointment on ${date} at ${time} has been booked. We'll contact you at ${email}.`;
        errorMessage.innerHTML = ''; 
    }
});