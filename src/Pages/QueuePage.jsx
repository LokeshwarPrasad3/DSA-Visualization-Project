import { useEffect } from 'react';
import QueueVisualize from '../Components/Queue/QueueVisualize';
import DocsLayout from '../Components/Layout/DocsLayout';
import {
  codeStringImplementation,
  codeStringSTL,
  Documentation,
} from '../data/QueueData';

const QueuePage = () => {
  useEffect(() => {
    document.title = 'Queue • DSA Visualization Online';
  }, []);

  return (
    <>
      <div className="queue_container mt-10">
        <h1 className="heading text-center text-2xl font-overpass">
          🚀 Queue Visualization
        </h1>
        <div className="main_content flex flex-col md:flex-row mt-12 justify-around items-center w-full ">
          {/* <!-- left part --> */}
          <QueueVisualize />
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

export default QueuePage;
