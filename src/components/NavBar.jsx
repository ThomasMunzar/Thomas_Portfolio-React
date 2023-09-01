import { Link } from 'react-router-dom';




function NavBar() {
   return (
      
      <dev>
        
            <Link  className="nav-link text-light" to="/about">
               About Me
            </Link>

             <Link  className="nav-link text-light" to="/portfolio">
             Portfolio
          </Link>
           <Link  className="nav-link text-light" to="/contact">
          Contact
        </Link>
        <Link  className="nav-link text-light" to="/resume">
           Resume
        </Link>
        
        
        </dev>
   );
}


export default NavBar 