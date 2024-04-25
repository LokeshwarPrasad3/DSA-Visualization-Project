import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h2 className="text-sm text-center mt-12 ">This page is on working.....</h2>
      <div className="homepage_container w-full flex-4 h-screen gap-7">
        <h2 className="text-2xl capitalize">Hello, Welcome to home page</h2>
        <div className="links_container flex-3 gap-3 ">
          <Link to="/stack" className="custom_button">
            Stack
          </Link>
          <Link to="/array" className="custom_button">
            Array
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
