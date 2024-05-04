import { useEffect } from 'react';
import '../Components/Stack/Style.css';
import StackVisualize from '../Components/Stack/StackVisualize';
import DocsLayout from '../Components/Layout/DocsLayout';
import {
  codeStringImplementation,
  codeStringSTL,
  Documentation,
} from '../data/stackData';

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
        <div className="main_content flex flex-col md:flex-row mt-12 justify-around items-center w-full ">
          {/* <!-- left part --> */}
          <StackVisualize />
          {/* right part */}
          <DocsLayout
            codeStringImplementation={codeStringImplementation}
            codeStringSTL={codeStringSTL}
            Documentation={Documentation}
          />
        </div>
      </div>
    </>
  );
};

export default StackPage;
