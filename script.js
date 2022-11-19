let listUser = document.getElementById("listUser")

getUser()

function getUser() {
    fetch("https://gorest.co.in/public/v2/users")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(showUser)
        })
        .catch(error => {
            console.log(error)
        });

}

function showUser(value, index) {
    listUser.innerHTML += `<tr>
    <td>${value.name}</td>
    <td>${value.email}</td>
    <td>${value.gender}</td>
    <td>${value.status}</td>
    <td><button class="btn btn-info" onclick="editUser>(${value.id})">Edit</button>
    <button class="btn btn-danger" onclick="deleteUser(${value.id})">Delete</button>
    </td>
    </tr>`
}

function deleteUser(id) {
    console.log("Hapus data id: " + id)
    fetch("https://gorest.co.in/public/v2/users" + id, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer b55c0a58dad5b355c7909e9cd9d0dc120867a174fc99643c0cde1beae2a9e161"
            }
        })
        .then(response => {
            console.log(response)
            listUser.innerHTML = "" //kosongkan tabel list user
            getUser() // panggil function getUser()
        })
        .catch(error => {
            console.log(error)

        })
}