
export default function createAddPlayer(form, { handleAddPlayer }) {

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        handleAddPlayer(
            formData.get('name'),
            formData.get('teamId')
        );
    });
    
    return () => {};
}