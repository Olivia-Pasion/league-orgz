
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
    
}