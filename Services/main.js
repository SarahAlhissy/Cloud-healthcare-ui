const servicesContainer = document.getElementById('servicesContainer');
const loadMoreButton = document.getElementById('loadMore');

const additionalServices = [
    {
        img: "../images//Dental Care.jpg",
        title: 'Dental Care',
        description: ' Services for the diagnosis and treatment of dental conditions.'
    },
    {
        img: '../images//Diagnostic and Laboratory.jpg',
        title: 'Diagnostics',
        description: 'Advanced imaging and lab tests for accurate diagnosis'
    },
    {
        img: '../images//Family Medicine.jpg',
        title: 'Family Medicine',
        description: 'Specialized medical care for patients with complex medical needs.'
    },
    {
        img: '../images//Physical Therapy.jpg',
        title: 'Physical Therapy',
        description: 'Rehabilitation and therapy for recovery from injuries'
    }
];

loadMoreButton.addEventListener('click', () => {
    additionalServices.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('service-card');
        card.innerHTML = `
                    <img src="${service.img}" alt="${service.title}">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                `;
        servicesContainer.appendChild(card);
    });
    loadMoreButton.style.display = 'none'; 
});