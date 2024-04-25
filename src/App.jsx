import ArrayPage from './Pages/ArrayPage';
import HomePage from './Pages/HomePage';
import StackPage from './Pages/StackPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/stack" element={<StackPage />} />
        <Route exact path="/array" element={<ArrayPage />} />
      </Routes>
    </>
  );
}

export default App;
