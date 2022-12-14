import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

function CharacterDetail(props) {
  if (props.character === undefined) {
    return <NotFound />;
  } else {
    return (
      <>
        <Link to="/" className="cardSection__homeLink">
          {' <---  '} Back
        </Link>
        <article className="cardSection__card">
          <img
            className="cardSection__card--img"
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />

          <div className="textBox">
            <h2 className="textBox__name">{props.character.name}</h2>

            <div className="textBox__box">
              <h3 className="textBox__box--title">Status:</h3>
              <span className="textBox__box--detail">
                {props.character.status}
              </span>
            </div>

            <div className="textBox__box">
              <h3 className="textBox__box--title">Species:</h3>
              <span className="textBox__box--detail">
                {props.character.species}
              </span>
            </div>

            <div className="textBox__box">
              <h3 className="textBox__box--title">Origin:</h3>
              <span className="textBox__box--detail">
                {props.character.origin}
              </span>
            </div>

            <div className="textBox__box">
              <h3 className="textBox__box--title">Episodes:</h3>
              <span className="textBox__box--detail">
                {props.character.episodes}
              </span>
            </div>
          </div>
        </article>
      </>
    );
  }
}

CharacterDetail.prototype = {
  characterData: PropTypes.array,
  character: PropTypes.array,
};

export default CharacterDetail;
