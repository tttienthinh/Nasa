// https://api.nasa.gov/planetary/apod?api_key=IqWPpNh7NbhokTuyrrkaJqjXXXHkShByHQ5uta7h

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=IqWPpNh7NbhokTuyrrkaJqjXXXHkShByHQ5uta7h';
const dates = ['2020-04-01', '2020-04-02', '2020-04-03', '2020-04-04', '2020-04-05', '2020-04-06', '2020-04-07', '2020-04-08', '2020-04-09', '2020-04-10'];
let html_code = '';
const ajoutDiv = document.querySelector('.Ajout');
let url = ''

for (let i=0; i<10; i++){
    url = `${apiUrl}&date=${dates[i]}`
    console.log(url)
    fetch(url)
        .then( (data) => {
            if(data.ok){
                return data.json()
            }
            throw new Error('Response not ok.'); 
        })
        .then( data_json => generateHtml(data_json))
        .catch( error => console.error('Error:', error))
} 
/*
fetch(`https://api.nasa.gov/planetary/apod?api_key=IqWPpNh7NbhokTuyrrkaJqjXXXHkShByHQ5uta7h&date=2020-04-06`)
        .then( (data) => {
            if(data.ok){
                return data.json()
            }
            throw new Error('Response not ok.'); 
        })
        .then( data_json => generateHtml(data_json))
        .catch( error => console.error('Error:', error))

ajoutDiv.innerHTML = html_code
*/

let generateHtml = (data_json) => {
    console.log(data_json)
    html_code += 
    `
        <section class="wrapper style2">
            <div class="inner">
                <div>
                    <div class="box">
                        <div class="image fit">
                            <img src=${data_json.url} alt="" />
                        </div>
                        <div class="content">
                            <header class="align-center">
                                <h2>${data_json.title}</h2>
                                <p>${data_json.date}</p>
                            </header>
                            <hr />
                            <p> ${data_json.explanation}</p>
                            <p> ${data_json.copyright} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    `
    ajoutDiv.innerHTML = html_code
}


/*
const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25',
}

const {url, type, id} = apiData

const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.'); 
    })
    .then( pokemon => generateHtml(pokemon))
    .catch( error => console.error('Error:', error))


const generateHtml = (data) => {
    console.log(data.sprites.front_default)
    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}
*/