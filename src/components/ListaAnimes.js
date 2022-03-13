import React from "react";
import '../App.css';

function ListaAnimes(props) {
  const animes = props.animes;
  const ListaAnimes = animes.map(anime => {
    return <div key={anime.key}>
      <p>{anime.titulo}</p>
      <img src={anime.img} />
    </div>
  })
  return (
    <div className="section-img">
      {ListaAnimes}
    </div>
  );
}
export default ListaAnimes;