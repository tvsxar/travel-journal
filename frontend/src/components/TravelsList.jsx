import TravelCard from "./TravelCard";

function TravelsList() {
  return (
    <div
      className="py-12 px-4 sm:px-12 lg:px-24 min-h-[85vh]
      grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
      gap-6 justify-items-center"
    >
      <TravelCard />
      <TravelCard />
      <TravelCard />
      <TravelCard />
      <TravelCard />
      <TravelCard />
    </div>
  );
}

export default TravelsList;
