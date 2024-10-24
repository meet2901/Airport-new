function loadFlightData() {
    const flightData = JSON.parse(localStorage.getItem('flightData')) || [];
    const tableBody = document.getElementById('flightBody');
    tableBody.innerHTML = '';
    flightData.forEach(flight => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${flight.flight_number}</td>
            <td>${flight.airline_name}</td>
            <td>${flight.departure_airport}</td>
            <td>${flight.arrival_airport}</td>
            <td>${formatDate(flight.departure_time)}</td>
            <td>${formatDate(flight.arrival_time)}</td> 
            <td>${flight.status}</td>
            <td>${flight.gate}</td>
            <td>${flight.terminal}</td>
        `;
        tableBody.appendChild(row);
    });
}

function formatDate(dateString) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

window.onload = loadFlightData;
