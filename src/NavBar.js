
import logo from './logo/logo.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {

    return(
    <div style = {{backgroundColor:'#fff'}}>
    <li style = {{listStyle: 'none'}}>
    <CustomLink to = '/'>
        <img src = {logo} className = 'center' style = {{width: 'max(15vw, 150px)'}}></img>
    </CustomLink>
    </li>

    <nav className = 'nav' id = 'myTopnav'> 

        <li style = {{listStyle: 'none'}}>
            <CustomLink to = '/'>Home</CustomLink>
        </li>

        <ul>
          <li>
              <CustomLink to = '/tuition'>Tuition</CustomLink>
          </li>
          <li>
              <CustomLink to = '/practice'>Ultimate Practice</CustomLink>
          </li>
          <li>
              <CustomLink to = '/contests'>Math Contests</CustomLink>
          </li>
          <li>
              <CustomLink to = '/careers'>Careers</CustomLink>
          </li>
          <li>
              <CustomLink to = '/team'>Our Team</CustomLink>
          </li>
          <li>
              <CustomLink to = '/getstarted' style = {{backgroundColor: '#6271e2', borderRadius: '5px', padding: '5px 10px 5px 10px', color: '#fff'}}>Get Started</CustomLink>
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
    </div>
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