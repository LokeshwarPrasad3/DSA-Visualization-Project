import '../CSS/Navbar.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationListDataStructures } from '../../data/NavbarData';

const Navbar = () => {
  // state which store current width of window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showResNavbar, setShowResNavbar] = useState(false);

  //
  const toggleResNavbar = () => {
    setShowResNavbar(!showResNavbar);
  };

  useEffect(() => {
    // function set current innerWidth
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };
    // Attach event listener for window resize
    window.addEventListener('resize', handleWindowResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <>
      {/* navbar structure */}
      <nav
        id="navbar"
        className="navbar-container font-overpass px-1 lg:px-20
          bg-gray-950 shadow-blue-900 shadow-sm
      "
      >
        {/* header section where name and logo of business */}
        <header className="navbar_header flex-3">
          <Link to="/" className="heading_logo">
            <img
              src="./images/logo_2.png"
              alt="logo"
              className="h-10 sm:h-12 mr-2 rounded relative top-[-.15rem]"
            />
          </Link>
          <Link
            to="/"
            className="heading_name text-2xl sm:text-3xl font-semibold"
          >
            <span className="text-green-400">DSA&nbsp;</span>
            Visualization
          </Link>
        </header>
        {/* show navbar-menu */}
        <div
          style={{
            left: `${showResNavbar ? '0%' : '-100%'}`,
          }}
          id="navbar_menu"
          className={`custom-transition ${showResNavbar ? 'flex' : 'hidden'} `}
        >
          <ul id="nav_ul">
            {navigationListDataStructures.map(({ route, name }) => (
              <li key={name} className="nav_list pl-5">
                <Link
                  onClick={toggleResNavbar}
                  className="nav_link hover:text-gray-300"
                  to={route}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="menu_button"
          style={{
            display: `${windowWidth < 800 ? 'flex' : 'none'}`,
          }}
        >
          {showResNavbar ? (
            <i
              onClick={toggleResNavbar}
              style={{ fontSize: '2.2rem' }}
              className={`ri-close-line`}
            ></i>
          ) : (
            <i
              onClick={toggleResNavbar}
              style={{ fontSize: '2.2rem' }}
              className={`ri-menu-fill `}
            ></i>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
