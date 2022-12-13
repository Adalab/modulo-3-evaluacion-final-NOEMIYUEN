import morty from '../images/mortyEj.png';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  return (
    <article className="cardSection__card">
      <img
        className="cardSection__card--img"
        src={props.character.image}
        /* src={props.characterData.image} */
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />

      <div className="textBox">
        <h2 className="textBox__name">Morty {props.character.name}</h2>

        <div className="textBox__box">
          <h3 className="textBox__box--title">Status:</h3>
          <span className="textBox__box--detail">{props.character.status}</span>
        </div>

        <div className="textBox__box">
          <h3 className="textBox__box--title">Species:</h3>
          <span className="textBox__box--detail">
            {props.character.species}
          </span>
        </div>

        <div className="textBox__box">
          <h3 className="textBox__box--title">Origin:</h3>
          <span className="textBox__box--detail">{props.character.origin}</span>
        </div>

        <div className="textBox__box">
          <h3 className="textBox__box--title">Episodes:</h3>
          <span className="textBox__box--detail">
            {props.character.episodes}
            {/* {props.characterData.episodes} */}
          </span>
        </div>
      </div>
      <Link to="/"> Ir a inicio </Link>
    </article>
  );
}

CharacterDetail.prototype = {
  characterData: PropTypes.array,
  character: PropTypes.array,
};

export default CharacterDetail;
