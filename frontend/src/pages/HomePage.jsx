import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import TravelsList from "../components/TravelsList.jsx"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../store/slices/authSlice.js";
import { editTravel, fetchTravels } from "../store/slices/travelSlice.js";
import { Navigate } from 'react-router-dom';
import { useEffect } from "react";

function HomePage() {
  const dispatch = useDispatch();
  const { user, userLoading } = useSelector(state => state.auth);
  const { travels, travelLoading, travelError } = useSelector(state => state.travel);

  useEffect(() => {
    dispatch(fetchTravels())
  }, [dispatch])

  function handleLogout() {
    dispatch(logoutUser())
  }



  // if userLoading, show loading indicator
  if (userLoading) {
    return (
      <div
        className="mx-auto flex min-h-screen items-center 
      justify-center p-4"
      >
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  // if user is not logged in, navigate to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // if travelLoading, show loading indicator
  if (travelLoading) {
    return (
      <div
        className="mx-auto flex min-h-screen items-center 
      justify-center p-4"
      >
        <p className="text-xl font-semibold text-gray-600">Loading travels...</p>
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
        <p className="text-xl font-semibold text-red-600">Error: {travelError}</p>
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
    <div className="min-h-screen">
      <Navbar
      handleLogout={handleLogout} />

      <TravelsList
      travels={travels}
      travelLoading={travelLoading}
      travelError={travelError}
      editTravel={editTravel} />

      <Footer />
    </div>
  )
}

export default HomePage
