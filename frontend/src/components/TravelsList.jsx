import TravelCard from "./TravelCard";

function TravelsList({travels}) {
  return (
    <div
      className="py-12 px-4 sm:px-12 lg:px-25
      grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
      gap-8 justify-items-center"
    >
      {travels.map(travel => (
        <TravelCard key={travel._id} travel={travel} />
      ))}
    </div>
  );
}

export default TravelsList;
