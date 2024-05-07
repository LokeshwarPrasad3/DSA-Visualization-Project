import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const LinkedListVisualize = () => {
  const insertDataToListArrayRef = useRef(null);
  const [inputLinkedlistNodeData, setInputLinkedlistNodeData] = useState('');
  const [linkedListArray, setLinkedListArray] = useState([]);

  const tempLinkedList = [
    { value: 1, next: true },
    { value: 2, next: true },
    { value: 4, next: true },
    { value: 5, next: true },
    { value: 6, next: false },
  ];

  const validateInputNodeData = () => {
    if (inputLinkedlistNodeData === '') {
      toast.error('Please Enter Valid Input!!');
      throw new Error('Invalid Input Value');
    }
    insertDataToListArrayRef.current.focus();
  };

  const handleInsertAtHead = () => {
    if (linkedListArray.length > 10) {
      toast.error('Max 10 Elements only !!');
      return;
    }
    validateInputNodeData();
    const insertDataToListArray = {
      value: inputLinkedlistNodeData,
      next: linkedListArray.length === 0 ? false : true,
    };
    setLinkedListArray((prevList) => [insertDataToListArray, ...prevList]);
    console.log(`Input data is ${insertDataToListArray}`);
    setInputLinkedlistNodeData('');
  };

  const handleInsertAtMiddle = () => {
    if (linkedListArray.length > 10) {
      toast.error('Max 10 Elements only !!');
      return;
    }
    validateInputNodeData();
    const insertDataToListArray = {
      value: inputLinkedlistNodeData,
      next: true,
    };
    setLinkedListArray((prevList) => [...prevList, insertDataToListArray]);
    console.log(`Input data is ${insertDataToListArray}`);
    setInputLinkedlistNodeData('');
  };

  const handleInsertAtTail = () => {
    if (linkedListArray.length > 10) {
      toast.error('Max 10 Elements only !!');
      return;
    }
    validateInputNodeData();
    const insertDataToListArray = {
      value: inputLinkedlistNodeData,
      next: false,
    };
    const tempList = linkedListArray.map((item) => {
      return { ...item, next: true };
    });
    tempList.push(insertDataToListArray);

    setLinkedListArray(tempList);
    console.log(`Input data is ${insertDataToListArray}`);
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
                ref={insertDataToListArrayRef}
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
          <div className="show_current_linkedlist flex justify-center items-center w-full mt-5">
            <span className="w-24 text-center border-[1px] h-[30px] overflow-hidden py-1 ">
              {inputLinkedlistNodeData || '  '}
            </span>
            <span className="w-24 text-center border-[1px] h-[30px] overflow-hidden py-1">
              Next
            </span>
          </div>
          <div className="linkedlist_elements flex justify-center items-center mt-10">
            {linkedListArray.map(({ value, next }, index) => (
              <React.Fragment key={index}>
                <div className="node h-10 min-w-10 px-1 border-2 flex justify-center items-center">
                  {value}
                </div>
                <i
                  className={`ri-arrow-right-line ${next ? 'block' : 'hidden'} text-2xl `}
                ></i>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default LinkedListVisualize;
