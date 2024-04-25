import React, { useState } from 'react';
import Docs from '../Components/Array/ArrayDocs';
import toast, { Toaster } from 'react-hot-toast';

const ArrayPage = () => {
  const [inputArraySize, setInputArraySize] = useState('');
  const [originalArray, setOriginalArray] = useState([]);
  const [tempArray, setTempArray] = useState([]);
  const [inputElementValue, setInputElementValue] = useState();
  const [resetArray, setResetArray] = useState(false);

  const handleCreateArray = (e) => {
    const buttonName = e.target.innerText;
    if (buttonName === 'Reset') {
      setOriginalArray([]);
      setTempArray([]);
      setInputArraySize('');
      setInputElementValue('');
      setResetArray(false);
      return;
    }
    if (inputArraySize === '') {
      toast.error('Enter Valid Input!!');
      return;
    }
    const BasicArray = [];
    for (let i = 0; i < inputArraySize; i++) {
      const newElement = {
        index: i,
        value: 0,
      };
      BasicArray.push(newElement);
    }

    console.log(BasicArray);
    const basicArrayElements = [...BasicArray];
    setOriginalArray(basicArrayElements);
    setInputArraySize('');
    setResetArray(true);
  };

  const handleInputElementValues = (index, inputValue) => {
    if (originalArray.length <= tempArray.length) {
      tempArray[index].value = inputValue;
      return;
    }
    const newArr = {
      index: index,
      value: inputValue,
    };
    setTempArray((prevElement) => [...prevElement, newArr]);
    // setTempArray((prevElements) => {
    //   const prevArray = [...prevElements];
    //   prevArray[index].element = inputValue;
    //   return prevArray;
    // });
  };

  const handlePushValuesToArray = () => {
    if (tempArray.length === 0) {
      toast.error('Enter Value First!!');
      return;
    }
    const arrElements = [...tempArray];
    console.log(arrElements);
    setOriginalArray(arrElements);
    setInputElementValue('');
  };

  return (
    <>
      <div className="array_container cursor-pointer mt-10">
        <h1 className="heading text-center text-3xl font-bold font-overpass">
          Array Visualization
        </h1>
        <div className="array_main_content  flex flex-col md:flex-row mt-12 justify-around items-center w-full ">
          <div className="array_visualize_container flex gap-6 flex-col flex-wrap h-auto md:h-screen ">
            <div className="array_inputs flex-3 gap-3">
              <input
                className="focus:outline-none bg-slate-900 border-[1px] border-gray-600 pl-2 w-36 "
                type="number"
                value={inputArraySize}
                onChange={(e) =>
                  setInputArraySize(e.target.value < 1 ? '' : e.target.value)
                }
                placeholder="Enter Array Size :"
              />
              <button
                onClick={handleCreateArray}
                className="custom_button text-[1rem] "
              >
                {resetArray ? 'Reset' : 'Create'}
              </button>
            </div>
            <div className="perform_action flex-3">
              {originalArray.map(({ index, value }) => {
                return (
                  <React.Fragment key={index}>
                    <div className="array_box flex-4 w-8">
                      {resetArray && (
                        <input
                          type="text"
                          placeholder="❓"
                          value={inputElementValue}
                          onChange={(e) =>
                            handleInputElementValues(index, e.target.value)
                          }
                          className="w-8 placeholder:text-sm mx-1 px-0 py-0 mb-2 bg-slate-900  border border-white focus:outline-none text-center"
                        />
                      )}
                      <span className="border px-1 w-full text-center">
                        {value}
                      </span>
                      <span className="text-sm opacity-60 text-center">
                        {index}
                      </span>
                    </div>
                  </React.Fragment>
                );
              })}
              {originalArray.length > 0 && resetArray && (
                <span className="">
                  <i
                    onClick={handlePushValuesToArray}
                    className="ri-arrow-right-line relative top-[-1.7rem] left-5 bg-green-500 hover:bg-gray-400 p-1 rounded-full text-xl"
                  ></i>
                </span>
              )}
            </div>
          </div>
          <div className="array_docs_container">
            <Docs />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ArrayPage;
