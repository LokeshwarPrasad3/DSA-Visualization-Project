import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const StackVisualize = () => {
  // for always focus on input
  const inputRef = useRef(null);
  const numberContainerRef = useRef(null);
  const AllStackParentRef = useRef(null);
  const emptyStackRef = useRef(null);

  // current element
  const numberContainer = numberContainerRef.current;
  const AllStackParent = AllStackParentRef.current;
  const emptyStack = emptyStackRef.current;

  // input for push value in stack
  const [inputPushValue, setInputPushValue] = useState('');
  // all stack to be display
  const [currentStack, setCurrentStack] = useState([]);

  // -------- FUNCTIONS DEFINED HERE ----------
  // 1. Push Values to Stack
  const pushValueToStack = () => {
    if (inputPushValue === '') {
      toast.error('Enter Right Value');
      inputRef.current.focus();
      return;
    }
    // push value to array currentStack
    const numberToPush = inputPushValue;
    setInputPushValue('');
    setTimeout(() => {
      setCurrentStack((prev) => [numberToPush, ...prev]);
      inputRef.current.focus();
    }, 1000);

    // Reset the position and display properties of the number container
    numberContainer.innerHTML = inputPushValue;
    numberContainer.style.transition = 'none'; // Remove any existing transition
    numberContainer.style.display = 'block'; // Ensure the number container is visible
    numberContainer.style.transform = ''; // Reset any previous transform
                     
    // Get the target element
    let targetElement = AllStackParent.firstElementChild;
    if (!targetElement) {
      console.log('nahi hai');
      targetElement = emptyStack;
    }
        
    // Get the position of the target element
    const targetRect = targetElement.getBoundingClientRect();

    // Calculate the distance to move relative to the current position of the number container
    const deltaX =
      targetRect.left - numberContainer.getBoundingClientRect().left;
    const deltaY =
      targetRect.top - 10 - numberContainer.getBoundingClientRect().top;

    // Apply transition to animate the movement
    numberContainer.style.transition = 'transform 1s ease-out';

    // Move the number container to the target position
    requestAnimationFrame(() => {
      numberContainer.style.transform = `translate(${
        deltaX + 40
      }px, ${deltaY}px) `;
    });

    // Remove the transition and hide the number container after 1 second
    setTimeout(() => {
      numberContainer.style.transition = 'none';
      numberContainer.style.display = 'none';
    }, 1000);
  };

  // 2. Pop value from Stack
  const popValueFromStack = () => {
    if (currentStack.length === 0) {
      toast.error('Your Stack is empty!!');
      return;
    }
    const popedChild = AllStackParent.firstChild;
    // const noOfChild = AllStackParent.childElementCount;
    // console.log(noOfChild);

    const newNumberElement = document.createElement('span');
    newNumberElement.style.fontSize = '2rem';
    newNumberElement.style.position = 'relative';
    newNumberElement.style.transition = 'all 1s ease-out';
    newNumberElement.textContent = popedChild.textContent;
    popedChild.textContent = '';
    popedChild.appendChild(newNumberElement);

    // Move the number container to the target position
    requestAnimationFrame(() => {
      newNumberElement.style.transform = 'translateY(-200px)';
    });

    setTimeout(() => {
      if (popedChild) {
        setCurrentStack((prevStack) => prevStack.slice(1));

        if (AllStackParent.childElementCount === 1) {
          console.log(AllStackParent.childElementCount);
          emptyStack.style.display = 'block';
        }
      }
    }, 1000);
  };

  // 3. Show top of stack
  const showTopOfStack = () => {
    if (currentStack.length === 0) {
      toast.error('Your Stack is empty!!');
      return;
    }
    const TopElement = AllStackParent.firstElementChild;
    // console.log(TopElement)
    TopElement.style.background = 'rgb(93, 93, 243)';
    setTimeout(() => {
      TopElement.style.background = 'none';
    }, 1000);
  };

  useEffect(() => {
    const setPositionOfAnimatedNumber = () => {
      const pushInputRect = inputRef.current.getBoundingClientRect();
      const numberContainer = numberContainerRef.current;

      // Calculate the position of the number container relative to the push button
      const containerTop = pushInputRect.bottom - 10; // Adjust the value as needed
      const containerLeft = pushInputRect.left + 20;

      // Apply CSS styles to position the number container
      numberContainer.style.position = 'absolute';
      numberContainer.style.top = containerTop + 'px';
      numberContainer.style.left = containerLeft + 'px';
    };

    // Event listener for window resize (in case the position needs to be recalculated)
    window.addEventListener('resize', setPositionOfAnimatedNumber);

    // Call the function to position the number container initially
    setPositionOfAnimatedNumber();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', setPositionOfAnimatedNumber);
    };
  }, []);

  return (
    <>
      <div className="stack_visualize_container flex flex-col flex-wrap h-auto md:h-screen font-overpass">
        <div className="content_visualization h-full mb-12">
          <div className="operations mt-5 flex justify-center items-center gap-4">
            <div
              ref={numberContainerRef}
              className="number-push-container text-[1.8rem] absolute top-[9vh] left-[38vw]"
            ></div>
            <div className="push-operation flex justify-center items-center gap-1">
              <input
                onKeyDown={() => pushValueToStack}
                ref={inputRef}
                onChange={(e) => setInputPushValue(e.target.value)}
                value={inputPushValue}
                className="push-input h-8 w-16 p-1 bg-transparent border-[1px] border-gray-400 text-xl focus:outline-none"
                type="text"
              />
              <button
                onClick={pushValueToStack}
                id="pushButton"
                className="stack_button bg-green-600"
              >
                Push
              </button>
            </div>
            <div className="pop-operation">
              <button
                onClick={popValueFromStack}
                id="popButton"
                className="stack_button bg-red-600 "
              >
                Pop
              </button>
            </div>
            <div className="top-operation">
              <button
                onClick={showTopOfStack}
                id="topButton"
                className="stack_button bg-blue-600"
              >
                Top
              </button>
            </div>
          </div>

          <div
            ref={AllStackParentRef}
            className="show-visualization mt-20 md:mt-44 flex items-center w-full flex-col"
          >
            {/* stack box pushed dynamically here */}
            {currentStack.map((stack, index) => {
              return (
                <div
                  key={index}
                  className="stack flex justify-center items-center text-[2rem] w-[100px] h-[50px] border-2 border-solid border-white border-t-0 "
                >
                  {stack}
                </div>
              );
            })}

            <div
              ref={emptyStackRef}
              className={`empty_stack ${
                currentStack.length === 0 ? 'flex' : 'hidden'
              } justify-center items-center text-[2rem] w-24 h-12 border-2 border-white border-t-0`}
            ></div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default StackVisualize;
