import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-efrei.png'

function Header() {
    let [currentPage, setCurrentPage] = useState("")

    useEffect(()=> {
        setCurrentPage(window.location.href.toString().split('/')[3]);
    })

    return (
        <div>
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
                        <Link to="/"><button className={`nav-item ${currentPage.localeCompare("") ? "" : "selected"}`} id='accueil' onClick={()=>setCurrentPage("accueil")}><span>Accueil</span></button></Link>
                        <Link to="/planning"><button className={`nav-item ${currentPage.localeCompare("planning") ? "" : "selected"}`} id='planning' onClick={()=>setCurrentPage("planning")}><span>Planning</span></button></Link>
                        <Link to="/scolarite"><button className={`nav-item ${currentPage.localeCompare("scolarite") ? "" : "selected"}`} id='scolarite' onClick={()=>setCurrentPage("scolarite")}><span>Scolarité</span></button></Link>
                        <Link to="/ecole"><button className={`nav-item ${currentPage.localeCompare("ecole") ? "" : "selected"}`} id='ecole' onClick={()=>setCurrentPage("ecole")}><span>L'école</span></button></Link>
                        <Link to="/vie-etudiante"><button className={`nav-item ${currentPage.localeCompare("vie-etudiante") ? "" : "selected"}`} id='vie-etudiante' onClick={()=>setCurrentPage("vie-etudiante")}><span>Vie étudiante</span></button></Link>
                        <Link to="/stage-alternance"><button className={`nav-item ${currentPage.localeCompare("stage-alternance") ? "" : "selected"}`} id='stage-alternance' onClick={()=>setCurrentPage("stage-alternance")}><span>Stages et alternances</span></button></Link>
                        <Link to="/outils"><button className={`nav-item ${currentPage.localeCompare("outils") ? "" : "selected"}`} id='outils' onClick={()=>setCurrentPage("outils")}><span>Outils</span></button></Link>
                        <Link to="/aides"><button className={`nav-item ${currentPage.localeCompare("aides") ? "" : "selected"}`} id='aides' onClick={()=>setCurrentPage("aides")}><span>Aides</span></button></Link>
                    </nav>
                </div>
            </nav>
        </div>
    );
}

export default Header;
