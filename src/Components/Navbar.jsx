import { Link } from 'react-router-dom';
import { navigationListDataStructures } from '../data/NavbarData';

const Navbar = () => {
  return (
    <nav className="navbar_container font-overpass bg-gray-950 px-5 md:px-10 lg:px-16 text-white py-6 flex justify-between items-center relative top-[.5rem] shadow-blue-900 shadow-sm">
      <div className="logo_heading_container flex items-center">
        <img
          className="h-12 mr-2 rounded relative top-[-.15rem]"
          src="./images/logo_2.png"
          alt="logo"
        />
        <Link to="/" className="text-3xl font-semibold">
          {' '}
          <span className="text-green-400">DSA&nbsp;</span>
          Visualization
        </Link>
      </div>
      <div className="menu_container">
        <ul className="flex space-x-6 relative top-[-.1rem]">
          {navigationListDataStructures.map(({ route, name }) => (
            <li key={name}>
              <Link
                to={route}
                className="text-lg font-medium hover:text-gray-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
