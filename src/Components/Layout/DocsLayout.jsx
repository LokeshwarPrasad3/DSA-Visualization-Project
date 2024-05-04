import CodePreviewer from '../ui/CodePreviewer';
import { useState } from 'react';
import { useRef } from 'react';
import toast from 'react-hot-toast';

const Docs = ({ codeStringImplementation, codeStringSTL, Documentation }) => {
  const copiedTextRef = useRef(null);

  const [showDocs, setShowDocs] = useState(true);
  const [showImplementation, setShowImplementation] = useState(false);
  const [showSTL, setShowSTL] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  // handle copy botton
  const handleCopyButton = () => {
    setShowCopied(!showCopied);
    // copy to clipboard
    navigator.clipboard.writeText(copiedTextRef.current.innerText).then(() => {
      toast.success('Successfully Copied Code!!');
    });
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

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
      <div className="docs_container_part h-screen w-[96vw] md:w-[60vw] font-overpass ">
        <div
          className="stack_menu_container h-[80vh] 
        "
        >
          <div className="docs_menu_row flex justify-between">
            <ul className="menu_list flex gap-3">
              <li
                onClick={() => showStackDescription(1)}
                className="bg-slate-700 text-lg shadow-sm pt-1 shadow-blue-700 cursor-pointer hover:bg-blue-900 hover:shadow-sm hover:shadow-blue-600 px-3 transition-all duration-200"
              >
                Docs
              </li>
              <li
                onClick={() => showStackDescription(2)}
                className="bg-slate-700 text-lg shadow-sm pt-1 shadow-blue-700 cursor-pointer hover:bg-blue-900 hover:shadow-sm hover:shadow-blue-600 px-3 transition-all duration-200"
              >
                STL
              </li>
              <li
                onClick={() => showStackDescription(3)}
                className="bg-slate-700 text-lg shadow-sm pt-1 shadow-blue-700 cursor-pointer hover:bg-blue-900 hover:shadow-sm hover:shadow-blue-600 px-3 transition-all duration-200"
              >
                Implement
              </li>
            </ul>
            <div className="copy_button_container relative right-3 top-[1px]">
              {showCopied ? (
                <button>
                  <i className="ri-check-line text-lg text-[0.9rem] relative top-[1px] mr-[1px]"></i>
                  <span className="text-[1rem]">Copied</span>
                </button>
              ) : (
                <button className="relative top-1" onClick={handleCopyButton}>
                  <i className="ri-clipboard-line text-[0.95rem] "></i>
                  <span className="text-[1rem] pl-1">Copy</span>
                </button>
              )}
            </div>
          </div>
          <div className="content_by_menu text-[0.9rem] flex justify-center">
            {showDocs && (
              <div
                ref={copiedTextRef}
                className="show_code w-full h-full font-overpass shadow-sm shadow-blue-200"
              >
                <CodePreviewer codeString={Documentation} />
              </div>
            )}
            {showSTL && (
              <div
                ref={copiedTextRef}
                className="show_code w-full h-full font-overpass shadow-sm shadow-blue-200"
              >
                <CodePreviewer codeString={codeStringSTL} />
              </div>
            )}
            {showImplementation && (
              <div
                ref={copiedTextRef}
                className="show_code w-full h-full font-overpass shadow-sm shadow-blue-200"
              >
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
