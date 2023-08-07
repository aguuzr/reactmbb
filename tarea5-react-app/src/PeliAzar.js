const peliculas = [
  { titulo: "Top Gun", link: "https://www.imdb.com/title/tt0092099/" },
  { titulo: "Top Gun", link: "https://www.imdb.com/title/tt0092099/" },
  { titulo: "Top Gun", link: "https://www.imdb.com/title/tt0092099/" },
  { titulo: "Top Gun", link: "https://www.imdb.com/title/tt0092099/" },
  { titulo: "Top Gun", link: "https://www.imdb.com/title/tt0092099/" },
];

const index = Math.floor(Math.random() * peliculas.length);

function PeliAzar() {
  return (
    <div>
      <h1>{peliculas[index].titulo}</h1>
      <a href={peliculas[index].link} target="_blank" rel="noreferrer noopener">
        ver en IMDB
      </a>
    </div>
  );
}

export default PeliAzar;
