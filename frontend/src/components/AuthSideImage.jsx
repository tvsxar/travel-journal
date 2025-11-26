import authBg from "../assets/auth-form-bg.jpeg";

function AuthSideImage() {
  return (
    <div className="h-48 md:h-auto md:w-1/2 relative">
      <img src={authBg} className="w-full h-full object-cover object-center" />
      <h2 className="absolute bottom-2 left-0 text-white text-3xl font-bold drop-shadow-lg px-3 py-1 rounded-md md:text-4xl lg:text-5xl">
        Capture Your Journeys
      </h2>
    </div>
  );
}

export default AuthSideImage;
