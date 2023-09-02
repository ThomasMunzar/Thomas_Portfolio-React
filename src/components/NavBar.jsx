import { Link, useLocation } from 'react-router-dom';




function NavBar() {
   const currentPage = useLocation().pathname;
   return (

      <div className='d-flex justify-content-center navbar navbar-expand-lg navbar-light bg-light m-80'>
         
         <ul className='nav d-flex justify-content-between m-80'>

         <li className='nav-item'>
            <Link
               to="/"
               className={`nav-link ${currentPage === '/' ? 'nav-link active' : 'nav-link'}`}
            >
               Portfolio
            </Link>
            </li>


            <li className='nav-item'>
            <Link
               to="/about"
               className={`nav-link ${currentPage === '/about' ? 'nav-link active' : 'nav-link'}`}
            >
               About Me
            </Link>
            </li>

            <li className='nav-item'>
            <Link
               to="/contact"
               className={`nav-link ${currentPage === '/contact' ? 'nav-link active' : 'nav-link'}`}
            >
               Contact
            </Link>
            </li>

            <li className='nav-item'>
            <Link
               to="/resume"
               className={`nav-link ${currentPage === '/resume' ? 'nav-link active' : 'nav-link'}`}
            >
               Resume
            </Link>
            </li>



         </ul>

      </div>

   );
}


export default NavBar 