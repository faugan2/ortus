import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

export default function Menu() {
  return (
    <div className="bg-white h-12 flex justify-between items-center border border-t-0 border-l-0 border-r-0">
        <div className="flex items-center flex-1">
            <Link to="/accueil">
                <img src={logo} style={{width:80,height:80}}/>
            </Link>
            <ul className="flex gap-4">
                <li className="hover:opacity-50"><Link to="/accueil" >Accueil</Link></li>
                <li className="hover:opacity-50"><Link to="/">A propos</Link></li>
                <li className="hover:opacity-50"><Link to="/">Services</Link></li>
                <li className="hover:opacity-50"><Link to="/">Domaines</Link></li>
                <li className="hover:opacity-50"><Link to="/">Vente</Link></li>
                <li className="hover:opacity-50"><Link to="/">Equipe</Link></li>
                <li className="hover:opacity-50"><Link to="/">Formations</Link></li>
                <li className="hover:opacity-50"><Link to="/">Contacts</Link></li>
            </ul>
        </div>
        <div className="flex items-center mr-4 ">
            <div className="flex items-center bg-gray-100 rounded-sm h-8  pl-1 pr-1 flex-1 mr-4">
                <input type="text" placeholder='Rechercher' 
                className="bg-transparent border-0 outline-none text-sm flex-1" />
                <SearchOutlinedIcon style={{color:"gray"}} />
            </div>
            <button className="flex flex-col items-center hover:opacity-50">
                <PermIdentityOutlinedIcon style={{fontSize:20}} />
                <span className="text-sm">Connexion</span>
            </button>
        </div>
    </div>
  )
}
