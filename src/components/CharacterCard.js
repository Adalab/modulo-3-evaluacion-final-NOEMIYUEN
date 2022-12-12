import morty from '../images/mortyEj.png';

function CharacterCard(props) {
  return (
    <li className="list__element">
      <a className="link" href="/" title="character Detail">
        <div className="list__element--imgbox">
          <img
            className="imgbox__img"
            src={props.character.image}
            alt={`Foto de `}
            title={`Foto de`}
          />
        </div>

        <h2 className="list__element--name">{props.character.name}</h2>
        <p className="list__element--species">{props.character.species}</p>
      </a>
    </li>
  );
}

export default CharacterCard;
