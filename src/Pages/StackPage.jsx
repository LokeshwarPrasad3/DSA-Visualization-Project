import { useEffect } from "react";
import MainContent from "../Components/Stack/MainContent";
import "../Components/Stack/Style.css";

const StackPage = () => {

  
  useEffect(() => {
    document.title = 'Stack • DSA Visualization Online';
  }, []);
  
  return (
    <>
      <div className="stack_container mt-10">
        <h1 className="heading text-center text-2xl font-overpass">
          🚀 Stack Visualization
        </h1>
        <MainContent />
      </div>
    </>
  );
};

export default StackPage;
