
export default function createTeams(
    list, 
    { handleAddPlayer, handleRemovePlayer }
) {
    
    return ({ teams }) => {
        list.innerHTML = '';
        
        for (const team of teams) {
            const item = Team({
                team,
                handleAddPlayer,
                handleRemovePlayer,
            });
            list.append(item);
        }
    };
}

function Team({ team, handleAddPlayer, handleRemovePlayer }) {
    const li = document.createElement('li');
    li.classList.add('team');

    const h2 = document.createElement('h2');
    h2.textContent = team.name;

    const ul = document.createElement('ul');
    ul.classList.add('players');

    for (const player of team.players) {
        const item = Player({ player, handleRemovePlayer });
        ul.append(item);
    }

    const addForm = AddForm({ team, handleAddPlayer });

    li.append(h2, ul, addForm);

    return li;
}

function Player({ player, handleRemovePlayer }) {
    const li = document.createElement('li');
    li.classList.add('player');

    const h3 = document.createElement('h3');
    h3.textContent = player.name;

    const button = document.createElement('button');
    button.classList.add('delete');
    button.textContent = 'X';

    button.addEventListener('click', () =>{
        handleRemovePlayer(player);
    });

    li.append(h3, button);

    return li;
}

function AddForm({ team, handleAddPlayer }) {
    const form = document.createElement('form');
    form.classList.add('add-player');

    const input = document.createElement('input');
    input.required = true;
    input.title = `Add new player to ${team.name}`;
    input.placeholder = 'player name';

    const button = document.createElement('button');
    button.textContent = '+';

    form.append(input, button);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await handleAddPlayer(input.value, team.id);
        form.reset();

    });

    return form;
}