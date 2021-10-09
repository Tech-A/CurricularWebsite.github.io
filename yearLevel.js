const modalWrapper = document.querySelector('.modal-wrapper');


const tableUsers = document.querySelector('.table-users');

let id;

// Create element and render users
const renderUser = doc => {
const tr = `
         <tr data-id='${doc.id}'>
            <td>${doc.data().yearLevel}</td>
            <td>${doc.data().curricular}</td>
        </tr>
        `;

        tableUsers.insertAdjacentHTML('beforeend', tr);
}



// Get all users 
db.collection('users').get().then(querySnapshot => {
 querySnapshot.forEach( doc => {
        renderUser(doc);
    })
});

