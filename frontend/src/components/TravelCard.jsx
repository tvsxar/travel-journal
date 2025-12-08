import locationIcon from "../assets/location-outline.svg";
import heartFilledIcon from "../assets/heart.svg";
import heartIcon from "../assets/heart-outline.svg";
import formatDate from '../utils/formatDate';

function TravelCard({ travel }) {
  return (
    <div
      className="h-auto border border-gray-200 rounded-xl w-full md:max-w-sm overflow-hidden
    transition-shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer"
    >
      <div className="w-full relative">
        <img
          className="w-full h-52 sm:h-60 lg:h-72 object-cover rounded-t-xl"
          src={travel.imageUrl}
          alt={travel.title}
        />
        <div className="absolute right-2 top-2 bg-gray-100/50 border border-gray-200 p-1 rounded-md">
          <img
            src={travel.isFavourite ? heartFilledIcon : heartIcon}
            alt="like"
            className="w-6 h-6"
          />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 h-full">
        <div className="">
          <h3 className="font-bold line-clamp-1">{travel.title}</h3>

          <p className="text-gray-400 text-xs">{formatDate(travel.visitedDate)}</p>
        </div>

        <p className="text-sm text-gray-700 line-clamp-3">{travel.story}</p>

        <div className="flex flex-wrap gap-2">
          {travel.visitedLocation.map((loc) => (
            <div className="inline-flex items-center gap-1 bg-cyan-100 py-1 px-2 rounded-md w-max">
              <img className="w-5 h-auto" src={locationIcon} alt="locationIcon" />

              <p className="text-sm text-cyan-600">{loc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
