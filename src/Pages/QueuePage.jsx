import QueueMainContent from '../Components/Queue/QueueMainContent';

const QueuePage = () => {
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
