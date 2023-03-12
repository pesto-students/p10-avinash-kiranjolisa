const tracksContent = [
    {
        name: 'Dwell', 
        album: 'Heaven',
        duration: '2:47',
    },
    {
        name: 'Dwell', 
        album: 'Heaven',
        duration: '2:47',
    },
    {
        name: 'Dwell', 
        album: 'Heaven',
        duration: '2:47',
    },
    {
        name: 'Dwell', 
        album: 'Heaven',
        duration: '2:47',
    }, 
    {
        name: 'Dwell', 
        album: 'Heaven',
        duration: '2:47',
    }
]

tracksContent.forEach((track, i) => {
    document.getElementById('next-tracks-list').innerHTML += `
    <li>
        <p>${i+1}. ${track.name}</p>
        <p>${track.album}</p>
        <p>${track.duration}</p>
        <a href='#'>CATTY CLOUD SYNC</a>
    </li>`;
})