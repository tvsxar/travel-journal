import { Link } from "react-router-dom";

function SwitchAuthLink({ isLogin }) {
  return (
    <p className="text-center text-sm text-gray-600 mt-4">
      {!isLogin ? "Already have an account? " : "Don't have an account? "}
      <Link
        to={isLogin ? "/register" : "/login"}
        className="text-cyan-500 font-semibold hover:underline"
      >
        {isLogin ? "Sign Up" : "Sign In"}
      </Link>
    </p>
  );
}

export default SwitchAuthLink;
