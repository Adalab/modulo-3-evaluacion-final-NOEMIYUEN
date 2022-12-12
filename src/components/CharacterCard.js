import PropTypes from 'prop-types';

function CharacterCard(props) {
  return (
    <li key={props.character.id} className="list__element">
      <a className="link" href="/" title="character Detail">
        <div className="list__element--imgbox">
          <img
            className="imgbox__img"
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
        </div>

        <h2 className="list__element--name">{props.character.name}</h2>
        <p className="list__element--species">{props.character.species}</p>
      </a>
    </li>
  );
}

CharacterCard.prototype = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
