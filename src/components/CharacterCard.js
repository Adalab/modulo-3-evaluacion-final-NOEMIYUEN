import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterCard(props) {
  return (
    <li key={props.character.id} className="list__element">
      <Link
        className="link"
        to={`/detail/${props.character.id}`}
        title="to character Detail"
      >
        <div className="list__element--imgbox">
          <img
            className="imgbox__img"
            src={props.character.image}
            alt={`${props.character.name}`}
            title={`Photo of ${props.character.name}`}
          />
        </div>

        <h2 className="list__element--name">{props.character.name}</h2>
        <p className="list__element--species">{props.character.species}</p>
      </Link>
    </li>
  );
}

CharacterCard.prototype = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
