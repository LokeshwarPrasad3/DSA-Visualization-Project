import MainContent from "../Components/Stack/MainContent";
import "../Components/Stack/Style.css";

const StackPage = () => {
  
  return (
    <>
      <div className="stack_container mt-10">
        <h1 className="heading text-center text-3xl font-bold font-overpass">
          Stack Visualization
        </h1>
        <MainContent />
      </div>
    </>
  );
};

export default StackPage;
