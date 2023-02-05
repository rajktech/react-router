import {NavLink, Outlet} from 'react-router-dom';

export const Products = () => {
    const subNavStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'red' : 'black',
            textDecoration: 'none',
            paddding: '16px'
        }

    }
  return (
    <div>
      <div>This is Products page</div>
      <div className='subproducts-container'>
        <nav className="secondary-nav">
          <NavLink to="featured-products" style={subNavStyle}>Featured</NavLink>
          <NavLink to="new-products" style={subNavStyle}>New</NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};
