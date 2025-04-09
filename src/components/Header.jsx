import redditLogo from '../assets/Reddit.png';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <a href="https://www.reddit.com" target="_blank" >
        <img src={redditLogo} className="logo" alt="reddit logo" />
      </a>
    </header>
  );
}

export default Header;