import TravelCard from "./TravelCard";
import { Link } from "react-router-dom";

function TravelsList({ travels }) {
  return (
    <div
      className="max-w-7xl mx-auto py-12 px-4 sm:px-12 lg:px-25
      grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
      gap-8 items-stretch"
    >
      {travels.map((travel) => (
        <Link key={travel._id} to={"/travel/" + travel._id} className="flex w-full">
          <TravelCard travel={travel} />
        </Link>
      ))}
    </div>
  );
}

export default TravelsList;
