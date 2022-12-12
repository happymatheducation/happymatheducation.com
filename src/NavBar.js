import logo from './logo/logo.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {

    return (
        <div id='navsticky'>
            <div style={{ backgroundColor: '#fff' }}>
                <ul style={{ listStyle: 'none' }}>
                    <CustomLink to='/' id='navlogo'>
                        <img src={logo} className='center' style={{ width: 'max(15vw, 150px)' }} alt=''></img>
                    </CustomLink>
                </ul>
            </div>

            <nav className='nav stickytop' id='myTopnav'>

                <ul id='navul'>
                    <CustomLink to='/' id='navresponsivelogo'>
                        <img src={logo} className='center' style={{ width: 'max(15vw, 150px)' }} alt=''></img>
                    </CustomLink>
                </ul>
                <ul id='homelink'>
                    <CustomLink to='/'>Home</CustomLink>
                </ul>

                <ul>
                    <CustomLink to='/classes'>Classes</CustomLink>
                    <CustomLink to='/practice'>Practice</CustomLink>
                    <CustomLink to='/contests'>Contests</CustomLink>
                    <CustomLink to='/careers'>Careers</CustomLink>
                    <CustomLink to='/team'>Our Team</CustomLink>
                    {/* <CustomLink to = '/apply' style = {{backgroundColor: '#6271e2', borderRadius: '5px', padding: '5px 10px 5px 10px', color: '#fff'}}>Apply</CustomLink> */}
                </ul>

                <button id='icon' className="icon" onClick={
                    () => {
                        var x = document.getElementById("myTopnav");
                        if (x.className === "nav stickytop") {
                            x.className += " responsive";
                            document.getElementById("icon").innerHTML = "<i class='bi bi-x'></i>"
                        } else {
                            x.className = "nav stickytop";
                            document.getElementById("icon").innerHTML = "<i class='bi bi-arrow-bar-left'></i>"
                        }
                    }
                }>
                    <i className='bi bi-arrow-bar-left'></i>
                </button>

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