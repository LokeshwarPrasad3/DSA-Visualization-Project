import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const QueueVisualize = () => {
  // all references
  const numberContainerRef = useRef(null);
  const inputRef = useRef(null);
  const AllQueueParentRef = useRef(null);
  // const emptyQueueRef = useRef(null);
  const numberPushAnimateStartRef = useRef(null);
  const noPopAnimationRef = useRef(null);
  const operationsDivRef = useRef(null);

  // ref current
  const numberPushAnimateStart = numberPushAnimateStartRef.current;
  // const noPopAnimation = noPopAnimationRef.current;
  const AllQueueParent = AllQueueParentRef.current;
  // const operationsDiv = operationsDivRef.current;

  const [inputPushValue, setInputPushValue] = useState('');
  const [currentQueue, setCurrentQueue] = useState([]);

  // use enter then push value
  const pushValueToQueue = () => {
    if (inputPushValue === '') {
      toast.error('Enter Input First!!');
      return;
    }

    setInputPushValue('');
    setTimeout(() => {
      setCurrentQueue((prevValues) => [...prevValues, inputPushValue]);
      inputRef.current.focus();
    }, 1000);

    numberPushAnimateStart.style.transition = 'none'; // Remove any existing transition
    numberPushAnimateStart.style.display = 'block'; // Ensure the number container is visible
    numberPushAnimateStart.style.transform = ''; // Reset any previous transform
    numberPushAnimateStart.innerHTML = inputPushValue;

    const targetElement = AllQueueParentRef.current.lastChild;

    // Get the position of the target element
    const targetRect = targetElement.getBoundingClientRect();

    // Calculate the distance to move relative to the current position of the number container
    const deltaX =
      targetRect.left - numberPushAnimateStart.getBoundingClientRect().left;
    const deltaY =
      targetRect.top - 10 - numberPushAnimateStart.getBoundingClientRect().top;

    // Apply transition to animate the movement
    numberPushAnimateStart.style.transition = 'transform 1s ease-out';

    // Move the number container to the target position
    requestAnimationFrame(() => {
      numberPushAnimateStart.style.transform = `translate(${deltaX + 20}px, ${deltaY}px) `;
    });

    // Remove the transition and hide the number container after 1 second
    setTimeout(() => {
      numberPushAnimateStart.style.transition = 'none';
      numberPushAnimateStart.style.display = 'none';
    }, 1000);
  };

  // function to remove value from front (pop)
  const popValueFromQueue = () => {
    if (currentQueue.length === 0) {
      toast.error('Queue is empty!!');
      return;
    }

    const firstChildOfQueue = AllQueueParent.firstChild;
    // const noOfChild = AllStackParent.childElementCount;
    // console.log(noOfChild);

    const newNumberElement = document.createElement('div');
    newNumberElement.style.fontSize = '1.5rem';
    newNumberElement.style.position = 'relative';
    newNumberElement.style.top = '1rem';
    newNumberElement.style.left = '1.5rem';
    newNumberElement.style.color = 'whilte'; // Change text color to contrast with background
    newNumberElement.style.transition = 'all 1s ease-out';
    AllQueueParent.insertBefore(newNumberElement, firstChildOfQueue);
    firstChildOfQueue.textContent = ''; // Clear text content of firstChildOfQueue
    newNumberElement.innerHTML = currentQueue[0];
    console.log(newNumberElement);

    AllQueueParent.insertBefore(newNumberElement, newNumberElement);

    // Move the number container to the target position
    requestAnimationFrame(() => {
      newNumberElement.style.transform = 'translateY(-200px)';
    });

    setTimeout(() => {
      var firstChild = AllQueueParent.firstChild;
      AllQueueParent.removeChild(firstChild);
      const totalChild = AllQueueParent.childElementCount;
      if (totalChild > 1) {
        setCurrentQueue((prevQueue) => prevQueue.slice(1));
      }
    }, 1000);
  };

  // show front of queue
  const showFrontOfQueue = () => {
    if (currentQueue.length === 0) {
      toast.error('Queue is empty!!');
      return;
    }
    const frontChild = AllQueueParent.firstChild;
    console.log(frontChild);
    frontChild.style.background = 'rgb(234 88 12)';
    setTimeout(() => {
      frontChild.style.background = 'none';
    }, 1000);
  };
  const showRearOfQueue = () => {
    if (currentQueue.length === 0) {
      toast.error('Queue is empty!!');
      return;
    }
    const secondLastChild = AllQueueParent.lastChild.previousSibling;

    secondLastChild.style.background = 'rgb(37 99 235)';
    setTimeout(() => {
      secondLastChild.style.background = 'none';
    }, 1000);
  };

  return (
    <>
      <div className="queue_visualize_container flex flex-col flex-wrap h-auto md:h-screen font-overpass">
        <div className="content_visualization h-full mb-12">
          <div
            ref={operationsDivRef}
            className="operations mt-5 flex justify-center items-center gap-2"
          >
            <div
              ref={numberContainerRef}
              className="number-push-container text-[1.8rem] absolute top-[9vh] left-[38vw]"
            ></div>
            <div className="push-operation flex justify-center items-center gap-1">
              <input
                onKeyDown={() => pushValueToQueue}
                ref={inputRef}
                onChange={(e) => setInputPushValue(e.target.value)}
                value={inputPushValue}
                className="push-input h-8 w-16 p-1 bg-transparent border-[1px] border-gray-400 text-xl focus:outline-none"
                type="text"
              />
              <button
                onClick={pushValueToQueue}
                id="pushButton"
                className=" w-16 py-[5px] px-[14px] h-8 text-lg border-none cursor-pointer bg-green-600"
              >
                Push
              </button>
            </div>
            <div className="pop-operation">
              <button
                onClick={popValueFromQueue}
                id="popButton"
                className="queue_button w-16 py-[5px] px-[14px] h-8 text-lg border-none cursor-pointer bg-red-600 "
              >
                Pop
              </button>
            </div>
            <div className="top-operation">
              <button
                onClick={showFrontOfQueue}
                id="frontButton"
                className="queue_button w-16 py-[5px] px-[14px] h-8 text-lg border-none cursor-pointer bg-orange-600"
              >
                Front
              </button>
            </div>
            <div className="rear-operation">
              <button
                onClick={showRearOfQueue}
                id="rearButton"
                className="queue_button w-16 py-[5px] px-[14px] h-8 text-lg border-none cursor-pointer bg-blue-600"
              >
                Rear
              </button>
            </div>
          </div>
          <span
            ref={numberPushAnimateStartRef}
            className="relative text-xl"
          ></span>
          <div
            ref={AllQueueParentRef}
            className="show-visualization justify-center mt-10 md:mt-24 flex items-center w-full"
          >
            {/* queue box pushed dynamically here */}
            {currentQueue.map((queue, index) => {
              return (
                <div
                  key={index}
                  className="queue flex justify-center items-center text-xl w-10 h-10 font-signika border-[1px] border-white"
                >
                  {queue}
                </div>
              );
            })}

            <span
              ref={noPopAnimationRef}
              className="
              "
            ></span>

            {/* <div
              ref={emptyQueueRef}
              className={`empty_queue ${
                currentQueue.length === 0 ? 'flex' : 'hidden'
              } justify-center items-center text-[2rem] w-16 h-12 border-[1px] border-white`}
            ></div> */}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default QueueVisualize;
