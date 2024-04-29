import Navbar from './Components/Navbar';
import WorkingHomePage from './Components/WorkingHomePage';
import ArrayPage from './Pages/ArrayPage';
import HomePage from './Pages/HomePage';
import StackPage from './Pages/StackPage';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const workingRoutes =
    location.pathname === '/queue' ||
    location.pathname === '/linked-list' ||
    location.pathname === '/tree' ||
    location.pathname === '/graph';

  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/stack" element={<StackPage />} />
        <Route exact path="/array" element={<ArrayPage />} />
      </Routes>
      {workingRoutes && <WorkingHomePage />}
    </>
  );
}

export default App;
