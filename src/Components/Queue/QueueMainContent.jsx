import QueueVisualize from './QueueVisualize';
import Docs from '../Stack/Docs';
import {
  codeStringImplementation,
  codeStringSTL,
  Documentation,
} from '../../data/QueueData';

const MainContent = () => {
  return (
    <>
      <div className="main_content flex flex-col md:flex-row mt-12 justify-around items-center w-full ">
        {/* <!-- left part --> */}
        <QueueVisualize />
        {/* right part */}
        <Docs
          codeStringImplementation={codeStringImplementation}
          codeStringSTL={codeStringSTL}
          Documentation={Documentation}
        />
      </div>
    </>
  );
};

export default MainContent;
