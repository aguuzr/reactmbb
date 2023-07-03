function buscar() {
    fetch('http://www.omdbapi.com/?apikey=4ee84151&t=shrek')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        document.getElementById("card1").src = data.Poster;
    });
    fetch('http://www.omdbapi.com/?apikey=4ee84151&t=luca')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        document.getElementById("card2").src = data.Poster;
    });
    fetch('http://www.omdbapi.com/?apikey=4ee84151&t=encanto')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        document.getElementById("card3").src = data.Poster;
    });
    fetch('http://www.omdbapi.com/?apikey=4ee84151&t=inside+out')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        document.getElementById("card4").src = data.Poster;
    });
}