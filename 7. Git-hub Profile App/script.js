const APIURL = "https://api.github.com/users/";
let main = document.getElementById("main");
let search = document.querySelector("#search");

let getUser = (username) => {

    fetch(APIURL + username)
        .then((response) => response.json())
        .then((data) => {

            let card = `
            <div id="card">            
            <img src="${data.avatar_url}" alt="" id="photo" class="avtar">
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers} <strong>Followers</strong></li>
                    <li>${data.following} <strong>Following</strong></li>
                    <li>${data.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos">
                </div>
            </div>
        </div>`
            main.innerHTML = card;

            fetch(APIURL + username + "/repos")
                .then(mohit => mohit.json())
                .then((data) => {

                    repos = document.getElementById('repos')
                    data.forEach(element => {
                        repos.innerHTML += `
                        <a href="${element.html_url}" class="repo" target="_blank">${element.name}</a>
                        `
                    });

                })
        })
}


let searchID = () => {
    let search = document.querySelector("#search");
    if (search.value != "") {
        getUser(search.value);
        search.value = "";
    }
}

search.addEventListener(
    "focusout",
    function () {
        searchID()
    }
)

getUser("mohit2275");