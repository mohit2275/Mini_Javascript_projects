const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// Most popular movies

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let bigBox = document.getElementById('bigBox');


fetch(APIURL)
    .then(first => first.json())
    .then((data) => {
        console.log(data);
        console.log(data.results);
        data.results.forEach(element => {

            bigBox.innerHTML += `
                      <div class="smallBox">
                <img src="${IMGPATH + element.poster_path}" alt="" id="pic">
                <div class="overlay">
                    <div class="title">
                        <h2>${element.title}</h2>
                        <h4>${element.vote_average}</h4>
                    </div>
                    <h3>Overview</h3>
                    <p>
                    ${element.overview}
                    </p>
                </div>
            </div>
            `
        });
    })


function searchMovie() {

    let myInput = document.getElementById('myInput').value.toUpperCase();
    let title = document.getElementsByClassName('title');
    let smallBox = document.getElementsByClassName('smallBox');

    for (i = 0; i < title.length; i++) {
        let a = title[i].getElementsByTagName('h2')[0];
        let b = title[i].getElementsByTagName('h4')[0];

        let textValue = a.textContent;
        let numValue = b.textContent;

        if (textValue.toUpperCase().indexOf(myInput) > -1 ||
            numValue.indexOf(myInput) > -1) {
            smallBox[i].style.display = "";
        }
        else {
            smallBox[i].style.display = "none"
        }
    }
}

// searchMovie()