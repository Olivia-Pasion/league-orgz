import { getUser, signOut } from './services/auth-service.js';
import { protectPage, findById } from './utils.js';
import createUser from './components/User.js';
import { getTeamsWithPlayers, addPlayer, removePlayer } from './services/teams-service.js';

// State
let user = null;
let teams = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    display();
}

async function handleSignOut() {
    signOut();
}

// Main Page Handlers
async function handleAddPlayer(playerName, teamId) {
    const player = await addPlayer(playerName, teamId);

    const team = findById(teams, teamId);
    team.players.push(player);

    display();
}

async function handleRemovePlayer(player) {
    await removePlayer(player.id);

    const team = findById(teams, player.teamId);

    const index = team.players.indexOf(player);

    if (index !== -1) {
        team.players.splice(index, 1);
    }

    display();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);



function display() {
    User({ user });

}

handlePageLoad();
