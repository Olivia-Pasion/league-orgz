import { client } from './client.js';

export async function getTeamsWithPlayers() {
    const response = await client
        .from('teams')
        .select(`
            id,
            name,
            players(
                id,
                teamId: team_id,
                name
            )
        `);
    return response;
}

export async function getTeams() {
    const response = await client
        .from('teams')
        .select(`
            id,
            name
        `);
    
    return response;
}

export async function getPlayers() {
    const response = await client
        .from('players')
        .select(`
            id,
            name,
            created: created_at,
            teamId: team_id (
                id,
                name
            )
        `)
        .order('created_at', { ascending: false });

    return response;
}

export async function addPlayer(playerName, teamId) {
    const response = await client
        .from('players')
        .insert({
            name: playerName,
            team_id: teamId
        })
        .single();
    
    const data = response;

    if (data) {
        data.teamId = data.team_id;
        data.created = data.created_at;
    }

    return data;
}

export async function removePlayer(playerId) {
    const response = await client
        .from('players')
        .delete()
        .eq('id', playerId)
        .single();
    
    return response;
}