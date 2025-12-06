import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import TravelsList from "../components/TravelsList.jsx"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../store/slices/authSlice.js";
import { editTravel } from "../store/slices/travelSlice.js";
import { Navigate } from 'react-router-dom';
import { useEffect } from "react";

function HomePage() {
  const dispatch = useDispatch();
  const { user, userLoading } = useSelector(state => state.auth);
  const { travels, travelLoading, travelError } = useSelector(state => state.travel);

  useEffect(() => {
    console.log(user)
  })

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
