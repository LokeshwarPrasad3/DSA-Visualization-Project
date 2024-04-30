import { useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const QueueVisualize = () => {
  // all references
  const numberContainerRef = useRef(null);
  const inputRef = useRef(null);
  const AllQueueParentRef = useRef(null);
  const emptyQueueRef = useRef(null);

  const [inputPushValue, setInputPushValue] = useState('');
  const [currentQueue, setCurrentQueue] = useState([]);

  // use enter then push value
  const pushValueToQueue = () => {};
  const popValueFromQueue = () => {};
  const showFrontOfQueue = () => {};
  const showRearOfQueue = () => {};

  return (
    <>
      <div className="queue_visualize_container flex flex-col flex-wrap h-auto md:h-screen font-overpass">
        <div className="content_visualization h-full mb-12">
          <div className="operations mt-5 flex justify-center items-center gap-2">
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

          <div
            ref={AllQueueParentRef}
            className="show-visualization mt-20 md:mt-44 flex items-center w-full flex-col"
          >
            {/* queue box pushed dynamically here */}
            {currentQueue.map((queue, index) => {
              return (
                <div
                  key={index}
                  className="queue flex justify-center items-center text-[2rem] w-[100px] h-[50px] border-2 border-solid border-white border-t-0 "
                >
                  {queue}
                </div>
              );
            })}

            <div
              ref={emptyQueueRef}
              className={`empty_queue ${
                currentQueue.length === 0 ? 'flex' : 'hidden'
              } justify-center items-center text-[2rem] w-24 h-12 border-2 border-white border-t-0`}
            ></div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default QueueVisualize;
