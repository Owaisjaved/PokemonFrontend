import React from "react"
import { useParams } from "react-router-dom"
import {useNavigate} from 'react-router-dom'

const PokemonDetail = () => {

  const navigate = useNavigate()
  let { id } = useParams();

  const typeRedirect = () => {
    navigate('/pokemontype/1/fire')
  }

  return (
    <div>
      <h1>Charizard #006</h1>
      <div className="detail-container">
        <div className="pokemon-img">
          <img
            width="350px"
            src="https://static.posters.cz/image/1300/poster/pokemon-pikachu-neon-i71936.jpg"
          ></img>
        </div>

        <div className="pokemon-detail">
          <div className="desc">
            <p>
              This Pokémon can melt rocks with its Fire Breath. It occasionally
              causes forest fires.
            </p>
          </div>

          <div className="stats">
            <div className="left">
              <div className="c-color">Size</div>
              <div className="c-font">1.7m</div>
              <div className="c-color">weight</div>
              <div className="c-font">90.5kg</div>
              <div className="c-color">gender</div>
              <div className="c-font">Male/Female</div>
            </div>
            <div className="right">
              <div className="c-color">category</div>
              <div className="c-font">flame</div>
              <div className="c-color">capabilities </div>
              <div className="c-font">major fire</div>
            </div>
          </div>
          <div className="info">
            <div>
              <div className="c-font2">Type</div>
              <div className="c-radius c-color" onClick={typeRedirect}>Fire</div>
              <div className="c-radius2 c-color">Flight</div>
            </div>
            <div>
              <div className="c-font2">Weakness</div>
              <div className="c-radius3 c-color">water</div>
              <div className="c-radius4 c-color">eletric</div>
              <div className="c-radius5 c-color">rock</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
