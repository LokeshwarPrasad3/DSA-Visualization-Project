import MainViewPort from '../Components/MainViewPort';
import WhyLearnDSA from '../Components/WhyLearnDSA';
import Footer from '../Components/Footer';
import HorizontalLine from '../Components/HorizontalLine';
import { useEffect } from 'react';
// import WorkingHomePage from '../Components/WorkingHomePage';

const HomePage = () => {

  
  useEffect(() => {
    document.title = 'DSA Visualizations • Lokeshwar Prasad';
  }, []);

  return (
    <>
      <MainViewPort />
      <HorizontalLine/>
      <WhyLearnDSA />
      <HorizontalLine/>
      <Footer />

      {/* <WorkingHomePage/> */}
    </>
  );
};

export default HomePage;
