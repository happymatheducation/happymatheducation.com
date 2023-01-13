import logo from './logo/logo.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {

    return (
        <div id='navsticky'>
            <CustomLink to='/'>
                <img src={logo} className='center' style={{ width: 'max(15vw, 150px)' }} alt=''></img>
            </CustomLink>

            <ul id='navul'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/classes'>Classes</CustomLink>
                <CustomLink to='/practice'>Practice</CustomLink>
                <CustomLink to='/contests'>Timeline</CustomLink>
                <CustomLink to='/careers'>Career</CustomLink>
                <CustomLink to='/team'>Our Team</CustomLink>
                <CustomLink to = '/apply'>Contact</CustomLink> 
            </ul>

            <button id='icon' className="icon" onClick={
                () => {
                    var x = document.getElementById("navul");
                    if (x.className === "") {
                        x.className = "expanded";
                        document.getElementById("icon").innerHTML = "<i class='bi bi-x'></i>"
                    } else {
                        x.className = "";
                        document.getElementById("icon").innerHTML = "<i class='bi bi-arrow-bar-left'></i>"
                    }
                }
            }>
                <i className='bi bi-arrow-bar-left'></i>
            </button>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li style={{ listStyle: 'none' }}>
            <Link to={to} {...props} className={isActive ? "navlink active" : "navlink"} onClick={
                () => {
                    document.getElementById("navul").className = "";
                    document.getElementById("icon").innerHTML = "<i class='bi bi-arrow-bar-left'></i>"
                }
            }>
                {children}
            </Link>
        </li>
    )
}

export default NavBar