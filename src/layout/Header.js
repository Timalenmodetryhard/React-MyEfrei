import { Link } from 'react-router-dom';
import logo from '../images/logo-efrei.png'

function Header() {

  return (
    <header>
      <nav className="nav-header">
        <div className='header-top'>
            <div className="left">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <div className="middle">
                <div className='search-bar'>
                    <input placeholder='Rechercher une ressource'></input>
                    <svg>
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </div>
            </div>
            <div className="right">
                <p>Leelian SERRANT</p>
            </div>
        </div>
        <div className='header-bottom'>
            <nav>
                <button className="nav-item"><Link to="/"><span>Accueil</span></Link></button>
                <button className="nav-item"><Link to="/planning"><span>Planning</span></Link></button>
                <button className="nav-item"><Link to="/scolarite"><span>Scolarité</span></Link></button>
                <button className="nav-item"><Link to="/ecole"><span>L'école</span></Link></button>
                <button className="nav-item"><Link to="/vie-etudiante"><span>Vie étudiante</span></Link></button>
                <button className="nav-item"><Link to="/stage-alternance"><span>Stages et alternances</span></Link></button>
                <button className="nav-item"><Link to="/outils"><span>Outils</span></Link></button>
                <button className="nav-item"><Link to="/aides"><span>Aides</span></Link></button>
            </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
