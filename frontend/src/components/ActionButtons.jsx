import heartFilledIcon from "../assets/heart.svg";
import heartIcon from "../assets/heart-outline.svg";
import { Link } from "react-router-dom";

function ActionButtons({
  id,
  currentTravel,
  handleDelete,
  handleToggleFavourite,
}) {
  return (
    <div className="flex gap-4">
      <Link
        to={`/edit/${id}`}
        className="px-6 py-2 bg-cyan-500 rounded-xl p-2
         hover:bg-cyan-500/70 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)] 
         active:scale-105 text-white transition"
      >
        Edit
      </Link>

      <button
        onClick={handleDelete}
        className="px-6 py-2 cursor-pointer text-white bg-red-500 rounded-xl p-2
         hover:bg-red-500/70 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.7)] 
         active:scale-105 transition"
      >
        Delete
      </button>

      <button
        onClick={handleToggleFavourite}
        className="bg-gray-400/50 border border-gray-200 py-1 px-2 rounded-xl cursor-pointer"
      >
        <img
          src={currentTravel.isFavourite ? heartFilledIcon : heartIcon}
          alt="heart"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
}

export default ActionButtons;
