import CodePreviewer from '../Groups/CodePreviewer';
import {
  codeStringImplementation,
  codeStringSTL,
  Documentation,
} from '../../data/stackData';
import { useState } from 'react';

const Docs = () => {
  const [showDocs, setShowDocs] = useState(true);
  const [showImplementation, setShowImplementation] = useState(false);
  const [showSTL, setShowSTL] = useState(false);

  const showStackDescription = (index) => {
    if (index === 1) {
      setShowImplementation(false);
      setShowSTL(false);
      setShowDocs(true);
    } else if (index === 2) {
      setShowImplementation(false);
      setShowDocs(false);
      setShowSTL(true);
    } else if (index === 3) {
      setShowSTL(false);
      setShowDocs(false);
      setShowImplementation(true);
    }
  };

  // shadow-sm shadow-blue-600
  return (
    <>
      <div className="docs_container_part h-screen w-[50vw] font-overpass">
        <div
          className="stack_menu_container h-[80vh] shadow-sm shadow-blue-600
        "
        >
          <ul className="menu_list flex gap-3">
            <li
              onClick={() => showStackDescription(1)}
              className="shadow-sm shadow-blue-700 cursor-pointer hover:bg-blue-900 hover:shadow-sm hover:shadow-blue-600 px-3 transition-all duration-200"
            >
              Docs
            </li>
            <li
              onClick={() => showStackDescription(2)}
              className="shadow-sm shadow-blue-700 cursor-pointer hover:bg-blue-900 hover:shadow-sm hover:shadow-blue-600 px-3 transition-all duration-200"
            >
              STL
            </li>
            <li
              onClick={() => showStackDescription(3)}
              className="shadow-sm shadow-blue-700 cursor-pointer hover:bg-blue-900 hover:shadow-sm hover:shadow-blue-600 px-3 transition-all duration-200"
            >
              Implement
            </li>
          </ul>
          <div className="content_by_menu flex justify-center">
            {showDocs && (
              <div className="show_code w-full h-full font-overpass">
                <CodePreviewer codeString={Documentation} />
              </div>
            )}
            {showSTL && (
              <div className="show_code w-full h-full font-overpass">
                <CodePreviewer codeString={codeStringSTL} />
              </div>
            )}
            {showImplementation && (
              <div className="show_code w-full h-full font-overpass">
                <CodePreviewer codeString={codeStringImplementation} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
