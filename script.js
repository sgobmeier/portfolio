const timeline = [
    {
        start: 2015,
        end:  2019,
        title: 'Mechatronics Technician Apprenticeship',
        location: 'Boewe Elektrik GmbH, Kraftsdorf Germany',
        description: ''
    },
    {
        start: 2019,
        end:  2021,
        title: 'Mechatronics Technician',
        location: 'Boewe Elektrik GmbH, Kraftsdorf Germany',
        description: ''
    },
    {
        start: 2021,
        end:  2022,
        title: 'Maintenance Technician',
        location: 'Tesla Gigafactory Berlin-Brandenburg',
        description: ''
    },
    {
        start: 2022,
        end:  2023,
        title: 'Transportation Project Coordinator',
        location: 'Tesla Gigafactory Berlin-Brandenburg',
        description: ''
    },
    {
        start: 2023,
        end:  2024,
        title: 'Transportation Project Manager',
        location: 'Tesla Gigafactory Berlin-Brandenburg',
        description: ''
    },
    {
        start: 2024,
        end:  2025,
        title: 'Transportation Lead',
        location: 'Tesla Gigafactory Berlin-Brandenburg',
        description: ''
    },
];

const plotTimeline = timeline => {
    const parentContainer = document.getElementById('timelineText');
    
    timeline.forEach(position => {
        let newPosition = document.createElement('div');
        newPosition.innerHTML =
        `<h3 class='accent'>${position.title}</h3>
        <p>at ${position.location}</p>
        <p>${position.start} - ${position.end}</p>
        </div>`;
        parentContainer.appendChild(newPosition);
        console.log(newPosition);
    });
}

plotTimeline(timeline);