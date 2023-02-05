import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'blue' : 'black',
            textDecoration: 'none',
            paddding: '16px'
        };
    }

    return (
        <nav className='primary-nav'>
            <NavLink to='/' style={navLinkStyles}>Home</NavLink>
            <NavLink to='/about' style={navLinkStyles}>About</NavLink>
            <NavLink to='/contact-us' style={navLinkStyles}>Contact</NavLink>
            <NavLink to='/products' style={navLinkStyles}>Products</NavLink>
            <NavLink to='/users' style={navLinkStyles}>Users</NavLink>
            <NavLink to='login' style={navLinkStyles}>Login</NavLink>
            <NavLink to='profile' style={navLinkStyles}>Profile</NavLink>
        </nav>
    )
};