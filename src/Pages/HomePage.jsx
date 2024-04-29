import MainViewPort from '../Components/MainViewPort';
import WhyLearnDSA from '../Components/WhyLearnDSA';
import Footer from '../Components/Footer';
import HorizontalLine from '../Components/HorizontalLine';
// import WorkingHomePage from '../Components/WorkingHomePage';

const HomePage = () => {
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
