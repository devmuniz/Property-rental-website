import './Header.css';
import '../../../index.css';

function Header() {
  return (
    <header>
      <div id="header">
        <a href="/">
          <img src="/assets/img/logo.png" className="logo" alt="Logo" />
        </a>
        <h2 className="titleHeader">Anuncie seu espaço e fature!</h2>

        <div>
          <a href="">
            <img src="../src/assets/img/building.png" className="userIcon"/>
          </a>
          <a href="">
            <img src="../src/assets/img/calendar.png" className="userIcon"/>
          </a>
          <a href="">
            <img src="../src/assets/img/table.png" className="userIcon"/>
          </a>
          <a href="">
            <img src="../src/assets/img/chat.png" className="userIcon"/>
          </a>
          <a href="">
            <img src="../src/assets/img/user.png" className="userIcon"/>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
