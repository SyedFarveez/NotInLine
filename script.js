// Sample doctor data (you'd fetch this from a backend API)
const doctors = [{
        name: 'Dr. Daniel Vettori',
        rating: 4.8
    },
    {
        name: 'Dr. Sourav Ganguly',
        rating: 4.9
    },
    {
        name: 'Dr. Adam Gilchrist',
        rating: 4.5
    },
    // Add more doctors here
];

const doctorCardsContainer = document.querySelector('.doctor-cards');

function createDoctorCard(doctor) {
    const card = document.createElement('div');
    card.classList.add('doctor-card');
    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${doctor.name}</h5>
                <p class="card-text">Rating: ${doctor.rating}</p>
                <button class="btn btn-primary btn-book" data-booked="false">Book Appointment</button>
            </div>
        </div>
    `;
    return card;
}


function populateDoctorCards() {
    doctors.forEach((doctor) => {
        const card = createDoctorCard(doctor);
        doctorCardsContainer.appendChild(card);
    });
}

// Initialize the page with doctor listings
populateDoctorCards();

// Function to handle button click and show appointment form
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn-book')) {
        const button = event.target;
        const isBooked = button.getAttribute('data-booked') === 'true';

        if (!isBooked) {
            // Show the appointment form
            showAppointmentForm(button);
        }
    }
});

// Function to show the appointment form
function showAppointmentForm(button) {
    // Hide all doctor cards
    const doctorCards = document.querySelectorAll('.doctor-card');
    doctorCards.forEach((card) => {
        card.style.display = 'none';
    });

    // Show the appointment form
    const appointmentForm = document.getElementById('appointment-form');
    appointmentForm.style.display = 'block';
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    // Handle form submission, e.g., send data to a server (you can implement this part)
    alert('Appointment booked successfully!');

    // Hide the appointment form
    const appointmentForm = document.getElementById('appointment-form');
    appointmentForm.style.display = 'none';

    // Show all doctor cards again
    const doctorCards = document.querySelectorAll('.doctor-card');
    doctorCards.forEach((card) => {
        card.style.display = 'block';
    });
}

// Add a submit event listener to the form
const appointmentForm = document.getElementById('appointment-form');
appointmentForm.addEventListener('submit', handleFormSubmission);
