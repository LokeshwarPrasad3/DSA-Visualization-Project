import StackVisualize from './StackVisualize'
import Docs from './Docs'

const MainContent = () => {
  return (
    <>
       <div className="main_content flex mt-12 justify-around items-center w-full ">
        {/* <!-- left part --> */}
       <StackVisualize/>
{/* right part */}
       <Docs/>
        
      </div>
    </>
  )
}

export default MainContent
