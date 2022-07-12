
export default function createAddPlayer(form, { handleAddPlayer }) {
    const select = form.querySelector('select');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        handleAddPlayer(
            formData.get('name'),
            formData.get('teamId')
        );
        form.reset();
        form.blur();
    });
    
    return ({ teams }) => {
        select.innerHTML = '';

        const option = document.createElement('option');
        option.disabled = true;
        option.selected = true;
        option.value = '';
        option.textContent = 'Assign Subdivision';
        select.append(option);
        

        for (const team of teams) {
            select.append(Option({ team }));
        }
    };
}

function Option({ team }) {
    const op = document.createElement('option');
    op.value = team.id;
    op.textContent = team.name;
    return op;
}