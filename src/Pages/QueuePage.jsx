import { useEffect } from 'react';
import QueueMainContent from '../Components/Queue/QueueMainContent';

const QueuePage = () => {

  
  useEffect(() => {
    document.title = 'Queue • DSA Visualization Online';
  }, []);

  return (
    <>
      <div className="queue_container mt-10">
        <h1 className="heading text-center text-2xl font-overpass">
          🚀 Queue Visualization
        </h1>
        <QueueMainContent />
      </div>
    </>
  );
};

export default QueuePage;
