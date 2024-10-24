
let flightData = JSON.parse(localStorage.getItem('flightData')) || [];

function insertFlight() {
    const flight = {
        flight_number: document.getElementById('flight_number').value,
        airline_name: document.getElementById('airline_name').value,
        departure_airport: document.getElementById('departure_airport').value,
        arrival_airport: document.getElementById('arrival_airport').value,
        departure_time: new Date(document.getElementById('departure_time').value).toISOString(),
        arrival_time: new Date(document.getElementById('arrival_time').value).toISOString(),
        status: document.getElementById('status').value,
        gate: document.getElementById('gate').value,
        terminal: document.getElementById('terminal').value

    };
    flightData.push(flight);
    localStorage.setItem('flightData', JSON.stringify(flightData));
    clearForms();
   
}


function updateFlight() {
    const flightNumber = document.getElementById('update_flight_number').value;
    const flight = flightData.find(f => f.flight_number === flightNumber);
    if (flight) {
        flight.airline_name = document.getElementById('update_airline_name').value || flight.airline_name;
        flight.departure_airport = document.getElementById('update_departure_airport').value || flight.departure_airport;
        flight.arrival_airport = document.getElementById('update_arrival_airport').value || flight.arrival_airport;
        flight.departure_time = document.getElementById('update_departure_time').value ? new Date(document.getElementById('update_departure_time').value).toISOString() : flight.departure_time;
        flight.arrival_time = document.getElementById('update_arrival_time').value ? new Date(document.getElementById('update_arrival_time').value).toISOString() : flight.arrival_time;
        flight.status = document.getElementById('update_status').value || flight.status;
        flight.gate = document.getElementById('update_gate').value || flight.gate;
        flight.terminal = document.getElementById('update_terminal').value || flight.terminal;
        localStorage.setItem('flightData', JSON.stringify(flightData));
        clearForms();
    } else {
        alert('Flight not found');
    }
}

function deleteFlight() {
    const flightNumber = document.getElementById('delete_flight_number').value.trim();
    console.log('Flight number to delete:', flightNumber);

    // Iterate over flightData to check each flight number
    flightData.forEach((flight, idx) => {
        console.log(`Checking flight at index ${idx}:`, flight.flight_number);
    });

    const index = flightData.findIndex(f => f.flight_number.trim() === flightNumber);
    
    if (index !== -1) {
        console.log('Match found at index:', index);
        flightData.splice(index, 1);
        localStorage.setItem('flightData', JSON.stringify(flightData));
        clearForms();
        alert(`Flight ${flightNumber} deleted successfully.`);
    } else {
        alert('Flight not found');
    }
}




function clearForms() {
    document.getElementById('insertForm').reset();
    document.getElementById('updateForm').reset();
    document.getElementById('deleteForm').reset();
}
    

//-----------------------------------------------------------------------------------------------
