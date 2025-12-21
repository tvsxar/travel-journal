import formatDate from "../utils/formatDate";

function TravelInfo({ currentTravel }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Image */}
      <div className="w-full overflow-hidden rounded-xl aspect-video shadow-xl">
        <img
          src={currentTravel.imageUrl}
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Title */}
      <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
        {currentTravel.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 mt-1 sm:text-base">
        <span>📅 {formatDate(currentTravel.visitedDate)}</span>
        <span>📍 {currentTravel?.visitedLocation?.join(", ")}</span>
      </div>

      {/* Story */}
      <p className="text-base leading-relaxed sm:text-lg text-gray-700 mb-10">
        {currentTravel.story}
      </p>
    </div>
  );
}

export default TravelInfo;
