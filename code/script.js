fetch('https://meowfacts.herokuapp.com/')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(error => console.error('Error fetching users:', error));


const newUser = {
    name: 'Maria Paz',
    username: 'paz',
    email: 'pachigavil@gmail.com'
};
fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
})
.then(response => response.json())
.then(data => console.log('New user created:', data))
.catch(error => console.error('Error creating user:', error))

const updatedUserData = {
    id: 1,
    name: 'Grazia',
    username: 'maggie',
    email: "maggy@gmail.com"
};

fetch('https://jsonplaceholder.typicode.com/users1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUserData)
})
.then(response => response.json())
.then(data => console.log('User Updated:', data))
.catch(error => console.error('Error updating user:', error))