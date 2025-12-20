import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTravelById, deleteTravel } from "../store/slices/travelSlice";
import { useEffect } from "react";
import formatDate from "../utils/formatDate";
import heartFilledIcon from "../assets/heart.svg";
import heartIcon from "../assets/heart-outline.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TravelInfoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentTravel, travelLoading, travelError } = useSelector(
    (state) => state.travel
  );

  useEffect(() => {
    dispatch(fetchTravelById(id));
  }, [dispatch, id]);

  function handleDelete(e) {
    e.preventDefault();

    dispatch(deleteTravel(id))
      .unwrap()
      .then((res) => navigate("/"));
  }

  // if travelLoading, show loading indicator
  if (travelLoading || !currentTravel) {
    return (
      <div
        className="mx-auto flex min-h-screen items-center 
      justify-center p-4"
      >
        <p className="text-xl font-semibold text-gray-600">Travel loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="mx-auto px-4 sm:px-12 lg:px-25 py-10 flex-1">
        {/* Back */}
        <Link
          to="/"
          className="text-sm text-gray-600 hover:text-gray-900 mb-6 inline-block"
        >
          ← Back to travels
        </Link>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl aspect-video shadow-xl">
          <img src={currentTravel.imageUrl} className="object-cover object-center w-full h-full" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-4">
          {currentTravel.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
          <span>📅 {formatDate(currentTravel.visitedDate)}</span>
          <span>📍 {currentTravel?.visitedLocation?.join(", ")}</span>
        </div>

        {/* Story */}
        <p className="text-gray-700 leading-relaxed mb-10">
          {currentTravel.story}
        </p>

        {/* Actions */}
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

          <button className="bg-gray-100/50 border border-gray-200 py-1 px-1.5 rounded-xl cursor-pointer">
            <img
              src={currentTravel.isFavourite ? heartFilledIcon : heartIcon}
              alt="heart"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TravelInfoPage;
