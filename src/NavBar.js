
import logo from './logo/favicon.ico';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {

    return(
    <nav> 

        <ul>
            <li>
              <CustomLink to = 'happy-math-education/'>Home</CustomLink>
            </li>
        </ul>

        <ul>
          <li>
              <CustomLink to = './happy-math-education/tuition'>Tuition and Policy</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = './happy-math-education/practice'>Ultimate Practice</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = './happy-math-education/contests'>Math Contests</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = './happy-math-education/careers'>Careers</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = './happy-math-education/contact'>Contact</CustomLink>
          </li>
          <p className = 'navspacer'>{' | '}</p>
          <li>
              <CustomLink to = './happy-math-education/team'>Our Team</CustomLink>
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