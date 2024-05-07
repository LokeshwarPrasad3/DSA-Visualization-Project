import { useEffect } from 'react';
import DocsLayout from '../Components/Layout/DocsLayout';
import {
  codeStringImplementation,
  codeStringSTL,
  Documentation,
} from '../data/LinkedListData';
import LinkedListVisualize from '../Components/Linkedlist/LinkedListVisualize';

const LinkedListPage = () => {
  
  useEffect(() => {
    document.title = 'LinkedList • DSA Visualization Online';
  }, []);

  return (
    <>
      <div className="linkedlist_container mt-10">
        <h1 className="heading text-center text-2xl font-overpass">
          🚀 LinkedList Visualization
        </h1>
        <div className="main_content flex flex-col md:flex-row mt-12 justify-around items-center w-full ">
          {/* <!-- left part --> */}
          <LinkedListVisualize />
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

export default LinkedListPage;
