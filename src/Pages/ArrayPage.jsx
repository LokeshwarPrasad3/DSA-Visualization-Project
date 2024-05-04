import {
  codeStringImplementation,
  codeStringSTL,
  Documentation,
} from '../data/ArrayData';
import DocsLayout from '../Components/Layout/DocsLayout';
import { useEffect } from 'react';
import ArrayVisualize from '../Components/Array/ArrayVisualize';

const ArrayPage = () => {
  useEffect(() => {
    document.title = 'Array • DSA Visualization Online';
  }, []);

  return (
    <>
      <div className="array_container cursor-pointer mt-10">
        <h1 className="heading text-center text-2xl font-overpass">
          🚀 Array Visualization
        </h1>
        <div className="array_main_content font-overpass flex flex-col md:flex-row justify-around items-center w-full ">
          <ArrayVisualize />
          <div className="array_docs_container">
            <DocsLayout
              codeStringImplementation={codeStringImplementation}
              codeStringSTL={codeStringSTL}
              Documentation={Documentation}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArrayPage;
