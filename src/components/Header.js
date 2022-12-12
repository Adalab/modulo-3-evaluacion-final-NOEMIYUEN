import logo from '../images/rick_and_Morty.png';

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          className="header__img"
          src={logo}
          alt="logo Rick&Morty"
          title="to Homepage"
        />
      </a>
    </header>
  );
}

export default Header;
