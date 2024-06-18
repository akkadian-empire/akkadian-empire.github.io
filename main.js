let currentEventIndex = 0;
const events = document.querySelectorAll('.timeline-event');
const totalEvents = events.length;

function showEvent(eventIndex) {
    events.forEach(event => event.classList.remove('active'));
    events[eventIndex].classList.add('active');
    currentEventIndex = eventIndex;
    updateNavigationButtons();
}

function nextEvent() {
    if (currentEventIndex < totalEvents - 1) {
        currentEventIndex++;
        showEvent(currentEventIndex);
    }
}

function prevEvent() {
    if (currentEventIndex > 0) {
        currentEventIndex--;
        showEvent(currentEventIndex);
    }
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    prevButton.disabled = (currentEventIndex === 0);
    nextButton.disabled = (currentEventIndex === totalEvents - 1);
    
    if (currentEventIndex === 0) {
        nextButton.disabled = false;
    } else if (currentEventIndex === totalEvents - 1) {
        prevButton.disabled = false; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showEvent(0); 
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextEvent();
    } else if (event.key === 'ArrowLeft') {
        prevEvent();
    }
});
