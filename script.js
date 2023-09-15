
const events = [
    { name: "Seminar on Healthcare", date: "2023-09-20" , venue: "College Media Seminar Hall"},
    { name: "Film Screening: Documentary Night", date: "2023-09-25" ,venue: "CII Building, Salt Lake" },
    { name: "Extra Event: Art Exhibition", date: "2023-10-05" ,venue: "CII Building, Salt Lake"},
    { name: "Extra Event: Artificial Intelligence", date: "2023-10-10",venue: "College IoT Lab" },
    { name: "Seminar on Machine Learning", date: "2023-09-20",venue: "College Media Seminar Hall" },
    { name: "Film Screening: Openheimer", date: "2023-09-25",venue: "CII Building, Salt Lake" },
    { name: "Extra Event: Seminar on IoT", date: "2023-10-05" ,venue:  "College IoT Lab"}
    ];


function createEventCard(event) {
    const card = document.createElement('div');
    card.classList.add('event-card');
    card.innerHTML = `
        <h3>${event.name}</h3>
        <p><b>Date: ${event.date}</p></b>
      <b><p>Venue:</b> <i>${event.venue}</i></p>
    `;
    return card;
}

function displayEventCards() {
    const eventCards = document.getElementById('eventCards');
    eventCards.innerHTML = '';
    events.forEach(event => {
        const card = createEventCard(event);
        eventCards.appendChild(card);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;

    if (!eventName || !eventDate) {
        alert('Please fill in all fields.');
        return;
    }

    const newEvent = { name: eventName, date: eventDate };

    events.push(newEvent);

    document.getElementById('eventForm').reset();

    displayEventCards();
}

document.getElementById('eventForm').addEventListener('submit', handleFormSubmit);

function filterEvents(searchTerm) {
    return events.filter(event => {
        const eventName = event.name.toLowerCase();
        return eventName.includes(searchTerm.toLowerCase());
    });
}

function updateDisplayedEvents(searchTerm = "") {
    const eventCards = document.getElementById('eventCards');
    eventCards.innerHTML = '';

    const filteredEvents = filterEvents(searchTerm);

    if (filteredEvents.length === 0) {
        eventCards.innerHTML = '<p>No matching events found.</p>';
    } else {
        filteredEvents.forEach(event => {
            const card = createEventCard(event);
            eventCards.appendChild(card);
        });
    }
}

document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value;
    updateDisplayedEvents(searchTerm);
});

window.onload = () => {
    updateDisplayedEvents();
    displayEventCards(); 
};

function registerForEvent(eventName) {
    alert(`Register for event: ${eventName} ?`);
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.classList.add('event-card');
    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <b><p>Venue:</b> <i>${event.venue}</i></p>
       <a href="register.html"> <button class="register-button" >Register</button></a>
    `;
    
    const registerButton = card.querySelector('.register-button');
    registerButton.addEventListener('click', () => {
        registerForEvent(event.name);
    });

    return card;
}