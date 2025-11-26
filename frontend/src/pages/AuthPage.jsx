import AuthForm from "../components/AuthForm";
import AuthSideImage from "../components/AuthSideImage";
import SwitchAuthLink from "../components/SwitchAuthLink";
import GoogleButton from "../components/GoogleButton";

function AuthPage({ isLogin }) {
  return (
    <div className="mx-auto flex min-h-screen items-center 
    justify-center bg-cyan-50 p-4">

      <div className="flex flex-col md:flex-row 
      w-full max-w-5xl rounded-2xl shadow-xl 
      overflow-hidden bg-white">

        <AuthSideImage />

        <div className="flex flex-col justify-center 
        py-8 px-4 md:w-1/2 md:px-8">

          <h2 className="text-2xl font-bold mb-8 md:text-3xl">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h2>

          <AuthForm isLogin={isLogin} />

          <p className="text-gray-400 text-center mt-4">or</p>

          <GoogleButton />

          <SwitchAuthLink isLogin={isLogin} />
        </div>

      </div>
      
    </div>
  );
}

export default AuthPage;
