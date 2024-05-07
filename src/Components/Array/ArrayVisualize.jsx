import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { SelectOptionArrayInputTypes } from '../../data/ArrayData';

const ArrayVisualize = () => {
  // get size of array creation
  const [inputArraySize, setInputArraySize] = useState('');
  // type of array
  const [inputArrayType, setInputArrayType] = useState('Number');
  // original array show box
  const [originalArray, setOriginalArray] = useState([]);
  // temporary array inserted input by user
  const [tempArray, setTempArray] = useState([]);
  const [arrayInsertValues, setArrayInsertValues] = useState(
    Array(inputArraySize).fill(''),
  );
  // change button create to reset
  const [resetArray, setResetArray] = useState(false);
  // show hide array insert box
  const [showArrayInsertBox, setShowArrayInsertBox] = useState(true);
  // when clicked to create array size then dont show input value change to text
  const [toggleInputToText, setToggleInputToText] = useState(false);

  // ✅ Array Creation with User input
  const handleCreateArray = (e) => {
    const buttonName = e.target.innerText;
    setToggleInputToText(false);

    // when clicked to reset button reset all state
    if (buttonName === 'Reset') {
      setOriginalArray([]);
      setTempArray([]);
      setInputArraySize('');
      setInputArrayType('');
      setArrayInsertValues(['']);
      setResetArray(false);
      setShowArrayInsertBox(true);
      setToggleInputToText(false);
      return;
    }

    // if Create button clicked
    if (inputArraySize === '') {
      toast.error('Enter Valid Input!!');
      return;
    }

    if (inputArraySize > 20) {
      toast.error('Max 20 elements !!');
      return;
    }

    setToggleInputToText(true);
    const BasicArray = [];
    for (let i = 0; i < inputArraySize; i++) {
      const newElement = {
        index: i,
        value: 0,
      };
      BasicArray.push(newElement);
    }

    const basicArrayElements = [...BasicArray];
    setOriginalArray(basicArrayElements);
    setResetArray(true);
    setShowArrayInsertBox(true);
    // notified
    toast('Good Job!!!', {
      icon: '🚀',
    });
  };

  // ✅ when insert values then onchange method description
  const handleOnChangeInputArrayInsertion = (index, inputValue) => {
    let storeTypeInputValue = '';
    // check inputValue must by their types inputs
    if (!isNaN(parseFloat(inputValue))) {
      // Input is a number
      storeTypeInputValue = 'Number';
    }
    // check type is character?
    else if (inputValue.length === 1) {
      // Input is a string
      storeTypeInputValue = 'Character';
    }

    // console match or not
    // console.log(
    //   `Type and Input Type Match ${storeTypeInputValue}  ${inputArrayType} - ${storeTypeInputValue === inputArrayType}`,
    // );

    // if input type not match then show error
    if (storeTypeInputValue !== inputArrayType) {
      toast.error('Enter Valid Type Element!!');
      return;
    }

    // Create a new array element
    const newArr = {
      index: index,
      value: inputValue,
    };

    setTempArray((prevElements) => {
      const prevArray = [...prevElements];

      // Check if the index exists in tempArray
      if (prevArray[index]) {
        // If index value already exists, update its value
        prevArray[index].value = inputValue;
      } else {
        // If index value doesn't exist, insert the new array element
        prevArray[index] = newArr;
      }

      return prevArray;
    });

    // Update arrayInsertValues state
    const newArrayInsertValues = [...arrayInsertValues];
    newArrayInsertValues[index] = inputValue;
    setArrayInsertValues(newArrayInsertValues);
  };

  // ✅ after succesfully inserted input push to main array
  const handlePushValuesToArray = () => {
    if (tempArray.length === 0) {
      toast.error('Enter Value First!!');
      return;
    }

    // if any one is empty field
    // onvert inputArraySize by using +
    if (tempArray.length !== +inputArraySize) {
      toast.error('Please Enter Valid Input!!');
      return;
    }

    // take tempArray input which inserted by user
    const arrElements = [...tempArray];
    setOriginalArray(arrElements); // set for main array
    setArrayInsertValues(Array(tempArray.length).fill('')); // Reset all input fields to empty
    setShowArrayInsertBox(false);
  };

  return (
    <>
      <div className="array_visualize_container flex gap-6 flex-col flex-wrap my-12 h-auto md:h-screen ">
        <div className="array_inputs flex-3 flex-col gap-3">
          {toggleInputToText ? (
            <div>
              <p className="focus:outline-none bg-slate-900 border-[1px] border-gray-600 pl-2 w-56 text-center">
                <span className="opacity-70">Type :</span>{' '}
                <span className="opacity-80">{inputArrayType}</span>
              </p>
              <p className="focus:outline-none bg-slate-900 border-[1px] border-gray-600 pl-2 w-56 text-center">
                <span className="opacity-70">Size :</span>{' '}
                <span className="opacity-70">{inputArraySize}</span>
              </p>
            </div>
          ) : (
            <div className="flex-3 flex-col gap-3">
              <select
                onChange={(e) => setInputArrayType(e.target.value)}
                value={inputArrayType}
                className="focus:outline-none  bg-slate-900 border-[1px] border-gray-600 pl-2 w-56 text-xl text-white "
              >
                {SelectOptionArrayInputTypes.map(({ type }) => (
                  <option className="" key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <input
                className="focus:outline-none text-xl bg-slate-900 border-[1px] border-gray-600 pl-2 w-56 "
                type="number"
                value={inputArraySize}
                onChange={(e) =>
                  setInputArraySize(e.target.value < 1 ? '' : e.target.value)
                }
                placeholder="Enter Array Size :"
              />
            </div>
          )}
          <button
            onClick={handleCreateArray}
            className="custom_button text-[1rem] mt-4"
          >
            {resetArray ? 'Reset' : 'Create'}
          </button>
        </div>
        <div className="perform_action flex-3">
          {originalArray.map(({ index, value }) => {
            return (
              <React.Fragment key={index}>
                <div className="array_box flex-4 w-8">
                  {showArrayInsertBox && (
                    <input
                      type="text"
                      placeholder="❓"
                      value={arrayInsertValues[index]}
                      onChange={(e) =>
                        handleOnChangeInputArrayInsertion(index, e.target.value)
                      }
                      className="w-8 placeholder:text-sm mx-1 px-0 py-0 mb-2 bg-slate-900  border border-white focus:outline-none text-center"
                    />
                  )}
                  <span className="border px-1 w-full text-center ">
                    {value}
                  </span>
                  <span className="text-sm opacity-60 text-center">
                    {index}
                  </span>
                </div>
              </React.Fragment>
            );
          })}
          {originalArray.length > 0 && showArrayInsertBox && (
            <span className="">
              <i
                onClick={handlePushValuesToArray}
                className="ri-arrow-right-line relative top-[-1.7rem] left-5 bg-green-500 hover:bg-gray-400 p-1 rounded-full text-xl"
              ></i>
            </span>
          )}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ArrayVisualize;
