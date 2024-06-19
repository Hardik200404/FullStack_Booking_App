function handle_form(event) {

    event.preventDefault();

    const user_details = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    }

    fetch('http://localhost:4000/appointments',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user_details),
    }).then((response) => {
        if(response.ok){
          return response.json()
        }else{
          throw new Error('Error submitting the form')
        }
    }).then((res) => displayUserOnScreen(res))
      .catch((err) => console.log(err));
  
    // Clearing the input fields
    document.getElementById('username').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
}
  
function displayUserOnScreen(user_details) {
    const userItem = document.createElement('li')
    userItem.appendChild(
      document.createTextNode(
        `${user_details.username} - ${user_details.email} - ${user_details.phone}`
      )
    )
    //adding delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    //adding edit button
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);


    const userList = document.querySelector('ul');
    userList.appendChild(userItem);
    deleteBtn.addEventListener('click', function (event) {
      fetch(`http://localhost:4000/appointments/${user_details.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          userList.removeChild(event.target.parentElement);
        })
        .catch((error) => console.log(error));
    })
    editBtn.addEventListener('click', function (event) {
        fetch(`http://localhost:4000/appointments/${user_details.id}`, {
            method: 'DELETE',
        }).then(() => {
            userList.removeChild(event.target.parentElement)
        }).catch((error) => console.log(error))
        document.getElementById('username').value = user_details.username
        document.getElementById('email').value = user_details.email
        document.getElementById('phone').value = user_details.phone
    })
}