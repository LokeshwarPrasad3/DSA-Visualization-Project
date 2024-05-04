import MainViewPort from '../Components/Home/MainViewPort';
import WhyLearnDSA from '../Components/Home/WhyLearnDSA';
import Footer from '../Components/Layout/Footer';
import HorizontalLine from '../Components/Layout/HorizontalLine';
import { useEffect } from 'react';
// import WorkingHomePage from '../Components/WorkingHomePage';

const HomePage = () => {
  useEffect(() => {
    document.title = 'DSA Visualizations • Lokeshwar Prasad';
  }, []);

  return (
    <>
      <MainViewPort />
      <HorizontalLine />
      <WhyLearnDSA />
      <HorizontalLine />
      <Footer />

      {/* <WorkingHomePage/> */}
    </>
  );
};

export default HomePage;
