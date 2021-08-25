window.addEventListener("load",loadUsers);
function loadUsers() {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    xhr.onload= function(){
        const jsonPlaceholder= JSON.parse(xhr.response);
        const usersDiv = document.getElementById("users");

        let output= "";
        for(let user of jsonPlaceholder) {
            output += `
            <div class="user">
                <ul>
                    <li> ID: ${user.id}</li>
                    <li> Name:${user.name}</li>
                    <li> Email:${user.email}</li>
                    <li> Address:${user.address.city}</li>
                    <li> Phone:${user.phone}</li>
                    <li> Website:${user.website}</li>

                </ul>
            </div>    
            `;
        }

        usersDiv.innerHTML=output;
    
    };
    
    xhr.send();    

}





