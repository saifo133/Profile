import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <div className="Navbar-container">
            <h1>SAIF ABU MATAR</h1>
            <div className="menu">
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/projects'>
                        <li>Projects</li>
                    </Link>
                    <Link to='/education'>
                        <li>Education</li>
                    </Link>
                    <Link to='/skills'>
                        <li>Skills</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}