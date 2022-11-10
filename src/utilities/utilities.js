export const setToken = (user) => {
    const currentUser = {
        email: user.email
    }

    fetch('https://plumber-boy-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('plumboy-token', data.token);
        });
}