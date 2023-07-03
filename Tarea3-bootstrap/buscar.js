let peliculas = ['shrek','luca','encanto','inside+out'];

function buscar() {

    let url = 'http://www.omdbapi.com/?apikey=4ee84151&t=';

    for(let i = 0; i < peliculas.length; i++) {
        let url_pelicula = url+peliculas[i];
        //console.log(url_pelicula)
        fetch(url_pelicula)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            let card_id = 'card'+i;
            let title_id = 'title'+i;
            let desc_id = 'desc'+i;
            
            document.getElementById(card_id).src = data.Poster;
            document.getElementById(title_id).innerHTML = data.Title;
            document.getElementById(desc_id).innerHTML = data.Plot;
        })
    }
}