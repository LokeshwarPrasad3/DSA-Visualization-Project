import StackVisualize from './StackVisualize';
import Docs from './Docs';
import {
  codeStringImplementation,
  codeStringSTL,
  Documentation,
} from '../../data/stackData';

const MainContent = () => {
  return (
    <>
      <div className="main_content flex flex-col md:flex-row mt-12 justify-around items-center w-full ">
        {/* <!-- left part --> */}
        <StackVisualize />
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
