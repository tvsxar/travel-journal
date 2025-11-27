import google from "../assets/logo-google.svg";

function GoogleButton() {
  return (
    <button
      className="w-full text-sm font-medium shadow-lg border border-gray-100 text-gray-700 
          p-2 rounded-full my-2 mt-4 cursor-pointer hover:bg-gray-100 flex items-center justify-center h-12"
    >
      <a href={`${import.meta.env.VITE_API_URL}/auth/google`}
      className="flex items-center justify-center">
        <img src={google} className="w-6 h-6 mr-2" />
        Continue with Google
      </a>
    </button>
  );
}

export default GoogleButton;
