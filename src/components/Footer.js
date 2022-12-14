import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <a
          href="https://github.com/NOEMIYUEN"
          className="footer__wrap--heart"
          title="Author's GitHub"
        >
          <FontAwesomeIcon icon={faHeart} />
        </a>
        Click me
      </div>
    </footer>
  );
}

export default Footer;
