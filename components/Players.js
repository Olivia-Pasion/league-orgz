
export default function createPlayers(tbody) {
    
    return ({ players }) => {
        tbody.innerHTML = '';

        for (const player of players) {
            const item = Player({ player });
            tbody.append(item);
        }
        
    };
}

function Player({ player }) {
    const tr = document.createElement('tr');
    tr.classList.add('player');
    
    const name = document.createElement('td');
    const p = document.createElement('p');
    p.textContent = player.name;
    name.append(p);

    
    const team = document.createElement('td');
    team.textContent = player.teamId.name;

    tr.append(name, team);

    return tr;
    
}