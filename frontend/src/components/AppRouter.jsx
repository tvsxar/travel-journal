import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AuthPage from '../pages/AuthPage'
import TravelFormPage from '../pages/TravelFormPage'
import { getCurrentUser } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function AppRouter() {
  const dispatch = useDispatch();

  // on component mount, get current user
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/register" element={<AuthPage isLogin={false} />} />

            <Route path="/login" element={<AuthPage isLogin={true} />} />

            <Route path="/create" element={<TravelFormPage />} />

            <Route path="/edit/:id" element={<TravelFormPage />} />
        </Routes>
    </Router>
  )
}

export default AppRouter
