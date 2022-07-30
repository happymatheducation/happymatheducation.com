
import logo from './logo/favicon.ico';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {

    return(
    <nav> 

        <ul>
            <li>
              <CustomLink to = '/'>Home</CustomLink>
            </li>
        </ul>

        <ul>
          <li>
              <CustomLink to = './tuition'>Tuition and Policy</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = './practice'>Ultimate Practice</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = './contests'>Math Contests</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = './careers'>Careers</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = './contact'>Contact</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = './team'>Our Team</CustomLink>
          </li>
        </ul>

    </nav>
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