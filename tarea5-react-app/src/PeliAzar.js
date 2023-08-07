const peliculas = [
  { titulo: "Top Gun", link: "https://www.imdb.com/title/tt0092099/" },
  { titulo: "Oppenheimer", link: "https://www.imdb.com/title/tt15398776/" },
  { titulo: "Barbie", link: "https://www.imdb.com/title/tt1517268/" },
  { titulo: "Interstellar", link: "https://www.imdb.com/title/tt0816692/" },
  {
    titulo: "Top Gun: Maverick",
    link: "https://www.imdb.com/title/tt1745960/",
  },
];

const index = Math.floor(Math.random() * peliculas.length);

function PeliAzar() {
  return (
    <div>
      <h3>{peliculas[index].titulo}</h3>
      <a href={peliculas[index].link} target="_blank" rel="noreferrer noopener">
        Ver en IMDb
      </a>
    </div>
  );
}

export default PeliAzar;
