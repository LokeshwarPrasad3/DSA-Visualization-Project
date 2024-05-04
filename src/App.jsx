import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import WorkingHomePage from './Components/Layout/WorkingHomePage';
import StackPage from './Pages/StackPage';
import ArrayPage from './Pages/ArrayPage';
import QueuePage from './Pages/QueuePage';
import LinkedListPage from './Pages/LinkedListPage';
import TreePage from './Pages/TreePage';
import GraphPage from './Pages/GraphPage';
import HomePage from './Pages/HomePage';

function App() {
  const location = useLocation();

  const workingRoutes =
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
        <Route exact path="/queue" element={<QueuePage />} />
        <Route exact path="/linked-list" element={<LinkedListPage />} />
        <Route exact path="/tree" element={<TreePage />} />
        <Route exact path="/graph" element={<GraphPage />} />
      </Routes>
      {workingRoutes && <WorkingHomePage />}
    </>
  );
}

export default App;
