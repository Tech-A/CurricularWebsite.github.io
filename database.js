const modalWrapper = document.querySelector('.modal-wrapper');

// modal add 
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');

// modal edit
const editModal = document.querySelector('.edit-modal');
const editModalForm = document.querySelector('.edit-modal .form');


const btnAdd = document.querySelector('.btn-add');

const tableUsers = document.querySelector('.table-users');

let id;

// Create element and render users
const renderUser = doc => {
const tr = `
         <tr data-id='${doc.id}'>
            <td>${doc.data().firstName}</td>
            <td>${doc.data().lastName}</td>
            <td>${doc.data().email}</td>
            <td>${doc.data().category}</td>
            <td>${doc.data().curricular}</td>
            <td>
             <button class="btn btn-edit">Edit</button>
             <button class="btn btn-delete">Delete</button>
            </td>
        </tr>
        `;

        tableUsers.insertAdjacentHTML('beforeend', tr);

        //Click edit user 
    const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-edit`);
    btnEdit.addEventListener('click', () => {
    editModal.classList.add('modal-show');

    id = doc.id;
    editModalForm.firstName.value = doc.data().firstName;
    editModalForm.lastName.value = doc.data().lastName;
    editModalForm.email.value = doc.data().email;
    editModalForm.category.value = doc.data().category;
    editModalForm.curricular.value = doc.data().curricular;
    });

        //Click delete user
const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
btnDelete.addEventListener('click', () => {
    db.collection('users').doc(`${doc.id}`).delete().then(() => {
 console.log('Document successfully deleted!');
    }).catch(err => {
        console.log('Error removing document', err);
    });
});

} 


// Click add user button
btnAdd.addEventListener('click', () => {
    addModal.classList.add('modal-show');

    addModalForm.firstName.value = '';
    addModalForm.lastName.value = '';
    addModalForm.email.value = '';
    addModalForm.category.value = '';
    addModalForm.curricular.value = '';
});

// User click anywhere outside the modal
window.addEventListener('click', e => {
    if(e.target === addModal){
addModal.classList.remove('modal-show');
    }
    if(e.target ===editModal) {
        editModal.classList.remove('modal-show');
    }
});

// Get all users 
//db.collection('users').get().then(querySnapshot => {
// querySnapshot.forEach( doc => {
//        renderUser(doc);
//    })
//});

//Real time listener
db.collection('users').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            renderUser(change.doc);
        } 
        if(change.type === 'removed') {
            let tr = document.querySelector(`[data-id='${change.doc.id}']`);
            let tbody = tr.parentElement;
            tableUsers.removeChild(tbody);
        }
        if(change.type === 'modified') {
            let tr = document.querySelector(`[data-id='${change.doc.id}']`);
            let tbody = tr.parentElement;
            tableUsers.removeChild(tbody);
            renderUser(change.doc);
        }
    })
})


// Click submit in add modal
addModalForm.addEventListener('submit', e => {
    e.preventDefault();
    db.collection('users').add({
        firstName: addModalForm.firstName.value,
        lastName: addModalForm.lastName.value,
        email: addModalForm.email.value,
        category: addModalForm.category.value,
        curricular: addModalForm.curricular.value,
    });
    modalWrapper.classList.remove('modal-show');
});

//Click submit in edit modal 
editModalForm.addEventListener('submit', e => {
 e.preventDefault();
 db.collection('users').doc(id).update({
     firstName: editModalForm.firstName.value,
     lastName: editModalForm.lastName.value,
     email: editModalForm.email.value,
     category: editModalForm.category.value,
     curricular: editModalForm.curricular.value,
 });
 editModal.classList.remove('modal-show');

});