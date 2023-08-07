const peliculas = {
  "Top Gun":
    "https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
};

function Poster(props) {
  return (
    <div>
      <img src={peliculas[props.titulo]} alt={props.titulo} />
    </div>
  );
}

export default Poster;
