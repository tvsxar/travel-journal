import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleAuth } from "../store/slices/authSlice";

import AuthForm from "../components/AuthForm";
import AuthSideImage from "../components/AuthSideImage";
import SwitchAuthLink from "../components/SwitchAuthLink";
import GoogleButton from "../components/GoogleButton";

function AuthPage({ isLogin }) {
  const dispatch = useDispatch();
  const { user, userLoading, userError } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const dataToSend = isLogin
      ? {
          email: formData.email,
          password: formData.password,
        }
      : formData;

    dispatch(handleAuth({ isLogin, userData: dataToSend }));

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  }

  // if userLoading, show loading indicator
  if (userLoading) {
    return (
      <div
        className="mx-auto flex min-h-screen items-center 
      justify-center bg-cyan-50 p-4"
      >
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  // if user is logged in, navigate to home
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div
      className="mx-auto flex min-h-screen items-center 
    justify-center bg-cyan-50 p-4"
    >
      <div
        className="flex flex-col md:flex-row 
      w-full max-w-5xl rounded-2xl shadow-xl 
      overflow-hidden bg-white"
      >
        <AuthSideImage />

        <div
          className="flex flex-col justify-center 
        py-8 px-4 md:w-1/2 md:px-8"
        >
          <h2 className="text-2xl font-bold mb-8 md:text-3xl">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>

          <AuthForm
            isLogin={isLogin}
            formData={formData}
            userError={userError}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          <p className="text-gray-400 text-center mt-4">or</p>

          <GoogleButton />

          <SwitchAuthLink isLogin={isLogin} />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
