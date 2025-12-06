import TravelCard from "./TravelCard";

function TravelsList({travels, travelError, travelLoading, editTravel}) {

  // if travelLoading, show loading indicator
  if (travelLoading) {
    return (
      <div
        className="mx-auto flex min-h-screen items-center 
      justify-center p-4"
      >
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  // if travelError, show loading indicator
  if (travelError) {
    return (
      <div
        className="mx-auto flex min-h-screen items-center 
      justify-center p-4"
      >
        <p className="text-xl font-semibold text-red-600">Error, please try again.</p>
      </div>
    );
  }

  // if no travels yet
  if (!travels || travels.length === 0) {
    return (
      <div className="mx-auto flex min-h-screen items-center justify-center p-4">
        <p className="text-xl font-semibold text-gray-500">
          No travels found.
        </p>
      </div>
    );
  }

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
