import { Link } from 'react-router-dom';
import { navigationListDataStructures } from '../data/NavbarData';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [currentWindowWidth, setCurrentWindowWidth] = useState(
    window.innerWidth,
  );
  const [toggleMenuCloseIcon, setToggleMenuCloseIcon] = useState(true);

  const handleResponsiveNavbarMenu = () => {
    setToggleMenuCloseIcon(!toggleMenuCloseIcon);
  };

  useEffect(() => {
    let resizeTimer;

    const handleWindowResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setCurrentWindowWidth(window.innerWidth);
      }, 100); // Adjust the delay as needed
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <nav className="navbar_container font-overpass flex-wrap bg-gray-950 px-5 lg:px-16 text-white py-6 flex justify-between items-center shadow-blue-900 shadow-sm sticky top-0 ">
      <div className="logo_heading_container ml-5 md:ml-0 flex items-center">
        <img
          className="h-10 sm:h-12 mr-2 rounded relative top-[-.15rem]"
          src="./images/logo_2.png"
          alt="logo"
        />
        <Link to="/" className=" text-2xl sm:text-3xl font-semibold">
          {' '}
          <span className="text-green-400">DSA&nbsp;</span>
          Visualization
        </Link>
      </div>
      <div className="menu_container w-full md:w-fit h-full">
        {currentWindowWidth <= 768 && (
          <>
            <i
              onClick={handleResponsiveNavbarMenu}
              className={`ri-${toggleMenuCloseIcon ? 'menu' : 'close'}-fill text-2xl cursor-pointer absolute right-10 top-7`}
            ></i>
          </>
        )}
        {currentWindowWidth <= 768 && (
          <>
            <ul
              className={`
              transition-all duration-300 flex md:relative md:top-[-.1rem]  flex-col absolute top-[5.5rem] w-full z-10 bg-gray-950 border-b-[1px] border-blue-700`}
              style={{
                left: `${toggleMenuCloseIcon ? '100%' : '0%'}`,
              }}
            >
              {navigationListDataStructures.map(({ route, name }) => (
                <li
                  key={name}
                  className=" border-t-[1px] py-3 pl-4 border-blue-900"
                >
                  <Link
                    to={route}
                    onClick={handleResponsiveNavbarMenu}
                    className="text-lg font-medium hover:text-gray-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
        <ul
          className={` space-x-3 lg:space-x-6 relative top-[-.1rem]`}
          style={{ display: `${currentWindowWidth > 768 ? 'flex' : 'none'}` }}
        >
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
