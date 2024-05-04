import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const LinkedListVisualize = () => {
  const inputDataRef = useRef(null);
  const [inputLinkedlistNodeData, setInputLinkedlistNodeData] = useState('');

  const validateInputNodeData = () => {
    if (inputLinkedlistNodeData === '') {
      toast.error('Please Enter Valid Input!!');
      throw new Error('Invalid Input Value');
    }
    inputDataRef.current.focus();
  };

  const handleInsertAtHead = () => {
    validateInputNodeData();
    const inputData = inputLinkedlistNodeData;
    console.log(`Input data is ${inputData}`);
    setInputLinkedlistNodeData('');
  };

  const handleInsertAtMiddle = () => {
    validateInputNodeData();
    const inputData = inputLinkedlistNodeData;
    console.log(`Input data is ${inputData}`);
    setInputLinkedlistNodeData('');
  };

  const handleInsertAtTail = () => {
    validateInputNodeData();
    const inputData = inputLinkedlistNodeData;
    console.log(`Input data is ${inputData}`);
    setInputLinkedlistNodeData('');
  };

  return (
    <>
      <div className="linkedlist_visualize_container flex flex-col flex-wrap h-auto md:h-screen font-overpass">
        <div className="content_visualization h-full mb-12">
          <div className="operations mt-5 flex flex-col justify-center items-center gap-3">
            {/* <div className="number-push-container text-[1.8rem] absolute top-[9vh] left-[38vw]"></div> */}
            <div className="push-operation flex justify-center items-center">
              <input
                ref={inputDataRef}
                value={inputLinkedlistNodeData}
                onChange={(e) => setInputLinkedlistNodeData(e.target.value)}
                className="push-input h-8 w-44 p-1 pl-2 placeholder:text-[1rem] bg-transparent border-[1px] border-gray-400 text-xl focus:outline-none"
                type="text"
                placeholder="Enter Data Value  "
              />
            </div>
            <div className="pop-operation">
              <button
                id="popButton"
                onClick={handleInsertAtHead}
                className="linkedlist_button w-44 py-[5px] px-[14px] h-8 text-lg border-none cursor-pointer bg-red-600 hover:bg-red-500 "
              >
                Insert At Head
              </button>
            </div>
            <div className="top-operation">
              <button
                id="frontButton"
                onClick={handleInsertAtMiddle}
                className="linkedlist_button w-44 py-[5px] px-[14px] h-8 text-lg border-none cursor-pointer bg-orange-600 hover:bg-orange-500"
              >
                Insert At Middle
              </button>
            </div>
            <div className="rear-operation">
              <button
                id="rearButton"
                onClick={handleInsertAtTail}
                className="linkedlist_button w-44 py-[5px] px-[14px] h-8 text-lg border-none cursor-pointer bg-blue-600 hover:bg-blue-500"
              >
                Insert At Tail
              </button>
            </div>
          </div>
          {inputLinkedlistNodeData !== '' && (
            <div className="show_current_linkedlist flex w-full mt-5">
              <span className="w-[50%] text-center border-[1px] py-1 overflow-auto">
                {inputLinkedlistNodeData || ''}
              </span>
              <span className="w-[50%] text-center border-[1px] py-1">
                Next
              </span>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default LinkedListVisualize;
