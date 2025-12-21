import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTravelById,
  deleteTravel,
  editTravel,
} from "../store/slices/travelSlice";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ActionButtons from "../components/ActionButtons";
import TravelInfo from '../components/TravelInfo';

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

  function handleToggleFavourite(e) {
    e.preventDefault();

    dispatch(
      editTravel({
        travelId: id,
        travelData: { isFavourite: !currentTravel.isFavourite },
      })
    );
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
        {/* Back button */}
        <Link
          to="/"
          className="text-sm text-gray-600 hover:text-gray-900 mb-6 inline-block"
        >
          ← Back to travels
        </Link>

        <TravelInfo currentTravel={currentTravel} />

        <ActionButtons
          id={id}
          currentTravel={currentTravel}
          handleDelete={handleDelete}
          handleToggleFavourite={handleToggleFavourite}
        />
      </div>

      <Footer />
    </div>
  );
}

export default TravelInfoPage;
