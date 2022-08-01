
import logo from './logo.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {

    return(
    <>
    <img src = {logo} className = 'center' style = {{width: 'max(15vw, 150px)'}}></img>

    <nav className = 'nav' id = 'myTopnav'> 

        <li style = {{listStyle: 'none'}}>
            <CustomLink to = '/happy-math-education/'>Home</CustomLink>
        </li>

        <ul>
          <li>
              <CustomLink to = './happy-math-education/tuition'>Tuition</CustomLink>
          </li>
          <li>
              <CustomLink to = './happy-math-education/practice'>Ultimate Practice</CustomLink>
          </li>
          <li>
              <CustomLink to = './happy-math-education/contests'>Math Contests</CustomLink>
          </li>
          <li>
              <CustomLink to = './happy-math-education/careers'>Careers</CustomLink>
          </li>
          <li>
              <CustomLink to = './happy-math-education/contact'>Contact</CustomLink>
          </li>
          <li>
              <CustomLink to = './happy-math-education/team'>Our Team</CustomLink>
          </li>
        </ul>

        <a id = 'icon' class="icon" onClick={
            () => {
                var x = document.getElementById("myTopnav");
                if (x.className === "nav") {
                  x.className += " responsive";
                  document.getElementById("icon").innerHTML = "<i class='bi bi-x'></i>"
                } else {
                  x.className = "nav";
                  document.getElementById("icon").innerHTML = "<i class='bi bi-arrow-bar-left'></i>"
                }              
            }
        }>
            <i class='bi bi-arrow-bar-left'></i>
        </a>

    </nav>
    </>
    )
  }

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </li>
    )
}  

export default NavBar